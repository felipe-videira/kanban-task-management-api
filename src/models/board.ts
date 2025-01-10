import mongoose from 'mongoose';

const BoardSchema = new mongoose.Schema({
  title: { type: String, required: true },
});

export default mongoose.model('Board', BoardSchema);