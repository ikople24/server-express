const prisma = require("../config/prisma");

exports.listCamping = async (req, res) => {
  try {
    //code body
    const campings = await prisma.landmark.findMany();

    res.json({result: campings });
    // res.send("Hello List");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ massage: "server error"});
  }
};

exports.readCamping = async (req, res) => {
  try {
    //code body
    const { id } = req.params;
    const camping = await prisma.landmark.findFirst({
      where:{
        id: Number (id),
      }
    })

    res.json({result: camping });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ massage: "server error" });
  }
};

exports.createCamping = async (req, res) => {
  try {
    const { title, description, price, category, lat, lng } = req.body;
    const { id } = req.user;
    const camping = await prisma.landmark.create({
      data: {
        title: title,
        description: description,
        price: price,
        category: category,
        lat: lat,
        lng: lng,
        profileId: id,
      },
    });

    res.json({ 
      message: "Create Camping Successfully!!!", 
      result: camping });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ massage: "server error" });
  }
};

exports.updateCamping = (req, res) => {
  try {
    res.send("Hello UPDATE camping");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ massage: "server error" });
  }
};

exports.deleteCamping = (req, res) => {
  try {
    res.send("Hello DELETE camping");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ massage: "server error" });
  }
};
