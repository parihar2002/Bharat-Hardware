import Razorpay from "razorpay";
import Order from "../models/Order.js";
import crypto from "crypto";
import dotenv from "dotenv";

dotenv.config();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// 1️⃣ Create an Order
export const createOrder = async (req, res) => {
  try {
    const { userId, amountTotal } = req.body;
    const order = new Order({
      orderId: crypto.randomUUID(),
      userId,
      amountTotal,
      amountPaid: 0,
      isPaidInFull: false,
    });

    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// 2️⃣ Capture a Partial Payment
export const capturePayment = async (req, res) => {
  try {
    const { orderId, amount, paymentMethod, transactionId } = req.body;

    if (!orderId || !amount || !paymentMethod || !transactionId) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const order = await Order.findOne({ orderId });

    if (!order) return res.status(404).json({ message: "Order not found" });

    // ✅ Convert amount to a number before adding
    const parsedAmount = Number(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      return res.status(400).json({ message: "Invalid amount" });
    }

    order.amountPaid += parsedAmount;
    order.paymentDetails.push({ amount: parsedAmount, paymentMethod, transactionId });

    if (order.amountPaid >= order.amountTotal) {
      order.isPaidInFull = true;
    }

    await order.save();
    res.json({ message: "Payment recorded successfully", order });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

