const cloudinary = require("cloudinary").v2;
// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
});

exports.createImages = async (req, res, next) => {
  try {
    console.log(req.body.image);
    const { image } = req.body;
    const result = await cloudinary.uploader.upload(image, {
      public_id: `${Date.now()}`,
      resource_type: "auto",
      folder: "Landmark", // JPEG, PNG
    });
    // res.json({ message: "Hello , Upload image" });
    res.json({result: result});
  } catch (error) {
    next(error);
  }
};
