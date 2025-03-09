import { useState } from "react";
import { Link } from 'react-router-dom';
import './UsersAccount.css'

export default function UsersAccount({username,money}) {
    

    return (
        <div className="container">
            <div className="card">
                <div className="profile-icon">{username.charAt(0)}</div>
                <h2>{username.name}</h2>
                <p className="balance">Balance: ₹{money}</p>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <button className="withdraw-button">Withdraw</button>
                    <Link to="/Payments">
                        <button className="withdraw-button" style={{ backgroundColor: "green", marginTop: "4px",height:"100%",width:"100%"}} >Add Money</button>
                    </Link>
                </div>

            </div>
        </div>
    );
}


