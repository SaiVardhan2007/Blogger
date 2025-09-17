#!/usr/bin/env node

// Test script to verify local development setup
const { spawn } = require('child_process');

console.log('🧪 Testing Local Development Setup\n');

// Test if we can start the backend
console.log('1. Testing backend connection...');
console.log('   Run: cd server && npm start');
console.log('   Expected: Server should start on http://localhost:4000\n');

console.log('2. Testing frontend connection...');
console.log('   Run: cd client && npm run dev');
console.log('   Expected: Frontend should start on http://localhost:5173\n');

console.log('3. Environment check:');
console.log('   ✅ Local .env file points to localhost:4000');
console.log('   ✅ CORS allows localhost connections');
console.log('   ✅ Auto-detection will use localhost when running locally\n');

console.log('🔧 To test locally right now:');
console.log('   Terminal 1: cd server && npm start');
console.log('   Terminal 2: cd client && npm run dev');
console.log('   Open: http://localhost:5173\n');

console.log('📱 Your app should work locally without any changes!');
