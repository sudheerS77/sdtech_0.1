import connectMongoDB from "@/lib/mongodb";
import CourseModal from "@/models/course";
import { NextResponse } from "next/server";


export default async function handler(req, res) {
  const { method } = req;

  try {
    await connectMongoDB();

    switch (method) {
      case "GET":
        await handleGET(req, res);
        break;
      case "POST":
        await handlePOST(req, res);
        break;
    }
  } catch (error) {
    if (error.name === "ValidationError")
      console.log("Validation Error", error.errors);
    else console.log("Error", error);
  }
}

// Get all courses
const handleGET = async (req, res) => {
  const courses = await CourseModal.find({});
  res.status(200).json({ data: courses });

  // const apiUrl = 'https://sdtech-0-1.vercel.app'; // Replace with your API URL
    // const apiResponse = await axios.get(`${apiUrl}${req.url}`);
    // res.status(apiResponse.status).json(apiResponse.data);
};

// Add new course
const handlePOST = async (req, res) => {
  const {
    name,
    image,
    cost,
    description,
    slug,
    learning_outcomes,
    course_content,
  } = req.body;
  const courseData = req.body;
  console.log(courseData);
  // const course = await CourseModal.create({
  //   courseData
  // });

  const newCourse = new CourseModal(req.body);
  await newCourse.validate();
  newCourse
    .save()
    .then((createdCourse) => {
      // console.log("Course Added to List", createdCourse);
      res.status(200).json({ message: "course added successfully", data: createdCourse});

    })
    .catch((err) => {
      console.log("Error creating course", err);
    });

};
