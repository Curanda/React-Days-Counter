import React from "react";
import dayjs from "dayjs";
import Reset from "./Reset.jsx";

function DisplayTime({ count, setCount, setStep }) {
    const now = dayjs();

    if (count > 0) {
        return (
            <>
                <p>{count} days from today is {now.add(count, 'day').format('YYYY-MM-DD')}</p>
                <Reset setStep={setStep} setCount={setCount} />
            </>
        );
    } else if (count < 0) {
        return (
            <>
                <p>{count} days ago was {now.add(count, 'day').format('YYYY-MM-DD')}</p>;
                <Reset setStep={setStep} setCount={setCount} />
            </>
        )
    } else {
        return <p>Today is {now.format('YYYY-MM-DD')}</p>;
    }
}

export default DisplayTime;
