import { useState } from "react";

const PredictionHistory = () => {
    const [inputValue, setInputValue] = useState("");
    const [values, setValues] = useState(["2.5x", "33.2x", "4.01x", "6.8x", "7.5x", "3.2x", "2.3x"]);

    const handleAddValue = () => {
        if (inputValue.trim() === "") return;
        setValues((prev) => {
            const newValues = [...prev, inputValue];
            return newValues.length > 6 ? newValues.slice(1) : newValues;
        });
        setInputValue("");
    };

    return (
        <div>
            <div style={{ display: "flex" }}>
                {values.map((val, index) => (
                    <div key={index} style={{ marginLeft: "3px", marginRight: "3px", color: "#4287f5", height: "10%", width: "13%", background: "black", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <h2 style={{fontSize: "2vh" }}>{val}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PredictionHistory;
