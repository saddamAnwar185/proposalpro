# 🚀 ProposalPro AI - Complete Setup Guide

**For Non-Technical Users**

This guide will walk you through every step to get your AI proposal generator live on the internet. No coding experience needed!

---

## 📋 What You'll Need

Before starting, you'll need:
1. **A GitHub account** (free) - to store your code
2. **A Vercel account** (free) - to host your app
3. **An OpenAI account** - for the AI (comes with $5 free credit)

**Estimated time:** 20-30 minutes

---

## Step 1: Get Your Gemini API Key (FREE!)

Google Gemini offers a generous **free tier** - perfect for your app!

### 1.1 Get Your API Key
1. Go to [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Select "Create API key in new project" (or choose an existing project)
5. **Copy the API key** and save it somewhere safe (like a note on your phone)

### 1.2 Free Tier Limits
- **15 requests per minute** (plenty for most users)
- **1,500 requests per day** (free!)
- For higher limits, you can add billing later

---

## Step 2: Create a GitHub Account

GitHub stores your code so Vercel can deploy it.

### 2.1 Sign Up
1. Go to [github.com](https://github.com)
2. Click "Sign Up"
3. Enter your email, create a password, and choose a username
4. Verify your email

### 2.2 Create a New Repository
1. Click the "+" icon in the top right
2. Click "New repository"
3. Name it `proposalpro-ai`
4. Keep it **Public**
5. Click "Create repository"

---

## Step 3: Upload Your Code to GitHub (Easy Drag & Drop!)

**No Git or software installation needed!**

1. Go to your new repository page on GitHub
2. Click **"Add file"** button (near the top right)
3. Click **"Upload files"**
4. Open Finder and go to your project folder:
   - Press **⌘ + Shift + G**
   - Paste: `~/.gemini/antigravity/scratch/proposalpro-ai`
   - Press Enter
5. **Select ALL files** in the folder (⌘ + A)
6. **Drag them** onto the GitHub upload page
7. Wait for files to upload (you'll see a checkmark next to each)
8. Scroll down and click the green **"Commit changes"** button
9. Done! ✅

---

## Step 4: Deploy to Vercel

Vercel will host your app for free and give you a public URL.

### 4.1 Create a Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub

### 4.2 Import Your Project
1. Click "Add New..." → "Project"
2. Find `proposalpro-ai` in the list
3. Click "Import"

### 4.3 Configure Environment Variables

This is where you add your secret keys:

1. In the project settings, scroll down to "Environment Variables"
2. Add these variables one by one:

| Name | Value |
|------|-------|
| `GEMINI_API_KEY` | Your Gemini API key |
| `NEXTAUTH_SECRET` | Go to [generate-secret.vercel.app/32](https://generate-secret.vercel.app/32) and copy the random string |
| `NEXTAUTH_URL` | Leave blank (Vercel sets this automatically) |

3. Click "Add" after each one

### 4.4 Deploy!
1. Click "Deploy"
2. Wait 2-3 minutes for it to build
3. 🎉 Your app is live! Click the URL to see it

---

## Step 5: Test Your App

1. Visit your new app URL (something like `proposalpro-ai.vercel.app`)
2. Click "Get Started Free"
3. Try generating a proposal:
   - Paste a sample freelancer profile
   - Paste a sample job description
   - Select length and tone
   - Click "Generate Proposal"
4. Your AI-generated proposal should appear!
5. Click "Copy to Clipboard" to copy it

---

## 🎨 Customizing Your App

### Change the App Name
To change "ProposalPro AI" to your own brand:

1. Go to your GitHub repository
2. Find and edit `app/page.js` and `app/layout.js`
3. Find all instances of "ProposalPro AI" and replace with your brand name
4. Commit the changes
5. Vercel will automatically redeploy

### Change Colors
The app uses a purple/indigo color scheme. To change it:

1. Edit `tailwind.config.js`
2. Change the `primary` colors to your preferred palette
3. Look for color references like `purple-600`, `indigo-600` in the page files
4. Commit and Vercel will redeploy

---

## 💰 Cost Breakdown

| Service | Cost |
|---------|------|
| Vercel Hosting | **FREE** (up to 100GB bandwidth) |
| GitHub | **FREE** |
| Google Gemini API | **FREE** (1,500 requests/day) |

**You can run ~1,500 proposals per day completely free!**

---

## 🛠️ Troubleshooting

### "Gemini API key not configured"
- Make sure you added the `GEMINI_API_KEY` in Vercel environment variables
- Go to Vercel → Your Project → Settings → Environment Variables
- Add it and click "Redeploy"

### "Invalid API key"
- Check that your Gemini API key is correct
- Make sure there are no extra spaces before or after the key
- Try creating a new key at [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)

### "Rate limit exceeded"
- Free tier allows 15 requests/minute
- Wait a moment and try again
- For higher limits, add billing to your Google Cloud project

### App not updating after changes
- Vercel should auto-deploy on GitHub changes
- If not, go to Vercel → Deployments → click "Redeploy"

---

## 📞 Need Help?

If you get stuck:
1. Check the Troubleshooting section above
2. Look at the Vercel build logs for error messages
3. Make sure all environment variables are set correctly

---

## 🎉 Congratulations!

You now have a fully working AI proposal generator!

**Your app can:**
- Generate professional proposals in seconds
- Work on any device (mobile-friendly)
- Handle unlimited users
- Scale automatically with Vercel

**Next steps you might consider:**
- Share the URL with your freelancer network
- Add a custom domain (Vercel makes this easy)
- Collect feedback from users
