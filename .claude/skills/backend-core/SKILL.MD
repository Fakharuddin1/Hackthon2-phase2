---
name: backend-core
description: Generate backend routes, handle requests and responses, and connect applications to databases.
---

# Backend Core Skill

## Instructions

1. **Routing**
   - Create RESTful routes (GET, POST, PUT, DELETE)
   - Use clear and consistent endpoint naming
   - Group routes by feature or resource

2. **Request Handling**
   - Read request params, query, and body
   - Validate input data
   - Handle authentication middleware

3. **Response Handling**
   - Return proper HTTP status codes
   - Send structured JSON responses
   - Handle errors and edge cases

4. **Database Integration**
   - Connect backend to database
   - Perform CRUD operations
   - Use ORM or database queries

## Best Practices
- Follow REST API standards
- Separate routes, controllers, and services
- Use environment variables for secrets
- Never expose sensitive information
- Implement global error handling

## Example Structure

```js
// routes/todoRoutes.js
router.get('/todos', getTodos);
router.post('/todos', createTodo);
router.put('/todos/:id', updateTodo);
router.delete('/todos/:id', deleteTodo);
