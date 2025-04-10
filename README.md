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

## Technologies Used

- **Frontend**: React, Vite, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **API Testing**: Postman
- **Other Tools**: Git, GitHub


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

I created a folder in the C: drive ``\data\db``  (Not recommended) which helped me solve the issue.it worked somehow.

#### Ensure your services are running

- Check MongoDB service (start) it if not running
```
MongoDB : 27017 (portnumber)
```
## 📸 Screenshots

### Homepage
![Homepage](./screenshot/home.png)  
*Landing page*

### Student Dashboard
![Student Details](./screenshot/stud_detail.png)  
*Student data management interface*

### Registration Page
![Registration](./screenshot/register.png)  
*User sign-up form with validation*


### Edit Page
![Edit](./screenshot/update.png)  
*Update Page*

### About Us
![About Us](./screenshot/aboutus.png)  
*Project and team information section*

### Contact Page
![Contact Us](./screenshot/contactus.png)  
*Contact form*

