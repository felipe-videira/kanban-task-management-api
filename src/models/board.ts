import mongoose, { InferSchemaType }  from 'mongoose';

const BoardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  deleted: { type: Number, default: 0 }
});

export type BoardType = Omit<InferSchemaType<typeof BoardSchema>, "deleted">

export default mongoose.model('Board', BoardSchema);