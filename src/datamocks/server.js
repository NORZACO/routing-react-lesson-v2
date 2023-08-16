
import { createServer } from "miragejs";
import { USERS } from "./userGenerater";

console.log(USERS);

// TODO #2 : LR-2 calling miragejs api

// import { createServer } from "@miragejs/server";

// let USERS = [
//     {
//         userId: '149fe288-3808-45f0-a436-65fc72ba53f6',
//         name: 'John Doe'
//     }
//     // ... other users
// ];

export default function UserApi() {
    createServer({
        routes() {
            this.namespace = "/api";

            // Read all users
            this.get("/users", () => ({
                result: USERS,
            }));

            // Read a specific user by UUID
            this.get("/users/:id", (schema, request) => {
                const id = request.params.id.trim();
                const user = USERS.find((user) => user.userId === id);
                return {
                    result: user || 'User not found',   
                };
            });

            // Create a new user
            this.post("/users", (schema, request) => {
                const newUser = JSON.parse(request.requestBody);
                USERS.push(newUser);
                return {
                    result: newUser,
                };
            });

            // Update a specific user by UUID
            this.put("/users/:id", (schema, request) => {
                const id = request.params.id.trim();
                const updatedData = JSON.parse(request.requestBody);
                const userIndex = USERS.findIndex((user) => user.userId === id);
                if (userIndex !== -1) {
                    USERS[userIndex] = { ...USERS[userIndex], ...updatedData };
                    return {
                        result: USERS[userIndex],
                    };
                } else {
                    return {
                        result: 'User not found',
                    };
                }
            });

            // Delete a specific user by UUID
            this.delete("/users/:id", (schema, request) => {
                const id = request.params.id.trim();
                const userIndex = USERS.findIndex((user) => user.userId === id);
                if (userIndex !== -1) {
                    USERS.splice(userIndex, 1);
                    return {
                        result: 'User deleted successfully',
                    };
                } else {
                    return {
                        result: 'User not found',
                    };
                }
            });
        },
    });
}




