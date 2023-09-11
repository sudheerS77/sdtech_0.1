import { Schema, model, models } from "mongoose";

const CourseCategorySchema = new Schema({
  courseCategoryName: {
    type: String,
    unique: true,
    require: true,
    trim: true,
  },
});

const CourseCategories =
  models.CourseCategories || model("CourseCategories", CourseCategorySchema);

export default CourseCategories;
