const express = require("express");
const cors = require("cors");
const app = express();
const campingRoutes = require("./routes/camping");

//middleware
app.use(cors()); // allow all origins
app.use(express.json()); // allow json data


// Method: GET ดึง POST ส่งมา PUT อัพเดท PATCH แก้ไข DELETE ลบ
app.use("/api", campingRoutes);
// app.get('/', (req, res)=>{
//   // code body
//   res.json({message: 'hi camping,'});
// });

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is run on port ${PORT}`));
