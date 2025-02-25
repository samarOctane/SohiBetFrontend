import { useState, useEffect, useCallback } from "react";

const MoneyInput = ({ balance,fetchMoney }) => {
    const [money, setMoney] = useState(balance);
    // const [savedMoney, setSavedMoney] = useState(null);

    // const fetchMoney = useCallback(async () => {
    //     try {
    //         const response = await fetch("http://localhost:5200/money");
    //         const data = await response.json();
    //         if (data.latestMoney) {
    //             setSavedMoney(data.latestMoney.amount);
    //         }
    //     } catch (error) {
    //         console.error("Error fetching money:", error);
    //     }
    // }, []);

    // useEffect(() => {
    //     fetchMoney();
    // }, [fetchMoney]);

    const saveMoney = async (amount) => {
        try {
            const response = await fetch("http://localhost:5200/money", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ amount }),
            });

            const data = await response.json();
            console.log("Saved:", data);

            fetchMoney();
        } catch (error) {
            console.error("Error saving money:", error);
        }
    };

    useEffect(() => {
        if (balance !== undefined) {
            setMoney(balance);
            saveMoney(balance);
        }
    }, [balance]);

    return (
        <div>
            {/* <h2>Saved Money: {savedMoney !== null ? `$${savedMoney}` : "Loading..."}</h2> */}
        </div>
    );
};

export default MoneyInput;
