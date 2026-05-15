# TravelGenie Deployment Guide (Vercel + Render)

## Backend Deployment (Render)

### Steps:
1. Go to [render.com](https://render.com) and sign up
2. Create a new **Web Service**
3. Connect your GitHub repository
4. Configure the following:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment Variables**:
     - `MONGO_URI`: Your MongoDB connection string (keep as synced)
     - `JWT_SECRET`: Your JWT secret key (keep as synced)
     - `GROQ_API_KEY`: Your Groq API key (keep as synced)
     - `CORS_ORIGIN`: `https://your-vercel-frontend.vercel.app` (replace with actual Vercel URL)
     - `NODE_ENV`: `production`

5. Deploy and copy the render.com URL (e.g., `https://travelgenie-9m11.onrender.com`)

## Frontend Deployment (Vercel)

### Steps:
1. Go to [vercel.com](https://vercel.com) and sign up
2. Import your GitHub repository
3. Configure the following:
   - **Framework**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Environment Variables**:
     - `VITE_API_URL`: `https://your-render-backend.onrender.com` (your Render URL from above)

4. Deploy

## Important Security Notes:
- ⚠️ Remove secrets from `.env` files before pushing to GitHub
- Use deployment platform's environment variables for sensitive data
- Never commit `.env` files with real secrets
- Create `.env.example` files for reference (already created)

## Post-Deployment:
1. Test API endpoints from your Vercel frontend
2. Check browser console for CORS errors
3. Verify the `VITE_API_URL` environment variable is set correctly
4. Monitor Render and Vercel logs for any issues

## Environment Variables Summary:

### Backend (.env on Render):
```
PORT=8000
MONGO_URI=mongodb+srv://...
JWT_SECRET=your_secret
GROQ_API_KEY=your_key
CORS_ORIGIN=https://yourfrontend.vercel.app
NODE_ENV=production
```

### Frontend (.env on Vercel):
```
VITE_API_URL=https://yourbackend.onrender.com
```
