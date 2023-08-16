

// import { faker } from '@faker-js/faker';
// import { createServer } from "miragejs";
// import { useEffect, useState } from "react";

// function createRandomUser() {
//     return {
//         userId: faker.string.uuid(),
//         username: faker.internet.userName(),
//         firstName: faker.person.firstName(),
//         lastName: faker.person.lastName(),
//         email: faker.internet.email(),
//         aboutMe: faker.person.bio(),
//         avatar: faker.image.avatar(),
//         password: faker.internet.password(),
//     }
// }





// // generate 6 users
// const USERS = faker.helpers.multiple(createRandomUser, { count: 6 });

// // TODO #2 : LR-2 calling miragejs api
// export function ApiUser() {
//     createServer({
//         routes() {
//             this.get("/api/reminders", () => ({
//                 result: USERS,
//             }));
//         },
//     });
// }



// // react compenent
// export default function AppCaller() {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         fetch("/api/reminders")
//             .then((res) => res.json())
//             .then((data) => setUsers(data.result));
//     }, []);

//     return (
//         <div className="App">
//             <h1>Users</h1>
//             <ul>
//                 {users.reminder.map((user) => (
//                     <li key={user.userId}>
//                         <img src={user.avatar} alt="avatar" />
//                         <p>{user.username}</p>
//                         <p>{user.firstName}</p>
//                         <p>{user.lastName}</p>
//                         <p>{user.email}</p>
//                         <p>{user.aboutMe}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

