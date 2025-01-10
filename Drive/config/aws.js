const { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
const mime = require('mime-types');

const s3 = new S3Client({
  credentials: {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
  },
  region: process.env.REGION,
});

const uploadFile= async (file,fileType)=>{
  const command= new PutObjectCommand(
    {
      Bucket: process.env.BUCKET,
      Key: file,
      ContentType: fileType
      //Body: file.buffer
    }
  )

  const uploadUrl = await getSignedUrl(s3, command); 
  //console.log(mime.lookup(file));
  //console.log(file.mimetype);
  return uploadUrl;

//   try {

//     const response= await s3.send(command);
//     return response;
//   } catch (error) {
//     console.error(error);
//     return error;
//   }

 }


 const getFile= async (file)=>{
  const command= new GetObjectCommand(
    {
      Bucket: process.env.BUCKET,
      Key: file,
    }
  )

  const uploadUrl = await getSignedUrl(s3, command); // Expires in 1 hour
  return uploadUrl;
 }


 const deleteFile = async (fileName) => {
  const params = {
    Bucket: process.env.BUCKET, 
    Key: fileName
  };

  try {
    const command = new DeleteObjectCommand(params);
    
    await s3.send(command);
    return { success: true, message: `File ${fileName} deleted successfully!` };
  } catch (error) {
    console.error("Error deleting file:", error);
    return { success: false, message: "Failed to delete file", error };
  }
};




module.exports = {uploadFile,getFile,deleteFile};
