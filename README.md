# EVsForALL

## Login Page

### Frontend
- User Interface (UI) for the login form, including input fields for username and password.
- Event listeners to capture user input (e.g., when they submit the form).
- Error handling to display messages for successful or failed login attempts.

### Backend
- An authentication system to verify user credentials, usually involving database queries to match the username and password.
- Response handling to send back authentication results to the frontend.
- Basic security measures to protect against unauthorized access (Hashing and Salting).
- Implementation of bcrypt for password hashing.
- Use of JWT (JSON Web Tokens) for authorization.

## Saving User Preferences on Buy Page

### Frontend
- Allows user to star vehicles on the Buy page to save the user's preference for a vehicle (For now we will hard code some vehicles on these pages as we want the focus to be on implementing functionality for saving preferences).
- Event listeners to capture and process user changes to their preferences.
- Logic to send user preference updates to the backend.

### Backend
- Database storage to save and retrieve user preferences.
- Basic security measures to ensure the integrity of stored preferences.
- Backend code using Node.js and Express.js to handle the insertion, updating, retrieval, and deletion of user preferences.

## Preferences Display Page

### Frontend
- UI that displays cars that were starred by the user on the Buy page. (Note: The filtering option has been removed from this page.)
- Client-side logic to display the user's preferred cars.

### Backend
- Database operations using SQLite to manage user preferences.
- Backend code in Node.js and Express.js to handle database interactions.

## Rationale for Artifact Selection
We chose to implement this artifact as it had a good balance between frontend and backend components, which would provide a comprehensive understanding of what we need to include in our actual implementation. This feature will also be beneficial for users, as they can easily browse through a preferred list of EVs rather than a larger, more general list. 

