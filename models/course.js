import { Schema, model, models } from "mongoose";

const courseSchema = new Schema(
  {
    name: { type: String, unique: true, required: true },
    title: { type: String, unique: true, required: true },
    description: { type: String, required: true },
    meta_title: { type: String, required: true, trim: true },
    meta_description: { type: String, required: true, trim: true },
    image: { type: String, required: true },
    slug: { type: String, required: true, trim: true },
    categories: [String],
    tags: [String],
    course_category: {
      type: Schema.Types.ObjectId,
      ref: "CourseCategories",
      required: true,
    },
    levels: [String],
    learning_cutcomes: [String],
    course_content: {
      type: Schema.Types.ObjectId,
      ref: "technicalRoadMap",
      required: true,
    },
    pricing: {
      type: Schema.Types.ObjectId,
      ref: "coursePricing",
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive", "pending", "approved", "reject"],
      default: "active",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const CourseModal = models?.Courses || model("Courses", courseSchema);

export default CourseModal;
