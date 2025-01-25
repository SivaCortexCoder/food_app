import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Placing user order from frontend
const placeOrder = async (req, res) => {
    const frontend_Url = "https://food-app-frontend-vjgo.onrender.com";

    try {
        // Create a new order
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount, // Store the total cart amount in INR
            address: req.body.address
        });

        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

        // Prepare line items for Stripe
        const line_items = req.body.items.map((item) => ({
            price_data: {
                currency: "inr",
                product_data: {
                    name: item.name
                },
                unit_amount: item.price * 100 // Convert price from INR to paise
            },
            quantity: item.quantity
        }));

        // Create Stripe checkout session
        const session = await stripe.checkout.sessions.create({
            line_items: line_items,
            mode: 'payment',
            success_url: `${frontend_Url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${frontend_Url}/verify?success=false&orderId=${newOrder._id}`
        });

        res.json({ success: true, session_url: session.url });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

const verifyOrder = async(req,res) => {
    const {orderId,success} = req.body;
    try{

    
    if(success=="true") {
        await orderModel.findByIdAndUpdate(orderId,{payment:true});
        res.json({success:true,message:"Paid"})

    }
    else{
        await orderModel.findByIdAndDelete(orderId);
        res.json({success:false,message:"Not Paid"})

    }
}catch (error){
    console.log(error);
    res.json({success:false,message:"Error"})

}

}

//users orders for frontend
const userOrders = async (req,res) => {
    try {
        const orders = await orderModel.find({userId:req.body.userId})
        res.json({success:true,data:orders})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
    }

}

//listing orders for admin panel
const listOrders = async (req,res) => {
    try {
        const orders = await orderModel.find({});
        res.json({success:true,data:orders})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
    }

}

// api for updating order status 
const updateStatus = async (req,res) =>{
    try {
        await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status})
        res.json({success:true,message:"Status Updated"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})

        
    }
    
}

export { placeOrder,verifyOrder,userOrders,listOrders,updateStatus};
