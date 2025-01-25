## Live Site
[User Side](https://food-app-frontend-vjgo.onrender.com/)


[Admin Side](https://food-app-admin-nwig.onrender.com/)



# Canteen Food Ordering Website

This repository contains the code for a **Canteen Food Ordering Website**. It features a user portal for ordering food and an admin portal for managing food items and orders.

## Features
- **User Portal**: Browse menu, add items to the cart, and place orders.
- **Admin Portal**: Manage food items, mark items as out of stock, and view user orders.
- **Backend**: Node.js and Express for API development.
- **Frontend**: ReactJS for a modern user interface.
- **Database**: MongoDB Atlas for storing user and admin data.

## Getting Started

### Prerequisites
- **Node.js** and **npm** installed on your system.
- MongoDB Atlas account (for setting up the database).

### Installation

1. **Clone the Repository**:
   Clone this repository to your local system:
   ```bash
   git clone <repository-url>
   
2. **Install Dependencies: Navigate to the project folders and install dependencies for the frontend and backend:**

**Frontend:**

👉 **cd frontend** 
👉 **npm install**
👉 **npm install react-router-dom**

**Backend:**

👉 **cd Backend**
👉 **npm init**

**Intall the dependencies for Backend:**

👉 **npm install express mongoose jswebToken bcrypt Cors dotenv body-parser multer stripe validator nodemon**

3. **Set Up Environment Variables:**
   In the server 👉 **(Backend)**👈 directory,
   create a 👉**.env**👈 file and include the following environment variables:
   
   👉 JWT_SECRET = "YOUR SECRET KEY"
   👉 STRIPE_SECRET_KEY= "YOUR KEY"
   
5. **Replace <your-mongodb-connection-string> with your MongoDB Atlas connection string.**
   Path -  backend➡️config➡️db.js➡️mongodb+srv://YOUR USERNAME:PASSWORD @cluster2.kf0es.mongodb.net/PROJECT-NAME

6. **Running the Application**

  Start the **Admin Panel**: Navigate to the admin folder and run:
  👉 **npm run dev**

  Start the **Backend**: Navigate to the Backend folder and run:
  👉 **npm run server**

  Start the **Frontend**: Navigate to the Frontend folder and run:
  👉 **npm run dev**

**License**
This project is licensed under the MIT License.
Feel free to fork, modify, and use this project as per your requirements!

**Acknowledgments**
Special thanks to all the open-source libraries and tools tha
