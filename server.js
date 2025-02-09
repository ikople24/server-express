const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const { readdirSync } = require("fs");
const handleError = require("./middlewares/error");
require("dotenv/config");
const {clerkMiddleware} = require("@clerk/express")

// const campingRoutes = require("./routes/camping");
// const profileRoutes = require("./routes/profile");

//middleware
app.use(cors()); // allow all origins
app.use(express.json({limit: "10mb"})); // allow json data
app.use(morgan("dev")); // show log in console
app.use(clerkMiddleware())

// Method: GET ดึง POST ส่งมา PUT อัพเดท PATCH แก้ไข DELETE ลบ
// console.log(readdirSync("./routes"));

readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

// app.use("/api", campingRoutes);
// app.use("/api", profileRoutes);
// app.get('/', (req, res)=>{
//   // code body
//   res.json({message: 'hi camping,'});
// });
app.use(handleError);

const PORT = 4000;
app.listen(PORT, () => console.log(`Server is run on port ${PORT}`));
