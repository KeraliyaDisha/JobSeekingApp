import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please probide job title"],
    minLength: [3, "Job title must contain at least 3 characters!"],
    maxLength: [50, "Job title cannot exceed 50 characers!"],
  },
  description: {
    type: String,
    required: [true, "Please provide job descriprion"],
    minLength: [30, "description must contain at least 30 haracters!"],
    maxLength: [350, "description cannot exceed 350 characers!"],
  },
  category: {
    type: String,
    required: [true, "Job category is required!"],
  },
  country: {
    type: String,
    required: [true, "Job country is required!"],
  },
  city: {
    type: String,
    required: [true, "Job city is required!"],
  },
  location: {
    type: String,
    required: [true, "Please provide exact location!"],
    minLength: [50, "job location must contain at least 50 characters!"],
  },
  fixedSalary: {
    type: Number,
    minLength: [4, "fixedSalary must contain at least 4 digits!"],
    maxLength: [9, "fixedSalary cannot exceed 9 digits!"],
  },
  salaryFrom: {
    type: Number,
    minLength: [4, "salary Form must contain at least 4 digits!"],
    maxLength: [9, "salary Form cannot exceed 9 digits!"],
  },
  salaryTo: {
    type: Number,
    minLength: [4, "salary To must contain at least 4 digits!"],
    maxLength: [9, "salary To cannot exceed 9 digits!"],
  },
  expired: {
    type: Boolean,
    default: false,
  },
  jobPostedOn: {
    type: Date,
    default: Date.now,
  },
  postedBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

export const Job = mongoose.model("Job", jobSchema);
