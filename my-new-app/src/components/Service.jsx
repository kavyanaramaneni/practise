import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Service() {
    const [result, setResult] = useState([]);

    useEffect(() => {
        axios.get("https://reqres.in/api/users")
            .then((res) => {
                console.log("API Response:", res.data);
                if (Array.isArray(res.data.data)) {
                    setResult(res.data.data);
                } else {
                    setResult([]);
                }
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
                setResult([]);
            });
    }, []);

    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {result.length > 0 ? (
                        result.map((item) => (
                            <tr key={item.id}>  {/* ✅ Added key for each row */}
                                <td>{item.id}</td>
                                <td>{item.email}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>  {/* ✅ Fixed property name */}
                                <td><img src={item.avatar} alt="User Avatar" width="50" /></td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">Loading data...</td>  {/* ✅ Added a loading message */}
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
