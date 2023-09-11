import mongoose from "mongoose";

const subSchema = new mongoose.Schema({
  subtopics: { type: [String], required: true },
});
const courseSchema = new mongoose.Schema(
  {
    name: { type: String, unique: true, required: true },
    title: { type: String, unique: true, required: true },
    description: { type: String, required: true },
    meta_title: { type: String, required: true, trim: true },
    meta_description: { type: String, required: true, trim: true },
    image: { type: String, required: true },
    slug: { type: String, required: true, trim: true },
    categories: [String],
    tags: [],
    pricing: [
      {
        beginner: {
          rupess: Number,
          dollars: Number,
        },
      },
    ],
    levels: [String],
    learning_cutcomes: [String],
    course_content: [
      {
        level: String,
        data: [
          {
            topicName: String,
            subtopics: [String],
          },
        ],
        level_learning_outcomes: [String],
        no_of_classes: Number,
        no_of_months: String,
        certification_name: String,
        pricing: [
          {
            course_level_category: String,
            course_level_pricing: [
              {
                level: String,
                rupees: Number,
                dollars: Number,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

const CourseModal =
  mongoose.models.Course123 || mongoose.model("Course123", courseSchema);

export default CourseModal;

// courseContent: {
//   type: [
//     {
//       topicName: {
//         type: String,
//         required: true,
//         maxlength: 100,
//       },
//       subtopics: { type: [String], required: true },
//     },
//   ],
// },
// tags: [String],
