# Node.js API Projects

This repository contains various projects created to study API development using Node.js. Each project explores different tools and features of API development.

## Technologies Used
- Node.js
- Express.js
- MongoDB / SQLite (depending on the project)
- JWT for authentication
- Jest for testing

## Included Projects
1. **Contacts API**  
   - Uses MongoDB with Mongoose  
   - Manages contacts with CRUD operations
   - Handles errors with custom middleware  
   - Supports pagination and filtering 

2. **Courses API**
   - Uses SQLite with Sequelize ORM  
   - Manages courses with CRUD operations  
   - Structured using the MVC pattern  
   - Utilizes advanced Sequelize features such as:
      - Model scopes
      - Soft delete
      - Validations
      - Associations
      - Custom query methods

3. **Posts API**
   - Designed to practice MongoDB and Mongoose skills



## How to Run
1. Clone the repository:
   ```sh
   git clone https://github.com/JoMath363/node.js-api-projects.git
   ```
2. Navigate to the desired directory:
   ```sh
   cd project-name
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Depending on the project, configure the environment variables (.env) using the available template:
   - Rename .env.example to .env.
   - Open .env and update the required values:
   ```sh
   MONGO_URI=mongodb+srv://your_username:your_password@cluster.mongodb.net/database_name
   PORT=3000
   JWT_SECRET=your_secret_key
   ```
   - Save the file.
5. Start the server:
   ```sh
   npm start
   ```

---

**Author:** JoseMathias



