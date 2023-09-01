import React from "react";
import dayjs from "dayjs";

function DisplayTime({ count }) {
    const now = dayjs();

    if (count > 0) {
        return <p>{count} days from today is {now.add(count, 'day').format('YYYY-MM-DD')}</p>
    } else if (count < 0) {
        return <p>{count} days ago was {now.add(count, 'day').format('YYYY-MM-DD')}</p>
    } else return <p>Today is {now.format('YYYY-MM-DD')}</p>
}

export default DisplayTime;
