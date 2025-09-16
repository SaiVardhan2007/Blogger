import jwt from 'jsonwebtoken'
import Blog from '../models/Blog.js';
export const adminLogin = async (req, res)=>{
    try {
        const {email, password} = req.body;

        if(email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD){
            return res.json({success: false, message: "Invalid Credentials"})
        }

        const token = jwt.sign({email}, process.env.JWT_SECRET)
        res.json({success: true, token})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}
    
export const getDashboard = async (req, res) =>{
    try {
        const recentBlogs = await Blog.find({}).sort({ createdAt: -1 });
        const blogs = await Blog.countDocuments();

        const dashboardData = {
            blogs,recentBlogs
        }
        res.json({success: true, dashboardData})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}
