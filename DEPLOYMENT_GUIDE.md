# Vercel Deployment Guide for MERN Blogger App

## Issue Identified
Your frontend was configured to use `localhost:4000` which doesn't work in production. This guide will help you fix the deployment configuration.

## Step-by-Step Deployment Fix

### 🔍 Current Status
- ✅ Frontend URL: `https://blogger-jagr.vercel.app`
- ❌ Backend URL: **NEEDS TO BE SET**
- ❌ Environment Variables: **NEEDS CONFIGURATION**

### 1. Backend Deployment (Server)
1. Get your backend Vercel URL from your dashboard
2. In your Vercel dashboard for the **backend project**, add these environment variables:
   ```
   NODE_ENV=production
   JWT_SECRET=secret
   ADMIN_EMAIL=polampallisaivardhan1423@gmail.com
   ADMIN_PASSWORD=sai1423
   MONGODB_URI=mongodb+srv://polampallisaivardhan1423_db_user:kavyasai.09@cluster0.wz2saen.mongodb.net
   IMAGEKIT_PUBLIC_KEY=public_eK340hyw1O8Ghox8fIwlQjD3cRU=
   IMAGEKIT_PRIVATE_KEY=private_iORntDDtPr74n+l1PtWLCzzUmpk=
   IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/yrsccyods
   GEMINI_API_KEY=AIzaSyBaMZ9oqxV2dHNuA9kaSy7YAXEE05jkrBg
   FRONTEND_URL=https://blogger-jagr.vercel.app
   ```

### 2. Frontend Deployment (Client)
1. In your Vercel dashboard for the **frontend project** (`blogger-jagr.vercel.app`), add this environment variable:
   ```
   VITE_BASE_URL=https://your-actual-backend-url.vercel.app
   ```
   
   **Replace `your-actual-backend-url` with your real backend URL from step 1**

### 3. Update CORS Configuration
The backend CORS has been updated to accept requests from your frontend domain in production.

### 4. Redeploy Both Applications
1. Redeploy your backend with the new environment variables
2. Update the frontend environment variable with the actual backend URL
3. Redeploy your frontend

## Quick Fix Commands

After getting your Vercel URLs, run these commands:

```bash
# Update frontend environment for production
echo "VITE_BASE_URL=https://your-actual-backend-url.vercel.app" > client/.env.production

# Update backend CORS in server.js (already done)
# The CORS configuration now uses FRONTEND_URL environment variable
```

## Testing
1. Open browser developer tools
2. Check Network tab for API calls
3. Verify that API calls are going to your Vercel backend URL, not localhost
4. Check Console for any CORS errors

## Common Issues & Solutions

### Issue: CORS Error
- **Solution**: Ensure FRONTEND_URL environment variable is set correctly in backend Vercel dashboard

### Issue: 404 on API calls
- **Solution**: Verify VITE_BASE_URL points to correct backend URL

### Issue: Environment variables not working
- **Solution**: Redeploy after adding environment variables in Vercel dashboard

## Environment Variables Checklist

### Backend (Vercel Dashboard)
- [ ] NODE_ENV=production
- [ ] JWT_SECRET
- [ ] ADMIN_EMAIL  
- [ ] ADMIN_PASSWORD
- [ ] MONGODB_URI
- [ ] IMAGEKIT_PUBLIC_KEY
- [ ] IMAGEKIT_PRIVATE_KEY
- [ ] IMAGEKIT_URL_ENDPOINT
- [ ] GEMINI_API_KEY
- [ ] FRONTEND_URL

### Frontend (Vercel Dashboard)
- [ ] VITE_BASE_URL

## Next Steps
1. Get your actual Vercel URLs from the deployments
2. Update the environment variables with real URLs
3. Redeploy both applications
4. Test the connection between frontend and backend
