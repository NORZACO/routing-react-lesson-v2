// // src/server.js
// import { createServer } from "miragejs";
// import { useGenerater } from "./datamocks/userGenerater";

// console.log(useGenerater);

// function ApiGetPost() {
//   createServer({
//     routes() {
//       this.get("/api/reminders", () => ({
//         reminders: [
//           { id: 1, text: "Walk the dog" },
//           { id: 2, text: "Take out the trash" },
//           { id: 3, text: "Work out" },
//         ],
//       }));

//       this.post("/api/reminders", (schema, request) => {
//         let attrs = JSON.parse(request.requestBody);
//         console.log(attrs);
//         debugger;
//       });
//     },
//   });
// }

// ApiGetPost();
