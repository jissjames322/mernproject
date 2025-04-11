# MERN Stack Learning Project

![MERN Logo](https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png)

A full-stack web application built as part of our college's extra learning course, implementing the MERN stack (MongoDB, Express.js, React, and Node.js).

## Features

- Student registeration system (registration)
- CRUD operations implementation
- RESTful API with Express.js
- React frontend with Vite
- MongoDB database integration
- Responsive design

## 🛠️ Technologies Used

### Frontend

<p align="left">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
</p>

### Backend

<p align="left">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
</p>

### Tools

<p align="left">
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
  <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white" alt="Postman" />
  <img src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white" alt="NPM" />
  <img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" alt="VS Code" />
</p>

Try for yourself :)

### Install dependencies:

```bash
npm install
```

### Start the development server:

```bash
npm run dev
```

- This will launch the website on http://localhost:5173

#### In a separate terminal,start the backend server :

```bash
node src/server/server.js
```

- It will connect to the database which is MongoDB.

#### If errors occurs in connecting to MongoDB

- Check your path for MongoDB
  (Mine didn't work for sometime until i figured some way to fix it)

- If you face a Connection refused error repair your path using this command :

```bash
mongod --repair --dbpath /path/to/your/db
```

This might fix the issue :)

I created a folder in the C: drive `\data\db` (Not recommended) which helped me solve the issue.it worked somehow.

#### Ensure your services are running

- Check MongoDB service (start) it if not running

```
MongoDB : 27017 (portnumber)
```

## 📸 Screenshots

### Homepage

![Homepage](./screenshot/home.png)  
_Landing page_

### Student Dashboard

![Student Details](./screenshot/stud_detail.png)  
_Student data management interface_

### Registration Page

![Registration](./screenshot/register.png)  
_User sign-up form with validation_

### Edit Page

![Edit](./screenshot/update.png)  
_Update Page_

### About Us

![About Us](./screenshot/aboutus.png)  
_Project and team information section_

### Contact Page

![Contact Us](./screenshot/contactus.png)  
_Contact form_

<div align=center>

[![](https://i.pinimg.com/736x/3f/ad/9e/3fad9e64e898db5b8c042b5e8344bf0e.jpg)](https://mernproject-frontend.netlify.app/)

