import connectMongoDB from "@/lib/mongodb";
import CourseModal from "@/models/course";

export default async function handler(req, res) {
  try {
    const { method } = req;

    switch (method) {
      case "GET":
        await handleGET(req, res);
        break;
      // case "POST":
      //     break;
    }
  } catch (error) {
    if (error.name === "ValidationError")
      console.log("Validation Error", error.errors);
    else console.log("Error ==>", error);
  }
}

// Get individual course
const handleGET = async (req, res) => {
  const { courseName } = req.query;
  const courseData = await CourseModal.find({ name: courseName });
  // console.log(courseData);
  res.status(200).json({ data: courseData });
};
