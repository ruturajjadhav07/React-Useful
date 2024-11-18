import React, { useState, useEffect } from "react";
import axios from "axios";

const JavaComponent = () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8080/your-app-name/api/message")
            .then(response => setMessage(response.data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <h1>Message from Servlet:</h1>
            <p>{message}</p>
        </div>
    );
};

export default JavaComponent;
