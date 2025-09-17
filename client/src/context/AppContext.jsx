import {createContext, useContext, useEffect, useState} from 'react'
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast';

// Determine the correct base URL based on environment
const getBaseURL = () => {
    // If VITE_BASE_URL is set, use it
    if (import.meta.env.VITE_BASE_URL) {
        return import.meta.env.VITE_BASE_URL;
    }
    
    // Fallback: determine based on current location
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        return 'http://localhost:4000';
    }
    
    // For production, you need to set your actual backend URL
    // Replace this with your actual Vercel backend URL
    return 'https://your-actual-backend-url.vercel.app';
};

axios.defaults.baseURL = getBaseURL();

// Add request interceptor for debugging
axios.interceptors.request.use(
    (config) => {
        console.log('API Request to:', config.baseURL + config.url);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add response interceptor for better error handling
axios.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Error:', error.message);
        if (error.code === 'ERR_NETWORK') {
            toast.error('Unable to connect to server. Please check if the backend is running.');
        }
        return Promise.reject(error);
    }
);

const AppContext = createContext();

export const AppProvider = ({ children })=>{

    const navigate = useNavigate()

    const [token, setToken] = useState(null)
    const [blogs, setBlogs] = useState([])
    const [input, setInput] = useState("")

    const fetchBlogs = async ()=>{
        try {
           const {data} = await axios.get('/api/blog/all');
           data.success ? setBlogs(data.blogs) : toast.error(data.message)
        } catch (error) {
            console.error('Failed to fetch blogs:', error);
            // Don't show network error toast on initial load
        }
    }

    useEffect(()=>{
        fetchBlogs();
        const token = localStorage.getItem('token')
        if(token){
            setToken(token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
    },[])

    const value = {
        axios, navigate, token, setToken, blogs, setBlogs, input, setInput
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = ()=>{
    return useContext(AppContext)
};