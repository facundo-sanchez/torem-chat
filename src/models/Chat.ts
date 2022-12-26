import mongoose, { Schema } from "mongoose";
import { IChat } from "../interface/IChat";

const ChatModel = new mongoose.Schema({
  isFavourite: {
    type: Boolean,
    required: true,
  },
  Customer: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
});

export default mongoose.model<IChat & mongoose.Document>("Chat", ChatModel);
