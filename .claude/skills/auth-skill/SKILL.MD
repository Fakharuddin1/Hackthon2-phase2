---
name: auth-skill
description: Implement secure authentication systems including signup, signin, password hashing, JWT tokens, and Better Auth integration.
---

# Authentication System (Auth Skill)

## Instructions

1. **User Signup**
   - Validate email and password
   - Hash password before storing
   - Prevent duplicate accounts

2. **User Signin**
   - Verify credentials securely
   - Compare hashed passwords
   - Return authentication token on success

3. **Password Security**
   - Use bcrypt or argon2 for hashing
   - Never store plain text passwords
   - Apply proper salt rounds

4. **JWT Authentication**
   - Generate JWT on login
   - Store token securely (HTTP-only cookies or headers)
   - Verify token on protected routes
   - Handle token expiration and refresh

5. **Better Auth Integration**
   - Centralized auth logic
   - Session management
   - Role-based access control
   - Secure middleware setup

## Best Practices
- Use strong password policies
- Always hash passwords
- Keep JWT secrets in environment variables
- Set token expiration
- Protect sensitive routes with middleware
- Follow OWASP authentication guidelines

## Example Structure
```js
// Signup
const hashedPassword = await bcrypt.hash(password, 10);
await User.create({ email, password: hashedPassword });

// Signin
const isValid = await bcrypt.compare(password, user.password);
if (!isValid) throw new Error("Invalid credentials");

// JWT
const token = jwt.sign(
  { userId: user._id },
  process.env.JWT_SECRET,
  { expiresIn: "1h" }
);
