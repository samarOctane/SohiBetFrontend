import { useEffect, useState } from "react";

const Check = () => {
  const [start, setStart] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStart(true);
    }, 500);
  }, []);

  const containerStyle = {
    width: "300px",
    height: "20px",
    backgroundColor: "#ddd",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
    margin: "100px auto",
  };

  const progressBarStyle = {
    width: start ? "100%" : "0%",
    height: "100%",
    backgroundColor: "#4caf50",
    transition: "width 7s linear",
  };

  return (
    <div style={containerStyle}>
      <div style={progressBarStyle}></div>
    </div>
  );
};

export default Check;
