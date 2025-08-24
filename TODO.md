# Social Media Links Setup

## Completed:
- ✅ Updated `src/constants/index.js` to include link properties for social media icons
- ✅ Updated `src/sections/Footer.jsx` to make social media icons clickable with links
- ✅ Updated social media URLs with actual profile links in `src/constants/index.js`
- ✅ Removed placeholder comments from social media links
- ✅ Fixed LinkedIn URL protocol (added https://)

## To Do:
1. **Test the functionality** by running the development server:
   ```bash
   npm run dev
   ```

## Instructions:
1. The social media links are now properly configured with your actual profiles
2. All placeholder comments have been removed
3. LinkedIn URL has been fixed with proper https:// protocol

## Your updated social media links:
```javascript
{
  name: "insta",
  imgPath: "/images/insta.png",
  link: "https://instagram.com/karimi_waithaka1",
},
{
  name: "fb", 
  imgPath: "/images/fb.png",
  link: "https://www.facebook.com/profile.php?id=100070052710135",
},
{
  name: "x",
  imgPath: "/images/x.png",
  link: "https://x.com/karim_waithaka",
},
{
  name: "linkedin",
  imgPath: "/images/linkedin.png",
  link: "https://www.linkedin.com/in/karimi-waithaka-1b9b25252",
},
