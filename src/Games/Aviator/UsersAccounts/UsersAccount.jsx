import { useState } from "react";
import { Link } from 'react-router-dom';
import './UsersAccount.css'

export default function UsersAccount() {
    const [user, setUser] = useState({
        name: "Ajeet",
        username: "ajeet123",
        balance: 1000,
    });

    const withdraw = () => {
        if (user.balance >= 100) {
            setUser({ ...user, balance: user.balance - 100 });
        }
    };

    return (
        <div className="container">
            <div className="card">
                <div className="profile-icon">{user.name.charAt(0)}</div>
                <h2>{user.name}</h2>
                <p>@{user.username}</p>
                <p className="balance">Balance: ₹{user.balance}</p>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <button className="withdraw-button" onClick={withdraw}>Withdraw</button>
                    <Link to="/Payments">
                        <button className="withdraw-button" style={{ backgroundColor: "green", marginTop: "4px",height:"100%",width:"100%"}} onClick={withdraw} >Add Money</button>
                    </Link>
                </div>

            </div>
        </div>
    );
}


