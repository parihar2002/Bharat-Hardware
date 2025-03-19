import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  orderId: { type: String, required: true, unique: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  amountTotal: { type: Number, required: true }, 
  amountPaid: { type: Number, default: 0 }, 
  isPaidInFull: { type: Boolean, default: false }, 
  paymentDetails: [
    {
      amount: Number,
      paymentDate: { type: Date, default: Date.now },
      paymentMethod: String,
      transactionId: String,
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Order", OrderSchema);
