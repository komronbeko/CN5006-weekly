var express = require("express");
var fs = require("fs");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send("hello it is my first express application");
});

app.get("/about", function (req, res) {
  res.send("This is basic express application ");
});

app.get("/users/:userid/books/:bookId", function (req, res) {
  res.send(req.params);
});

app.get("/getstudents", function (req, res) {
  studentdata = {};
  fs.readFile(__dirname + "/Student.json", "utf8", (err, data) => {
    res.json({
      status: true,
      Status_Code: 200,
      "requested at": req.localtime,
      requrl: req.url,
      "request Method": req.method,
      studentdata: JSON.parse(data),
    });
  });
});

app.get("/getstudent/:id", (req, res) => {
  const { id: myId } = req.params;
  console.log(myId);

  try {
    const data = fs.readFileSync(__dirname + "/Student.json", "utf8");

    const parsedData = JSON.parse(data);

    const student = parsedData.find((student) => student.id == myId);

    if (student) {
      res.json({
        status: true,
        Status_Code: 200,
        "requested at": new Date().toLocaleString(), // Local time for the request
        requrl: req.url,
        "request Method": req.method,
        student: student, // No need to parse again
      });
    } else {
      res.status(404).json({
        status: false,
        Status_Code: 404,
        message: "Student not found",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: false,
      Status_Code: 500,
      message: "Server error",
    });
  }
});

app.get("/studentinfo", (req, res) => {
  res.sendFile("StudentInfo.html", { root: __dirname });
});

app.post("/submit-data", function (req, res) {
  const { firstName, lastName, myAge, gender, Qual } = req.body;

  res.send({
    status: true,
    message: "form Details",
    data: {
      name: `Name: ${firstName} ${lastName}`,
      age: `Age: ${myAge}`,
      gender: `Gender: ${gender}`,
      qual: `Qualification: ${Qual}`,
    },
  });
});

app.listen(3000, function () {
  console.log(`server is running on port 3000`);
});
