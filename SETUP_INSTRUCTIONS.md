# Portfolio Setup Instructions

## 🔧 Making Buttons Work

### 1. Resume Download Buttons
To make the resume download buttons work:

1. **Add your resume PDF** to the `public` folder as `resume.pdf`
2. The buttons will automatically download the file when clicked
3. You can rename the file by changing the `download` attribute in the buttons

### 2. Contact Form
The contact form has several options:

#### Option A: Use Formspree (Recommended - Free)
1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form and get your form ID
3. Replace `YOUR_FORM_ID` in the contact form with your actual form ID
4. The form will automatically work and send emails to your inbox

#### Option B: Use Netlify Forms (If hosting on Netlify)
1. Add `netlify` attribute to the form tag
2. Add a hidden input: `<input type="hidden" name="form-name" value="contact" />`
3. Netlify will automatically handle form submissions

#### Option C: Use your own backend
1. Replace the fetch URL with your own API endpoint
2. Handle the form data on your server

### 3. Social Media Links
Update the social media links in `components/contact-section.tsx`:

\`\`\`tsx
const socialLinks = [
  { icon: Github, href: "https://github.com/YOUR_USERNAME", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/YOUR_USERNAME", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/YOUR_USERNAME", label: "Twitter" },
  { icon: Mail, href: "mailto:YOUR_EMAIL@example.com", label: "Email" },
]
\`\`\`

### 4. Project Links
Update the project URLs in `components/projects-section.tsx`:

\`\`\`tsx
const projects = [
  {
    // ... other properties
    liveUrl: "https://your-actual-project-url.com",
    githubUrl: "https://github.com/your-username/project-repo",
  },
  // ... more projects
]
\`\`\`

### 5. Blog/Writing Links
Update the blog post URLs in `components/writing-section.tsx`:

\`\`\`tsx
const blogPosts = [
  {
    // ... other properties
    url: "https://your-actual-blog-post-url.com",
  },
  // ... more posts
]
\`\`\`

## 🚀 Quick Setup Checklist

- [ ] Add `resume.pdf` to the `public` folder
- [ ] Set up Formspree account and update form ID
- [ ] Update social media links with your actual profiles
- [ ] Update project URLs with your actual projects
- [ ] Update blog post URLs with your actual articles
- [ ] Replace placeholder images with your actual photos
- [ ] Update personal information (name, email, bio, etc.)

## 📧 Contact Form Services

### Formspree (Free tier: 50 submissions/month)
- Easy setup, no backend required
- Spam protection included
- Email notifications

### Netlify Forms (Free tier: 100 submissions/month)
- Built into Netlify hosting
- No external service needed
- Automatic spam filtering

### EmailJS (Free tier: 200 emails/month)
- Send emails directly from frontend
- No backend required
- Multiple email service providers

Choose the option that best fits your needs!
\`\`\`

The main issues were:

1. **Resume buttons** - Now they actually download a PDF file
2. **Contact form** - Now has proper submission handling with loading states and feedback
3. **Social links** - Need to be updated with your actual profiles
4. **Project links** - Need to be updated with your actual project URLs

To make everything work:

1. **Add your resume PDF** to the `public` folder
2. **Set up a form service** like Formspree (it's free and easy)
3. **Update all the placeholder URLs** with your actual links

The buttons will now be fully functional! 🎉
