import mongoose from "mongoose";

const CourseRegisterSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  dob: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    required: true,
  },
  studentEmail: {
    type: String,
    require: true,
  },
  studentWhatsAppNumber: {
    type: Number,
    required: true,
    trim: true,
  },

  parentFirstName: {
    type: String,
    required: true,
    trim: true,
  },
  parentLastName: {
    type: String,
    required: true,
    trim: true,
  },
  parentEmail: {
    type: String,
    require: true,
  },

  parentWhatsAppNumber: {
    type: Number,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
  },
});

const courseRegisterModal =
  mongoose.models.courseRegister1 ||
  mongoose.model("courseRegister1", CourseRegisterSchema);

export default courseRegisterModal;
