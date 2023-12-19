import mongoose from "mongoose";
const CourseSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      duration: {
        type: String,
        required: true
      },
      level: {
        type: String,
        required: true
      },
      topics: {
        type: [String],
        required: true
      },
      schedule: {
        startDate: {
          type: Date,
          required: true
        },
        endDate: {
          type: Date,
          required: true
        },
        classDays: {
          type: [String],
          required: true
        },
        classTime: {
          type: String,
          required: true
        }
      }
  },
  { timestamps: true }
);

export default mongoose.model("Course", CourseSchema);