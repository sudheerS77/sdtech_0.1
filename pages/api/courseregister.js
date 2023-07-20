import connectMongoDB from "@/lib/mongodb";
import courseRegisterModal from "@/models/courseRegister";

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
// const handleGET = async (req, res) => {
//   res.status(200).json({ data: courses });
// };

// Add new course
const handlePOST = async (req, res) => {
  const { data } = req.body;
  const result = await courseRegisterModal.create(data);
  console.log(result);
  res.status(200).json({ message: "submitted", result });
};
