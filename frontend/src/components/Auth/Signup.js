import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/auth/signup", { email, password });
            alert("Signup successful! You can now log in.");
        } catch (error) {
            alert("Signup failed!");
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
