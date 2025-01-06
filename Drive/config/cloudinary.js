const cloudinary = require('cloudinary').v2;


cloudinary.config({ 
  cloud_name: 'dwziepebd', 
  api_key: '958732582188144', 
  api_secret: 'KYOIfIzMdTtW8soUu2OC35vR_Gg',
  secure: true
});

module.exports= cloudinary;