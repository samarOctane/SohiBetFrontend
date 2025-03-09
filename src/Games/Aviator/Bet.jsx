import { useState, useEffect, useCallback,useContext } from "react";
import Aviator from "./Aviator";
import Home from "../../Home/Home";
import { BalanceContext } from "../../UserMoney/BalanceContext";

const Bet = () => {

    const [multiplier, setMultiplier] = useState(1);
    const [money, setMoney] = useState(2);
    // const [balance, setBalance] = useState(100); //disbale for backend
    const [canCollect, setCanCollect] = useState(false);
    const [waiting, setWaiting] = useState(false);
    const [addedMoney, setAddedMoney] = useState(0);
    const [moneyDeducted, setMoneyDeducted] = useState(false);
    const [addMoneyClicked, setAddMoneyClicked] = useState(false);
    const [randomNum, setRandomNum] = useState(generateRandomNumber());

    const [firstBetValue, setFirstBetValue] = useState(10.00);
    const [secondBetValue, setSecondBetValue] = useState(10.00);

    const [earnedFirst, setEarnedFirst] = useState(0);
    const [increaserFirstEarned, setIncreaserFirstEarned] = useState(0);

    /////////////////////////////////////////////////////////////////////

    const { balance, setBalance } = useContext(BalanceContext);


    //////////////////////////////////////////////////////////////////////

    const [money2, setMoney2] = useState(2);
    const [canCollect2, setCanCollect2] = useState(false);
    const [addedMoney2, setAddedMoney2] = useState(0);
    const [moneyDeducted2, setMoneyDeducted2] = useState(false);
    const [addMoneyClicked2, setAddMoneyClicked2] = useState(false);

    //////////////////////////////////////////////////////////////////////

    function generateRandomNumber() {
        return Math.floor(Math.random() * 8) + 1;
    }

    useEffect(() => {
        let interval;

        if (!waiting) {
            setRandomNum(generateRandomNumber());

            interval = setInterval(() => {
                setMultiplier((prev) => {
                    if (prev <= randomNum) return prev + 0.01;
                    else {
                        return 1;
                    }

                });
            }, 50);
        }

        return () => clearInterval(interval);
    }, [waiting, randomNum]);


    useEffect(() => {
        setMoney(firstBetValue * multiplier);
        setMoney2(secondBetValue * multiplier);
    }, [multiplier]);

    useEffect(() => {
        if (multiplier === 1) {

            setCanCollect(true);
            setCanCollect2(true);

            setWaiting(true);

            setTimeout(() => {
                setWaiting(false);
            }, 9000);

            setAddedMoney(0);
            setAddedMoney2(0);

            setMoneyDeducted(false);
            setMoneyDeducted2(false);

            setAddMoneyClicked(false);
            setAddMoneyClicked2(false);
        }
    }, [multiplier]);


    const addMoney1 = () => {
        if (balance >= 2 && !moneyDeducted && !addMoneyClicked && waiting) {
            setBalance((prev) => prev - firstBetValue);
            setAddedMoney(firstBetValue);
            setAddMoneyClicked(true);
        }
    };
    const collectMoney1 = () => {
        if (canCollect && addedMoney > 0) {
            setBalance((prev) => prev + money);
            setCanCollect(false);
            setEarnedFirst(money);
            setIncreaserFirstEarned(multiplier);
        }
    };

    ///////////////////////////////////////////////////////////////////////////
    const addMoney2 = () => {
        if (balance >= 2 && !moneyDeducted2 && !addMoneyClicked2 && waiting) {
            setBalance((prev) => prev - secondBetValue);
            setAddedMoney2(secondBetValue);
            setAddMoneyClicked2(true);
        }
    };
    const collectMoney2 = () => {
        if (canCollect2 && addedMoney2 > 0) {
            setBalance((prev) => prev + money2);
            setCanCollect2(false);
        }
    };
    ///////////////////////////////////////////////////////////////////

    const [betAmount1, setBetAmount1] = useState(10.00);
    const [isEditing, setIsEditing] = useState(false);

    const handleClick1 = () => {
        setIsEditing(true);
    };

    const handleChange1 = (event) => {
        setBetAmount1(parseFloat(event.target.value));
        setFirstBetValue(parseFloat(event.target.value));
    };

    const handleBlur1 = () => {
        setIsEditing(false);
    };

    ////////////////////////////////////////////////////////////////////

    const [betAmount2, setBetAmount2] = useState(10.00);
    const [isEditing2, setIsEditing2] = useState(false);

    const handleClick2 = () => {
        setIsEditing2(true);
    };

    const handleChange2 = (event) => {
        setBetAmount2(parseFloat(event.target.value));
        setSecondBetValue(parseFloat(event.target.value));
    };

    const handleBlur2 = () => {
        setIsEditing2(false);
    };

    ///////////////////////////////////////////////////////////////////
    const increaseBet1 = () => {
        setFirstBetValue(() => Number(firstBetValue) + 1)
    }
    const decreaseBet1 = () => {
        setFirstBetValue(() => Number(firstBetValue) - 1)
    }


    const increaseBet2 = () => {
        setSecondBetValue(() => Number(secondBetValue) + 1)
    }
    const decreaseBet2 = () => {
        setSecondBetValue(() => Number(secondBetValue) - 1)
    }

    return (
        <div >
            {/* {balance}
            {error} */}
            <Aviator increaserFirstEarned={increaserFirstEarned} earnedFirst={earnedFirst} handleBlur2={handleBlur2} betAmount2={betAmount2} isEditing2={isEditing2} handleClick2={handleClick2} handleChange2={handleChange2} betAmount1={betAmount1} isEditing={isEditing} handleBlur1={handleBlur1} handleChange1={handleChange1} handleClick1={handleClick1} addMoney2={addMoney2} money2={money2} addedMoney2={addedMoney2} canCollect2={canCollect2} collectMoney2={collectMoney2} secondBetValue={secondBetValue} moneyDeducted2={moneyDeducted2} addedMoney2={addedMoney2} addMoneyClicked2={addMoneyClicked2} firstBetValue={firstBetValue} secondBetValue={secondBetValue} increaseBet1={increaseBet1} increaseBet2={increaseBet2} decreaseBet1={decreaseBet1} decreaseBet2={decreaseBet2} money={money} addedMoney={addedMoney} balance={balance} addMoney={addMoney1} collectMoney={collectMoney1} multiplier={multiplier} waiting={waiting} addMoneyClicked={addMoneyClicked} moneyDeducted={moneyDeducted} canCollect={canCollect} />
        </div>
    );
}

export default Bet
