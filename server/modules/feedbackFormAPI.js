require("dotenv").config({ path: "./.env" });

var nodemailer = require("nodemailer");

const sendFeedback = (req) => {
  console.log(req.body);

  var transporter = nodemailer.createTransport({
    host: process.env.FEEDBACK_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.FEEDBACK_USER,
      pass: process.env.FEEDBACK_PASSWORD,
    },
  });

  var mailOptions = {
    from: "btcdash@philipp-liebhart.de",
    to: "btcdash@philipp-liebhart.de",
    subject: `Contact name: ${req.body.name}`,
    html: `<h1>Contact details</h1>
  <h2> name:${req.body.name} </h2><br>
  <h2> email:${req.body.email} </h2><br>
  <p> Message:${req.body.message} </p><br>
  `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.send("error");
    } else {
      console.log("Email sent: " + info.response);
      res.send("Sent Successfully"); // todo res doesnt't send??
    }
  });
};

module.exports = { sendFeedback };
