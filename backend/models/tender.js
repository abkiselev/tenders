const mongoose = require('mongoose')

const tenderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    url: {
      type: String,
      required: true,
      unique: true,
    },
    participants: {
      type: [
        {
          name: String,
          price: Number,
          isOnline: Boolean,
        },
      ],
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('tender', tenderSchema)
