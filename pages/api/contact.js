import connectMongoDB from "@/lib/mongodb";
import B2BContactModal from "@/models/b2bcontact";
import contactModal from "@/models/contact";

export default async function handler(req, res) {
  const { method } = req;
  try {
    connectMongoDB();
    switch (method) {
      case "GET":
        await handlerGET(req, res);
        break;
      case "POST":
        await handlePOST(req, res);
        break;
    }
  } catch (error) {
    if (error.name === "ValidationError")
      res
        .status(500)
        .json({ message: "Validation Error", error: error.message });
    else res.status(500).json({ error: error.message });
  }
}

//Get contacts
const handlerGET = async (req, res) => {
  const data = await contactModal.find({});
  return res.status(200).json({ data });
};

//
const handlePOST = async (req, res) => {
  const { data } = req.body;
  var result = await contactModal.create(data);
  console.log(data.contactType, result);
  return res.status(200).json({ message: "Submitted" });
};
