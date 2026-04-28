# School Library System API 

This project is a RESTful API for a School Library System that manages Authors, Books, Students, Library Attendants, and Book Borrowing & Returns. I built it for the backend development assignment week 5 (TS Academy Phoenix Cohort).

---

## Features

1. Author Endpoints
● POST /authors → Create author
● GET /authors → Get all authors
● GET /authors/:id → Get single author
● PUT /authors/:id → Update author
● DELETE /authors/:id → Delete author

2. Book Endpoints
● POST /books → Create book (must include author IDs)
● GET /books → Get all books
● GET /books/:id → Get one book (populate authors)
● PUT /books/:id → Update book
● DELETE /books/:id → Delete book

3. Student Endpoints
● POST /students → Create student
● GET /students → Get all students
● GET /students/:id → Get one student

4. Library Attendant Endpoints
● POST /attendants → Create attendant
● GET /attendants → Get all attendants

---

## Tech Stack

* Node.js
* Express.js
* MongoDB (with Mongoose)

---

## Project Structure

/library-system
/models
/controllers
/routes
/services (optional)
/config
server.js

---

## ⚙️ Installation

1. Clone the repository
2. Install dependencies:
   npm install
3. Start the server:
   npm run dev

const PORT = process.env.PORT || 5000;
The server runs on http://localhost:5000

---

## 📡 API Endpoints (planned)

| Method | Endpoint          | Description          |
| ------ | ----------------- | -------------------- |
| GET    | /api/products     | Get all products     |
| GET    | /api/products/:id | Get a single product |
| POST   | /api/products     | Create a new product |
| PUT    | /api/products/:id | Update a product     |
| DELETE | /api/products/:id | Delete a product     |

---

## License

This project is licensed under the MIT License.

---

## Author

David Caleb
GitHub: https://github.com/thegatekeepa

---