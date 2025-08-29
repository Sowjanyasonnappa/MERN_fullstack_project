Project Description

This project is a frontend React application that implements user authentication (Register & Login) with form handling, API integration, and clean UI styling.

🔹 Features

Navigation Bar

A simple navbar with links to Register and Login pages.

Styled using CSS with hover effects.

Register Page (Register.js)

Contains a form with Email and Password input fields.

On form submission, it sends a POST request to the backend API (/auth/register) using Axios.

Displays success or error messages dynamically.

Login Page (Login.js)

Contains a form with Email and Password input fields.

On submission, sends a POST request to backend API (/auth/login).

If login is successful, the JWT token received from backend is stored in localStorage.

Displays Login success/error message to the user.

Frontend Styling

CSS files (App.css, Login.css, Register.css) are used to style each page.

Forms are centered on the page with a card-style layout (white background, rounded corners, shadow).

Buttons are styled with colors (blue for login, green for register) and hover effects.

Folder Structure

src/
├── App.js        # Handles navigation & routes
├── Login.js      # Login form component
├── Register.js   # Register form component
├── App.css       # Navbar styling
├── Login.css     # Login form styling
├── Register.css  # Register form styling
└── index.js      # React entry point

Flow of Application

User opens app → sees Navbar.

User clicks Register → fills out email & password → sends data to backend → gets message (“Registered successfully” / error).

User clicks Login → enters credentials → if valid, gets token stored in localStorage.

Login message shown → later this token can be used to access protected routes like Dashboard.
### 1. **Backend (Express + MongoDB + JWT)**

* You created an **authentication backend** using **Express**.
* It has two routes:

  * `POST /auth/register` → saves a new user into MongoDB.
  * `POST /auth/login` → checks if the user exists, verifies password, and returns a **JWT token** if valid.
* This token is later used for securing API requests (authorization).


### 2. **Frontend (React + Axios)**

* You built two components:

  * **Register.js** → lets a user register by entering email and password. On submit, it sends a request to the backend and shows a success or error message.
  * **Login.js** → lets a user log in. On submit, it calls the backend, gets a token, stores it in `localStorage`, and displays a message.



### 3. **App.js (Routing with React Router)**

* You used **react-router-dom** to handle navigation between pages.
* Two routes are defined:

  * `/register` → shows the Register form.
  * `/login` → shows the Login form.
* The `<Link>` components allow navigation between **Login** and **Register** without refreshing the page.



### 4. **CSS Styling**

* You added a **navigation bar** at the top.
* Used `flexbox` to center the links and add spacing between "Register" and "Login".
* Gave hover effects and colors to make links look interactive.
* Added styling for login/register forms (input fields, buttons, containers) so they look clean and centered on the page.



###  **Overall Workflow**

1. User opens the app → sees a navbar with **Register** and **Login**.
2. If the user registers, details are saved in MongoDB.
3. If the user logs in, the backend verifies credentials and sends back a **JWT token**.
4. The frontend stores the token (in `localStorage`) for later use in protected routes (like dashboard).



 Basically, what you’ve built is the **foundation of a full-stack authentication system** with:

* **Backend**: Express + MongoDB + JWT
* **Frontend**: React + Axios + React Router
* **UI Styling**: CSS for navigation and forms

