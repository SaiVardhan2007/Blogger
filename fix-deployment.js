#!/usr/bin/env node

// Quick deployment fix script
// This script helps you get the correct URLs for your deployment

console.log('🔧 Blogger App Deployment Fix Helper\n');

console.log('📋 Steps to fix your deployment:\n');

console.log('1. Get your backend Vercel URL from your Vercel dashboard');
console.log('   Example: https://blogger-backend-abc123.vercel.app\n');

console.log('2. Update your frontend environment variable in Vercel:');
console.log('   Go to: Vercel Dashboard → Your Frontend Project → Settings → Environment Variables');
console.log('   Add: VITE_BASE_URL = https://your-backend-url.vercel.app\n');

console.log('3. Update your backend environment variables in Vercel:');
console.log('   Go to: Vercel Dashboard → Your Backend Project → Settings → Environment Variables');
console.log('   Add: NODE_ENV = production');
console.log('   Add: FRONTEND_URL = https://blogger-jagr.vercel.app\n');

console.log('4. Redeploy both applications after adding environment variables\n');

console.log('🔍 Current Configuration Status:');
console.log('✅ Frontend URL detected: https://blogger-jagr.vercel.app');
console.log('❌ Backend URL: NEEDS TO BE SET');
console.log('❌ Environment variables: NEEDS TO BE CONFIGURED IN VERCEL\n');

console.log('💡 Quick Test:');
console.log('After deployment, open browser console and look for:');
console.log('"API Request to: https://your-backend-url.vercel.app/api/blog/all"');
console.log('If you see localhost in the URL, the environment variable is not set correctly.\n');

console.log('🚀 Once fixed, your app should work in both local and production environments!');
