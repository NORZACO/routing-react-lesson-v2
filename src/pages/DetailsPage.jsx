import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "jquery/dist/jquery.min.js";



export const URL = "/api/users";

export default function PersonDetails() {
    const { id } = useParams();

    const [person, setPerson] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`${URL}/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch person details");
                }
                return res.json();
            })
            .then((data) => setPerson(data.result))
            .catch((err) => setError(err.message));
    }, [id]);

    if (error) {
        return <div className="alert alert-danger" role="alert">{error}</div>;
    }

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Person Details</h1>
            {person && (
                <div className="card">
                    <img src={person.avatar} className="card-img-top" alt={`${person.firstName}'s avatar`} />
                    <div className="card-body">
                        <h5 className="card-title">{person.firstName} {person.lastName}</h5>
                        <p className="card-text">Email: {person.email}</p>
                        <p className="card-text">About: {person.aboutMe}</p>
                        <p className="card-text">Username: {person.username}</p>
                        <p className="card-text">Birthdate: {person.birthdate}</p>
                        <p className="card-text">Registered at: {person.registeredAt}</p>
                        <h6 className="mt-4">Additional Information:</h6>
                        <p className="card-text">Biograph: {person.userInfo.biograph}</p>
                        <p className="card-text">Company: {person.userInfo.company}</p>
                        {/* ... and so on for other fields you want to display */}
                    </div>
                </div>
            )}
        </div>
    );
}
