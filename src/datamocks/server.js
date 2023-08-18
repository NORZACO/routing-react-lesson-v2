
import { createServer } from "miragejs";
// import { USERS } from "./userGenerater";
const { default: sampleUserData } = require('./sampleUser');

console.log(sampleUserData);


export default function UserApi() {
    createServer({
        routes() {
            this.namespace = "/api";

            // Read all users
            this.get("/users", () => ({
                result: sampleUserData,
            }));

            // Read a specific user by UUID
            this.get("/users/:id", (schema, request) => {
                const id = request.params.id.trim();
                const user = sampleUserData.find((user) => user.userId === id);
                return {
                    result: user || 'User not found',   
                };
            });

            // Create a new user
            this.post("/users", (schema, request) => {
                const newUser = JSON.parse(request.requestBody);
                sampleUserData.push(newUser);
                return {
                    result: newUser,
                };
            });

            // Update a specific user by UUID
            this.put("/users/:id", (schema, request) => {
                const id = request.params.id.trim();
                const updatedData = JSON.parse(request.requestBody);
                const userIndex = sampleUserData.findIndex((user) => user.userId === id);
                if (userIndex !== -1) {
                    sampleUserData[userIndex] = { ...sampleUserData[userIndex], ...updatedData };
                    return {
                        result: sampleUserData[userIndex],
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
                const userIndex = sampleUserData.findIndex((user) => user.userId === id);
                if (userIndex !== -1) {
                    sampleUserData.splice(userIndex, 1);
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




