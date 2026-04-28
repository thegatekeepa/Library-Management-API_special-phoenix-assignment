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

1. Clone the repository:

```bash
git clone https://github.com/your-username/product-api.git
```

2. Navigate into the project folder:

```bash
cd product-api
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file and add your environment variables:

```
PORT=5000
DATABASE_URL=your_database_connection_string
```

5. Start the server:

```bash
npm run dev
```

---

## 📡 API Endpoints

| Method | Endpoint          | Description          |
| ------ | ----------------- | -------------------- |
| GET    | /api/products     | Get all products     |
| GET    | /api/products/:id | Get a single product |
| POST   | /api/products     | Create a new product |
| PUT    | /api/products/:id | Update a product     |
| DELETE | /api/products/:id | Delete a product     |

---

## 🧪 Testing

You can test the API using:

* Postman
* Thunder Client (VS Code extension)
* curl

---

## Error Handling

This API returns standard HTTP status codes:

* `200` – Success
* `201` – Resource created
* `400` – Bad request
* `404` – Not found
* `500` – Server error

---

## 🔐 Environment Variables

Make sure to configure the following in your `.env` file:

* `PORT`
* `DATABASE_URL`

---

## License

This project is licensed under the MIT License.

---

## Author

David Caleb
GitHub: https://github.com/thegatekeepa

---
---
---

# Project Name

## Description
What the API does

## Installation
How to run it

## Endpoints
Basic list of routes

## Tech Stack
What you used

## License