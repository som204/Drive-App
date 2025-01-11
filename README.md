
# UrDrive Application

## Overview

UrDrive is a secure and intuitive file storage and sharing platform. It enables users to upload, store, and collaborate on files with team members in real-time while ensuring privacy through end-to-end encryption. The platform also includes additional features like user authentication, file management, and seamless navigation between key sections like Home,Login,Register About Us, Contact Us, and more.

## Features

- **Secure Authentication**: Login and registration system using cookies and JWT for token-based authentication.
- **File Management**: Upload, view, and manage files.
- **Real-Time Collaboration**: Share files and collaborate with team members.
- **User Profile Management**: View user details and perform logout from the profile section.
- **Responsive Design**: Fully responsive UI using TailwindCSS and Material-UI.
- **Accessible Public Pages**: Home, About Us, and Contact Us pages are accessible without authentication.
- **Protected Routes**: Files section is restricted to authenticated users only.
- **Cloud Storage**: Files are securely uploaded and stored using AWS S3.
- **Database**: MongoDB for storing user data, file metadata, and other application-related information.

## Technologies Used

- **Frontend**: React, TailwindCSS, Material-UI, React Icons
- **Backend**: Node.js, Express
- **Authentication**: JWT, react-cookie
- **Routing**: React Router
- **Cloud Storage**: AWS S3
- **Database**: MongoDB (with Mongoose for schema modeling)

## Installation

### Prerequisites

- Node.js installed on your system.
- MongoDB instance running locally or on a cloud platform like MongoDB Atlas.

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/som204/Drive-App.git
   ```
2. Navigate to the backend directory:
   ```bash
   cd DriveBackend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Configure environment variables:
   ```bash
     MONGO_URI=mongodb://<username>:<password>@<cluster-address>/<database-name>
    JWT_SECRET=your_jwt_secret
    AWS_ACCESS_KEY_ID=your_aws_access_key
    AWS_SECRET_ACCESS_KEY=your_aws_secret_key
    S3_BUCKET_NAME=your_bucket_name
    S3_REGION=your_bucket_region

   ```
5. Start the backend server:
   ```bash
   node app.js
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd DriveFrontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend server:
   ```bash
   npm run dev
   ```

## Usage

- Visit `http://localhost:5173` to view the application.
- Use the **Login** or **Register** button in the navigation bar to authenticate.
- Navigate through the Home, About Us, Contact Us, and Files sections.
- Only authenticated users can access the **Files** section.

## Screenshots

### Homepage
![image (2)](https://github.com/user-attachments/assets/6ab7326f-c9a7-4a0d-a3a4-da40f4400309)

### Files
![file](https://github.com/user-attachments/assets/ca06c960-2c4e-44f3-9c2d-a8041cb0e83e)

### Login
![Login](https://github.com/user-attachments/assets/a5e6170c-8116-4d58-af27-a84b40486a9a)

### Register
![Signup](https://github.com/user-attachments/assets/eb6307cc-ad68-406b-bf7e-33de35e33a61)


### Contact
![contact](https://github.com/user-attachments/assets/37babc62-8cda-40c7-ab04-60dedb54d356)

### About
![About](https://github.com/user-attachments/assets/c402907b-1453-42e8-a6e8-84db6c416956)




## Contributing

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add a new feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Create a Pull Request.


## Contact

For any inquiries or suggestions, feel free to reach out:

- **Email**: [somprasad240@gmail.com](mailto:user@example.com)
- **GitHub**: [som204](https://github.com/your-username)

---

Thank you for checking out the UrDrive application!
