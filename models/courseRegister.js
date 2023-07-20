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
  email: {
    type: String,
    require: true,
  },
  postalCode: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
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
  whatsAppNumber: {
    type: Number,
    required: true,
    trim: true,
  },
  parentEmail: {
    type: String,
    require: true,
  },
});

const courseRegisterModal =
  mongoose.model.CourseRegister ||
  mongoose.model("CourseRegister", CourseRegisterSchema);

export default courseRegisterModal;

// import mongoose from "mongoose";

// const CourseRegisterSchema = new mongoose.Schema({
//   studentFirstName: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   studentLastName: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   parentFirstName: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   parentLastName: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   dob: {
//     type: String,
//     require: true,
//   },
//   studentEmail: {
//     type: String,
//     require: true,
//   },
//   parentEmail: {
//     type: String,
//     require: true,
//   },
//   postalCode: {
//     type: String,
//     required: true,
//   },
//   country: {
//     type: String,
//     required: true,
//   },
//   whatsAppNumber: {
//     type: Number,
//     required: true,
//     trim: true,
//   },
// });

// const courseRegisterModal =
//   mongoose.model.CourseRegister ||
//   mongoose.model("CourseRegister", CourseRegisterSchema);

// export default courseRegisterModal;
