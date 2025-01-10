const express = require("express");
const router = express.Router();
const { upload } = require("../config/multer");
const { uploadFile,getFile,deleteFile } = require("../config/aws");
const fetch = require("node-fetch");
const file = require("../models/file.models");
const authorization = require("../middleware/auth");
const mime = require("mime-types");


router.post("/upload",authorization,upload.single("file"),async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "No file uploaded!" });
      }
      const OriginalFile = req.file.originalname;
      const UploadFileName = Date.now() + "_" + OriginalFile;
      // Get the signed URL for the file
      const fileType = mime.lookup(OriginalFile);
      const signedUrl = await uploadFile(UploadFileName, fileType);

      // Use fetch to send the file to S3 using the signed URL
      const response = await fetch(signedUrl, {
        method: "PUT", // PUT request to upload the file
        headers: {
          "Content-Type": fileType, // Set the Content-Type based on file's MIME type
        },
        body: req.file.buffer, // Attach the file buffer to the request body
      });
      //console.log(UploadFileName);
      const createFile = await file.create({
        username: req.user.userId,
        originalname: OriginalFile,
        uploadname: UploadFileName,
      });

      res
        .status(200)
        .json({ message: "File uploaded successfully!", createFile });
    } catch (error) {
      console.error("Error uploading file:", error);
      return res.status(500).json({ message: "Error uploading file", error });
    }
  }
);


router.get('/filelist',authorization,async (req,res)=>{
  //console.log(req.user.userId);
  const userFiles= await file.find({
    username:req.user.userId
  })
  //console.log(user);
  res.json(userFiles);

});





router.post('/download',authorization,async (req,res)=>{

  const filename=req.body.uploadName;
  const username=req.user.userId;
  
  const validUser= await file.findOne({
    username:username,
    uploadname:filename
  })

  if(!validUser){
    res.status(401).json({
      message: "You are not authorized to download this file"
    });
  }
  const signedUrl = await getFile(filename);
  res.status(200).send(signedUrl);

});

router.post('/delete',authorization,async (req,res)=>{
  const fileName=req.body.uploadName;
  const username=req.user.userId;
  try {
    const r = await deleteFile(fileName);
    if (!r.success) {
      return res.status(400).json({
        message: "File not found or could not be deleted from storage",
      });
    }

    const deletefile = await file.deleteOne({
      username: username,
      uploadname: fileName,
    });

    res.status(200).json({
      success: true,
      message: "File deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting file:", error);
    res.status(500).json({
      success: false,
      message: "An internal server error occurred",
    });
  }

});




module.exports = router;
