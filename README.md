# **Canteen Food Ordering Website**

This repository contains the code for a **Canteen Food Ordering Website**. It features a **User Portal** for ordering food and an **Admin Portal** for managing food items and orders.

---

## **Live Site**

- **[User Side](https://food-app-frontend-vjgo.onrender.com/)**  
- **[Admin Side](https://food-app-admin-nwig.onrender.com/)**  

---

## **Features**

### **User Portal**
- Browse the food menu.
- Add items to the cart and place orders.
- Track order status.

### **Admin Portal**
- Add, update, and manage food items.
- Mark food items as out of stock.
- View and update user orders (e.g., food processing, delivered).

### **Tech Stack**
- **Frontend**: ReactJS
- **Backend**: Node.js and Express.js
- **Database**: MongoDB Atlas
- **Authentication**: JWT
- **Payment Gateway**: Stripe

---

## **Getting Started**

Follow these steps to set up and run the project locally.

---

### **Prerequisites**
Ensure the following are installed on your system:
- **[Node.js](https://nodejs.org/)** and **npm**
- **MongoDB Atlas** account (to manage the database)

---

### **Installation**

1. **Clone the Repository**:  
   Clone this repository to your local system:  
   ```bash
   git clone <repository-url>
Replace <repository-url> with your repository link.

Install Dependencies:
Navigate to the project folders and install dependencies.

Frontend:
bash
Copy
Edit
cd frontend
npm install
npm install react-router-dom
Backend:
bash
Copy
Edit
cd backend
npm init
Install the required backend dependencies:

bash
Copy
Edit
npm install express mongoose jsonwebtoken bcrypt cors dotenv body-parser multer stripe validator nodemon
Set Up Environment Variables:
In the backend directory, create a .env file and include the following environment variables:

env
Copy
Edit
JWT_SECRET="YOUR SECRET KEY"
STRIPE_SECRET_KEY="YOUR STRIPE KEY"
Update the MongoDB connection string in:
backend/config/db.js
Example:

javascript
Copy
Edit
mongodb+srv://<YOUR USERNAME>:<PASSWORD>@cluster2.kf0es.mongodb.net/<PROJECT-NAME>
Running the Application
Start the Admin Panel:
Navigate to the admin folder and run:

bash
Copy
Edit
npm run dev
Start the Backend:
Navigate to the backend folder and run:

bash
Copy
Edit
npm run server
Start the Frontend:
Navigate to the frontend folder and run:

bash
Copy
Edit
npm run dev
Access the Application:
Open your browser and navigate to:

arduino
Copy
Edit
http://localhost:4000
Project Structure
plaintext
Copy
Edit
project-root/
│
├── frontend/              # Frontend code (ReactJS)
├── backend/               # Backend code (Node.js + Express)
├── admin/                 # Admin Panel
├── .env                   # Backend environment variables
├── package.json           # Dependency management
├── config/db.js           # Database configuration
└── README.md              # Project documentation
Live Demo
You can view the live version of this project here:

User Side
Admin Side
License
This project is licensed under the MIT License.
Feel free to fork, modify, and use this project as per your requirements!

Acknowledgments
Special thanks to all the open-source libraries, frameworks, and tools that made this project possible.

markdown
Copy
Edit

### **Key Changes Made**:
1. Added bold text (`**`) for headings, subheadings, and important details.
2. Properly aligned and organized sections with clear spacing.
3. Used code blocks (`bash`, `env`, `javascript`) where appropriate for better readability.
4. Included relevant links (e.g., live site links) prominently.
5. Structured the **Project Structure** and installation steps neatly.

Let me know if you need further tweaks or adjustments!
