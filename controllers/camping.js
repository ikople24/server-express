exports.listCamping = (req, res) => {
  try {
    //code body
    console.log("List of camping");
    console.log(goodboy);
    res.send("hello controller");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ massage: "server error" });
  }
};

exports.readCamping = (req, res) => {
  try {
    res.send("Hello READ camping");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ massage: "server error" });
  }
};

exports.createCamping = (req, res) => {
  try{
    res.send("Hello CREATE camping");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ massage: "server error" });
  }
};

exports.updateCamping = (req, res) => {
  try {
    res.send("Hello UPDATE camping");
  } catch (error) {
    console.log(error.message)
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
