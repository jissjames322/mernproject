import express from "express";
const port = process.env.PORT || 4000;
const app = express();
import cors from "cors";

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

import mongoose from "mongoose";
const connectDB = () => {
  console.log("..........just started.............");
  mongoose
    .connect(`mongodb://127.0.0.1:27017/collegeDB`)
    .then(() => console.log(`-------MongoDB Connected------------`))
    .catch((error) => {
      console.error(error.message);
    });
};

connectDB();

const studentSchema = {
  rollno: Number,
  name: String,
  gender: String,
  course: String,
  address: String,
  email: String,
  contactno: Number,
};

const monmodel1 = mongoose.model("students", studentSchema);

app.use(express.json());

app.get("/getMaxrollno", (req, res) => {
  monmodel1
    .findOne()
    .sort("-rollno")
    .limit(1) //---you should sort in descending order by prepending a - sign to the field name: .sort('-rollno').
    .then((result) => {
      //*************************//
      if (result) {
        const maxValue = result.rollno;
        console.log("-------maxvalue----------" + maxValue);
        res.json({ maxValue });
      } else {
        console.log("No documents found in the collection");
        res.json({ maxValue: 0 }); // so return a default value
      }
      //***************************//
    })
    .catch((err) => res.json(err));
});
//************************************************ */

/********************student registration******************************* */
app.post("/registration", (req, res) => {
  console.log("----------inside registration-------");
  monmodel1
    .create(req.body)

    .then((students) => res.json(students))
    .catch((err) => res.json(err));
});
/****************************************** */
app.get("/getStudents", (req, res) => {
  monmodel1
    .find()
    .then((students) => res.json(students))
    .catch((err) => res.json(err));
});

app.delete("/deleteStudent/:rno", (req, res) => {
  const rn = req.params.rno;
  monmodel1
    .findOneAndDelete({ rollno: rn })

    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});

app.get("/getStudent/:rno", (req, res) => {
  const rn = req.params.rno;
  console.log("----------rno----" + rn);
  monmodel1
    .findOne({ rollno: rn })
    .then((students) => {
      res.json(students);
      console.log("----------fetching----" + students);
    })
    .catch((err) => res.json(err));
});



app.listen(3000, () => {
  console.log("............Server running on port 3000.................");
});

 app.put("/updateStudent/:rno", (req, res) => {
   const rno = req.params.rno;
   monmodel1
     .findOneAndUpdate(
       { rollno: rno },
       {
         name: req.body.name,
         gender: req.body.gender,
         course: req.body.course,
         address: req.body.address,
         email: req.body.email,
         contactno: req.body.contactno,
       }
     )
     .then((students) => res.json(students))
     .catch((err) => res.json(err));
 });