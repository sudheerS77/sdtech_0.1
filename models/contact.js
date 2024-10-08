import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      require: true,
      trime: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
      maxlength: 100,
    },
    progress: {
      type: String,
      default: "Form Submitted",
    },
    remarks: {
      type: String,
      default: null,
    },
    contactType: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const contactModal =
  mongoose.models.contact || mongoose.model("contact", contactSchema);

export default contactModal;
