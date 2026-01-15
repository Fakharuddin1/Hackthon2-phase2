---
name: database-schema
description: Design and manage database tables, migrations, and schemas for scalable applications.
---

# Database Schema Design

## Instructions

1. **Schema Planning**
   - Identify core entities
   - Define primary keys
   - Normalize data structure

2. **Table Design**
   - Use clear table and column names
   - Choose correct data types
   - Apply constraints (PRIMARY KEY, UNIQUE, NOT NULL)

3. **Relationships**
   - One-to-One
   - One-to-Many
   - Many-to-Many
   - Use foreign keys properly

4. **Migrations**
   - Create version-controlled migrations
   - Support rollback (up/down)
   - Keep migrations small and focused

## Best Practices
- Use auto-increment `id` as primary key
- Add indexes on frequently queried columns
- Include timestamps (`created_at`, `updated_at`)
- Avoid breaking schema changes
- Design with future scalability in mind

## Example Structure

```sql
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
