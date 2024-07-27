# To-Do List API

## Overview

This project is a RESTful API for managing a To-Do list, built using Express.js and TypeScript.

## Features

- Create new todo items
- Retrieve all todo items
- Retrieve a specific todo item by ID
- Update existing todo items
- Delete todo items

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or later)
- npm (v6 or later)

## Installation

Follow these steps to get your development environment set up:

1. Clone the repository:
2. Install dependencies: yarn install
3. Start the development server: yarn dev

The server will start running on `http://localhost:3000`.

## Project Structure

todo-list-api/
├── src/
│   ├── controllers/
│   │   └── todoController.ts
│   ├── models/
│   │   └── todo.ts
│   ├── routes/
│   │   └── todoRoutes.ts
│   ├── services/
│   │   └── todoService.ts
│   └── app.ts
├── postman/
│   └── Todo_List_API.postman_collection.json
├── package.json
├── tsconfig.json
└── README.md



## API Endpoints

| Method | Endpoint       | Description                  |
| ------ | -------------- | ---------------------------- |
| GET    | /api/todos     | Get all todo items           |
| GET    | /api/todos/:id | Get a specific todo item     |
| POST   | /api/todos     | Create a new todo item       |
| PUT    | /api/todos/:id | Update an existing todo item |
| DELETE | /api/todos/:id | Delete a todo item           |

## Detailed API Usage

### Create a new todo item

**ExampleRequest:**

```http
POST /api/todos
Content-Type: application/json

{
  "title": "Test Todo"
}
```
