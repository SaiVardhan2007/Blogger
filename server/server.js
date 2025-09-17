import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';

const app = express();

await connectDB()

// Middlewares
const corsOptions = {
    origin: process.env.NODE_ENV === 'production' 
        ? [
            process.env.FRONTEND_URL || 'https://blogger-jagr.vercel.app',
            'https://blogger-jagr.vercel.app'
          ] 
        : ['http://localhost:5173', 'http://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions))
app.use(express.json())

// Routes
app.get('/', (req, res)=> res.send("API is Working"))
app.use('/api/admin', adminRouter)
app.use('/api/blog', blogRouter)

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log('Server is running on port ' + PORT)
})

export default app;