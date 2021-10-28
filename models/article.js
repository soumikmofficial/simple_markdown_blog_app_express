const mongoose = require("mongoose");
const slugify = require("slugify");

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "You must provide a title to your article"],
    maxlength: 200,
  },
  description: {
    type: String,
  },
  markdown: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  slug: {
    type: String,
    unique: true,
    required: true,
  },
});

articleSchema.pre("validate", function (next) {
  if (this.title) {
    let slug = slugify(this.title, { strict: true, lower: true });
    console.log(slug);
    this.slug = slug;
  }

  next();
});

module.exports = mongoose.model("Article", articleSchema);
