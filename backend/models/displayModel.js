import mongoose from 'mongoose'

const displaySchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String, 
      required: true
    }
  }
)

const Display = mongoose.model('Display', displaySchema);

export default Display;