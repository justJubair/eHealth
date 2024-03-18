# Medical Patient Management System

This is a comprehensive Medical Patient Management System built using Next.js, Tailwind CSS, DaisyUI, Firebase Authentication, Express.js, Node.js, and MongoDB. The system is designed to allow doctors and nurses to manage patient records securely.

## Features

- **User Authentication**: Utilizes Firebase Authentication for secure user login and authentication.
- **User Roles**: Supports two user roles - Doctor and Nurse, each with specific permissions.
- **Patient Management**: Allows doctors to add, update, and delete patient records.
- **Prescription Management**: Enables doctors to attach prescriptions (as PDF files) to specific patients.
- **File Upload**: Uses multer npm package for handling file uploads (prescriptions).
- **Backend API**: Express.js powered backend with MongoDB as the database for storing patient and prescription data.
- **Responsive UI**: Built using Tailwind CSS and DaisyUI to ensure a responsive and visually appealing user interface.

## Prerequisites

Before getting started, ensure you have the following installed:

- Node.js (https://nodejs.org)
- MongoDB (https://www.mongodb.com)
- Firebase Account (for authentication) (https://firebase.google.com)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/justJubair/eHealth.git
```

2. Navigate to the project directory:

```bash
cd eHealth
```

3. Install dependencies:

```bash
npm install
```

4. Set up Firebase Authentication:
   
   - Create a Firebase project on the Firebase console.
   - Enable Firebase Authentication and choose the authentication methods (e.g., Email/Password).
   - Obtain your Firebase configuration credentials.
   - Create a `.env.local` file in the root directory and add your Firebase configuration:

   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
   NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
   ```

5. Set up MongoDB:

   - Install MongoDB and ensure it's running.
   - Create a `.env` file in the root director of server and add your mongoDB connection string

   ```env
  dbURL = "mongodb+srv://YourDB:Password@cluster0.hf0b3tt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
   ```



6. Start the development server:

```bash
npm run dev
```

7. Visit `http://localhost:3000` in your browser to access the application.

## Usage

- **Doctor Role**: Log in with a doctor account to add, update, or delete patient records. Additionally, doctors can upload prescriptions for patients.
- **Nurse Role**: Log in with a nurse account to update patient records.
- **Patient Management**: Add new patients, update patient details, and delete patients as necessary.
- **Prescription Management**: Attach prescriptions (PDF files) to specific patients for record-keeping.


## Contributing

Contributions are welcome! Feel free to open issues or pull requests for any improvements or fixes.


## Acknowledgments

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [DaisyUI](https://daisyui.com)
- [Firebase](https://firebase.google.com)
- [Express.js](https://expressjs.com)
- [MongoDB](https://www.mongodb.com)
- [Multer](https://www.npmjs.com/package/multer)

## Author

Your Name - [Jubair Ahmed](https://github.com/justJubair)

## Contact

For any inquiries or support, please contact [jubair.ahmed2838@gmail.com](mailto:jubair.ahmed2838@gmail.com).

---

