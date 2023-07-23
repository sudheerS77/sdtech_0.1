import mongoose from "mongoose";

const B2BContactSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    organizationName: {
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

const B2BContactModal =
  mongoose.models.contact || mongoose.model("b2bcontact", B2BContactSchema);

export default B2BContactModal;
