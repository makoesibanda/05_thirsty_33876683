# The Thirsty Student Shop

This small web app was made for the Dynamic Web Applications module at Goldsmiths.  
It’s basically a drinks shop website built using Node.js, Express and EJS.  
The idea is to show how we can make pages dynamic, handle forms and routes, and keep everything simple.

---

## What it does
- Shows the shop name and a list of drinks categories.
- Has an About page that lists shop branches and managers.
- Users can search for items using a form.
- There’s a register page where people can enter their details.
- A survey page collects some info and shows the results after submitting.
- The whole thing is styled with one CSS file using a dark theme.

---

## How to run it
1. Make sure Node.js is installed.  
2. Open the project folder in VS Code or terminal.  
3. Type this to install what’s needed:
   ```
   npm install express ejs
   ```
4. Then start it:
   ```
   node index.js
   ```
5. Open your browser and go to:  
   `http://localhost:8000`

---

## Routes / Pages
- `/` → Home page  
- `/about` → About page  
- `/search` → Search form  
- `/search_result` → Shows search result  
- `/register` → Register form  
- `/registered` → Confirmation message  
- `/survey` → Survey form  
- `/survey-submitted` → Shows survey responses  

---

## Notes
All pages use EJS templates and the same data object for the shop name, products and locations.  
Forms are handled using POST and GET.  
The CSS file is in the public folder and is linked to all pages.  

---

## What I learned
This project helped me understand how Express routes work, how to pass data to templates, and how to use forms properly.  
I also got better at keeping my code tidy and linking everything together.

---

**Name:** Simon M. Sibanda- 33876683 
**Module:** Dynamic Web Applications  
**Year:** 2025
