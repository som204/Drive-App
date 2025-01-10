const multer = require('multer');
const { Upload } = require('@aws-sdk/lib-storage');
const s3 = require('./aws'); // Import the S3 client

const bucketName = process.env.BUCKET;

const upload= multer();

// const uploadMiddleware = multer({
//   storage: multer.memoryStorage(), // Files will be stored in memory temporarily
// });

// const uploadToS3 = async (file) => {
//   const upload = new Upload({
//     client: s3,
//     params: {
//       Bucket: bucketName,
//       Key: `${Date.now()}_${file.originalname}`, // Generate a unique file name
//       Body: file.buffer,
//       ContentType: file.mimetype,
//     },
//   });

//   return upload.done(); // Returns a promise
// };

//module.exports = { uploadMiddleware,uploadToS3 };
module.exports = { upload};
