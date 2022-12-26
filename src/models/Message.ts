import mongoose, { Schema } from "mongoose";
import { IMessage } from "../interface/IMessage";

const MessageModel = new mongoose.Schema({
  timestamp: {
    type: Date,
    required: true,
  },
  isReceiver: {
    type: Boolean,
    required: false,
    default: false,
  },
  text: {
    type: String,
    required: true,
  },
  latitude: {
    type: String,
    required: false,
    default: "",
  },
  longitude: {
    type: String,
    required: false,
    default: "",
  },
  chat: {
    type: Schema.Types.ObjectId,
    ref: "Chat",
    required: true,
  },
});

export default mongoose.model<IMessage & mongoose.Document>(
  "Message",
  MessageModel
);
