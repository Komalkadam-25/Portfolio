# 📧 EmailJS Setup - Quick Reference

## ✅ 5-Minute Setup Guide

### Step 1: Sign Up (1 min)
- Go to https://www.emailjs.com/
- Click "Sign Up"
- Create account with your email
- Verify email

### Step 2: Create Email Service (1 min)
1. Login to EmailJS dashboard
2. Left sidebar → **Email Services**
3. Click **Add Service**
4. Select your email provider (Gmail recommended)
5. Click **Connect Account**
6. Grant permissions
7. Service created! ✓
8. **Copy the Service ID**

### Step 3: Create Email Template (1 min)
1. Left sidebar → **Email Templates**
2. Click **Create New Template**
3. Name: `portfolio_contact`
4. Use this template content:

```
From: {{from_email}}
Sender: {{from_name}}
Subject: {{subject}}

Message:
{{message}}
```

5. Click **Save** ✓
6. **Copy the Template ID**

### Step 4: Get Public Key (1 min)
1. Top right → Your profile icon → **Account**
2. Click **API Keys**
3. **Copy the Public Key**

### Step 5: Update Your Portfolio (1 min)
Edit `.env` file in your project root:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

Replace the values with your actual credentials from steps 2-4.

## 🎯 Where to Find Credentials

| Credential | Location |
|-----------|----------|
| **Public Key** | Account → API Keys |
| **Service ID** | Email Services → (your service) → Service ID |
| **Template ID** | Email Templates → (your template) → Template ID |

## ✨ Test It!

1. Save the `.env` file
2. Run `npm run dev`
3. Fill out contact form
4. Submit message
5. Check your email! 📬

## 🐛 Troubleshooting

**Issue: "Failed to send message"**
- Check `.env` file has correct credentials
- Make sure no extra spaces in values
- Refresh browser after updating .env

**Issue: Email not received**
- Check Gmail spam folder
- Verify email service is connected in EmailJS
- Check template has the right variables: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`

**Issue: Template variables not working**
- Make sure variable names match exactly: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
- Use double curly braces: `{{}}`

## 📝 Template Variables

Your contact form sends these variables:
- `{{from_name}}` → Visitor's name
- `{{from_email}}` → Visitor's email
- `{{subject}}` → Message subject
- `{{message}}` → Message content
- `{{to_email}}` → Your email (kvkomalkadam@gmail.com)

## 🔒 Security Notes

1. **Never commit `.env` to git** - Add to `.gitignore` (already done ✓)
2. **Public Key is public** - It's meant to be exposed in browser
3. **Service/Template IDs should be protected** - Keep in `.env` only
4. **Each email costs nothing** - EmailJS free tier has monthly limits

## 📱 Free Tier Limits

- Up to 200 emails/month
- Perfect for personal portfolio
- Upgrade if needed

## 🚀 You're All Set!

Now visitors can message you directly from your portfolio! 🎉
