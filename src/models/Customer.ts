import mongoose from "mongoose";
import { ICustomer } from "../interface/ICustomer";

const CustomerModel = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  creditCart: {
    type: String,
    required: false,
    default: null,
  },
  phoneNumber: {
    type: String,
    required: false,
    default: null,
  },
});

export default mongoose.model<ICustomer & mongoose.Document>(
  "Customer",
  CustomerModel
);
