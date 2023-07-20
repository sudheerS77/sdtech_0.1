import mongoose from "mongoose";

const subSchema = new mongoose.Schema({
  subtopics: { type: [String], required: true },
});
const courseSchema = new mongoose.Schema(
  //   {
  //     name: String,
  //     image: String,
  //     cost: Number,
  //     description: String,
  //     slug: String,
  //     learning_outcomes: [{ type: String }],
  //     course_content: [{ type: String }],
  //   },
  {
    name: { type: String, unique: true, required: true },
    image: { type: String, required: true },
    cost: { type: Number, required: true },
    description: { type: String, required: true },
    slug: { type: String, required: true },
    learningOutcomes: { type: [String], required: true },
    courseContent: {
      type: [
        {
          topicName: {
            type: String,
            required: true,
            maxlength: 100,
          },
          subtopics: { type: [String], required: true },
        },
      ],
    },
    tags: [String],
  },
  //   {
  //     name: {
  //       type: "String",
  //     },
  //     image: {
  //       type: "String",
  //     },
  //     cost: {
  //       type: "Number",
  //     },
  //     description: {
  //       type: "String",
  //     },
  //     slug: {
  //       type: "String",
  //     },
  //     learningOutcomes: {
  //       type: ["String"],
  //     },
  //     courseContent: {
  //       type: ["Mixed"],
  //     },
  //   },
  {
    timestamps: true,
  }
);

const CourseModal =
  mongoose.models.Course || mongoose.model("Course", courseSchema);

export default CourseModal;
