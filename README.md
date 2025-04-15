# 🍲 SwaadSutra Website
A simple, dynamic recipe book web application built with **Node.js**, **Express**, **PostgreSQL**, and **EJS**. Users can add their recipes (with image), view them, and delete any recipe when needed.
--
## 🌟 Features
- 📥 Add new recipes with ingredients, steps, and image
- 📃 View all recipes on the homepage
- 📖 Click on a recipe to view full steps and ingredients
- 🗑️ Delete recipes
- 🖼️ Image upload and display
- 📦 Data stored in PostgreSQL
- 🛠️ Simple and clean EJS UI
---
## 🧰 Technologies Used
- Node.js
- Express.js
- EJS (Embedded JavaScript Templates)
- PostgreSQL
- Multer (for image uploads)
- dotenv
- Body-Parser
---
## 🛠️ Setup Instructions

1. Clone the Repository
git clone https://github.com/yourusername/recipe-book-app.git
cd recipe-book-app

2. Install Dependencies
npm install

3. Setup .env File
Create a .env file in the root directory and add your PostgreSQL configuration:
PG_USER=your_pg_username
PG_HOST=localhost
PG_DATABASE=your_database_name
PG_PASSWORD=your_password
PG_PORT=5432

4.  Create Database Table
Make sure your PostgreSQL database has a table named recipes with the following schema:
CREATE TABLE recipes (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    ingredients TEXT NOT NULL,
    steps TEXT NOT NULL,
    image_url TEXT
);

5. Run the Server
nodemon server.js

Visit http://localhost:3000 in your browser.

🖼️ Folder Structure

recipe-book-app/
├── public/
│   └── uploads/        # Uploaded images stored here
├── views/
│   ├── index.ejs       # Homepage showing all recipes
│   ├── addRecipeForm.ejs  # Form to add a recipe
│   └── recipeFile.ejs  # Detailed view of a single recipe
├── .env
├── server.js
├── package.json
