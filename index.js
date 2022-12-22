const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/finish", (req, res) => {
  const { fullName, email, message } = req.body;
  //console.log(fullName, email, message);

  // Forma za slanje mejla
  //console.log(req.body);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mitrovicdarko94@gmail.com",
      pass: "hwasxtllrydgmegw",
    },
  });

  const mailOption = {
    from: req.body.email,
    to: "mitrovicdarko94@gmail.com",
    subject: `Message from ${req.body.email}: -  ${req.body.fullName} - ${req.body.phone}`,
    text: req.body.message,
  };

  transporter.sendMail(mailOption, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error");
    } else {
      console.log(info);
      res.send("success");
    }
  });
});

app.listen(port, () => console.log("Server is listening on port 3000"));
