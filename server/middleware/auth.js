import jwt from "jsonwebtoken";

const auth = (req, res, next)=>{
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.json({success: false, message: "No token provided"})
    }

    // Extract token from "Bearer <token>" format
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : authHeader;

    if (!token) {
        return res.json({success: false, message: "No token provided"})
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Store decoded user info in request
        next();
    } catch (error) {
        console.error('JWT verification error:', error.message);
        res.json({success: false, message: "Invalid token"})
    }
}

export default auth;