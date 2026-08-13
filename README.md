# Registration Form Validation

A responsive and user-friendly **Registration Form Validation** project developed using **HTML, CSS, and JavaScript**. The project performs client-side validation for user registration details such as full name, email address, mobile number, password, and password confirmation.

This project was developed as part of a **Full Stack Development Lab – Experiment 3 (Advanced Level)**.

## 📌 Project Overview

The Registration Form Validation system allows users to enter their registration details and validates the information before accepting the form.

The application provides:

* Real-time form validation
* Email format validation
* 10-digit mobile number validation
* Password strength validation
* Password confirmation validation
* Error messages for invalid inputs
* Visual indication for valid and invalid fields
* Success message after successful validation
* Responsive design for different screen sizes

The project is completely **client-side** and does not require a database or backend server.

## ✨ Features

### 1. Full Name Validation

The form checks whether:

* The Full Name field is not empty.
* The name contains at least 3 characters.
* An appropriate error message is displayed when the input is invalid.

### 2. Email Validation

The email address is validated using a regular expression.

The validation checks whether:

* The email field is not empty.
* The entered value follows a valid email format.
* Invalid email addresses display an error message.

Example:

```text
example@gmail.com
```

### 3. Mobile Number Validation

The mobile number validation checks that:

* The field is not empty.
* The number contains exactly 10 digits.
* Only numeric characters are accepted.

Example:

```text
9876543210
```

### 4. Password Validation

The password validation is designed to require:

* At least 8 characters
* At least one letter
* At least one number

Example of a valid password:

```text
Password123
```

### 5. Confirm Password Validation

The confirmation password must:

* Not be empty.
* Match the original password exactly.

If the passwords do not match, an appropriate error message is displayed.

### 6. Live Validation

Validation is performed while the user types.

The form dynamically updates the input field:

* **Valid input** → Green indication
* **Invalid input** → Red indication

This provides immediate feedback to the user.

### 7. Success Message

When all fields pass validation, the application displays:

> Registration Successful!

The form is then reset for another registration attempt.

## 🛠️ Technologies Used

| Technology      | Purpose                            |
| --------------- | ---------------------------------- |
| HTML5           | Structure of the registration form |
| CSS3            | Styling and responsive design      |
| JavaScript      | Form validation and interaction    |
| Bootstrap 5.3.3 | Responsive layout                  |
| Bootstrap Icons | User interface icons               |
| Google Fonts    | Typography                         |

## 📂 Project Structure

```text
Registration_Form_Validation/
│
├── index.html
├── script.js
├── style.css
└── README.md
```

### `index.html`

Contains the structure of the registration form, including:

* Full Name
* Email Address
* Mobile Number
* Password
* Confirm Password
* Register button
* Error message containers
* Success message

### `style.css`

Contains the visual styling of the application, including:

* Page layout
* Form styling
* Input fields
* Error states
* Success states
* Button styling
* Responsive design
* Mobile screen adjustments

### `script.js`

Contains the client-side validation logic.

It handles:

* Full name validation
* Email validation
* Mobile number validation
* Password validation
* Confirm password validation
* Real-time validation
* Form submission
* Success message display

## 🔍 Validation Logic

The project uses JavaScript regular expressions for validating user input.

### Email Regex

```javascript
/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
```

This checks whether the entered email follows a standard email structure.

### Mobile Regex

```javascript
/^[0-9]{10}$/
```

This ensures that the mobile number contains exactly 10 digits.

### Password Pattern

The intended password validation pattern is:

```javascript
/^(?=.*[A-Za-z])(?=.*\d).{8,}$/
```

This requires:

* Minimum 8 characters
* At least one alphabetic character
* At least one number

## 🚀 How to Run the Project

### Method 1: Open Directly

1. Download or clone the repository.
2. Open the project folder.
3. Double-click `index.html`.
4. The registration form will open in your web browser.

### Method 2: Using VS Code

1. Clone the repository:

```bash
git clone https://github.com/Abishai-Jaron/Registration_Form_Validation.git
```

2. Open the project in Visual Studio Code.

3. Install the **Live Server** extension if it is not already installed.

4. Right-click `index.html`.

5. Select:

```text
Open with Live Server
```

6. The application will open in your browser.

## 🧪 Testing the Form

You can test the following cases:

| Input                                   | Expected Result         |
| --------------------------------------- | ----------------------- |
| Empty name                              | Error message           |
| Name below 3 characters                 | Error message           |
| Invalid email                           | Error message           |
| Empty mobile number                     | Error message           |
| Mobile number with fewer than 10 digits | Error message           |
| Mobile number with more than 10 digits  | Error message           |
| Password below 8 characters             | Error message           |
| Password without a number               | Error message           |
| Empty confirm password                  | Error message           |
| Different passwords                     | Error message           |
| All valid inputs                        | Registration successful |

## 🎨 User Interface

The application uses a clean and professional interface with:

* Light background
* Centered registration panel
* Responsive Bootstrap grid
* Clear input labels
* Error indicators
* Success indicators
* Responsive mobile layout
* Hover effects on the Register button

The project also uses **Merriweather** and **Source Sans 3** fonts to improve readability and visual appearance.

## 📱 Responsive Design

The form is designed to work across:

* 💻 Desktop
* 🖥️ Laptop
* 📱 Mobile
* 📲 Tablet

A CSS media query is included to adjust the layout for smaller screens.

## 🔐 Security Note

This project performs **client-side validation only**.

It does not include:

* Backend authentication
* Database storage
* Password hashing
* Server-side validation
* User account creation

Therefore, this project is intended primarily for **learning and demonstrating frontend form validation**.

For a production registration system, server-side validation and secure authentication should also be implemented.

## 📚 Learning Objectives

This project demonstrates the following concepts:

1. HTML form creation
2. CSS styling
3. Bootstrap responsive layouts
4. JavaScript DOM manipulation
5. Event listeners
6. Regular expressions
7. Form validation
8. Real-time input validation
9. Error handling
10. Client-side user interaction
11. Responsive web design

## 🔮 Future Improvements

The project can be extended with:

* Backend integration using Node.js, Flask, or PHP
* Database integration
* User authentication
* Password hashing
* Email verification
* Login functionality
* CAPTCHA verification
* Stronger password requirements
* Server-side validation
* Registration data storage
* Show/Hide password functionality
* Form submission through an API

## ⚠️ Important Note

The current JavaScript contains a password-validation variable naming mismatch: the password pattern is declared as `passwordPattern`, while the password-checking function references `PASSWORD_REGEX`. This should be made consistent before deploying the project.

For example:

```javascript
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
```

or change the validation function to use the existing `passwordPattern` variable.

## 👨‍💻 Author

**Abishai Jaron**

Registration Form Validation
Full Stack Development 
Email: abishaijaron@gmail.com

## 📄 License

This project is intended for educational and learning purposes.
