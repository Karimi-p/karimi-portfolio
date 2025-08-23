# Social Media Links Setup

## Completed:
- ✅ Updated `src/constants/index.js` to include link properties for social media icons
- ✅ Updated `src/sections/Footer.jsx` to make social media icons clickable with links

## To Do:
1. **Update Social Media URLs** in `src/constants/index.js`:
   - Replace `https://instagram.com/yourusername` with your actual Instagram URL
   - Replace `https://facebook.com/yourusername` with your actual Facebook URL  
   - Replace `https://x.com/yourusername` with your actual X/Twitter URL
   - Replace `https://linkedin.com/in/yourusername` with your actual LinkedIn URL

2. **Test the functionality** by running the development server:
   ```bash
   npm run dev
   ```

## Instructions:
1. Open `src/constants/index.js`
2. Find the `socialImgs` array (around line 278)
3. Replace the placeholder URLs with your actual social media profile links
4. Save the file
5. The footer social icons will now link to your actual social media pages

## Example of what your updated links should look like:
```javascript
{
  name: "insta",
  imgPath: "/images/insta.png",
  link: "https://instagram.com/your_actual_username", // Your real Instagram
},
{
  name: "fb", 
  imgPath: "/images/fb.png",
  link: "https://facebook.com/your_actual_username", // Your real Facebook
},
// ... etc
