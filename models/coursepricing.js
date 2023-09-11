const mongoose = require("mongoose");

const CoursePricingSchema = new mongoose.Schema({
  pricing: [
    {
      course_level_category: { type: String },
      course_level_pricing: {
        type: [
          {
            level: {
              type: String,
            },
            rupees: {
              type: String,
            },
            dollars: {
              type: String,
            },
          },
        ],
      },
    },
  ],
});

const CoursePricing =
  mongoose.models.coursePricing ||
  mongoose.model("coursePricing", CoursePricingSchema);

export default CoursePricing;
