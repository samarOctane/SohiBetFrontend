import { createContext, useState,useEffect } from "react";

export const BalanceContext = createContext();

export const BalanceProvider = ({ children }) => {
    const [balance, setBalance] = useState(0);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMoney = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    setError("Unauthorized: No token found");
                    return;
                }

                const response = await fetch("http://localhost:5000/money", {
                    method: "GET",
                    headers: {
                        Authorization: token,
                        "Content-Type": "application/json",
                    },
                });

                const data = await response.json();
                if (!response.ok) {
                    setError(data.message || "Failed to fetch money");
                    return;
                }

                setBalance(data.money);
            } catch (err) {
                setError("Internal Server Error");
            }
        };
        fetchMoney();
    }, []);



    return (
        <BalanceContext.Provider value={{ balance, setBalance }}>
            {children}
        </BalanceContext.Provider>
    );
};
