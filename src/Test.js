import React, { useState } from "react";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
const { RangePicker } = DatePicker;

function Test() {
  const [dateRange, setDateRange] = useState(null);

  const onChanges = (dates, dateStrings) => {
    setDateRange(dateStrings);
  };

  let days = 0;
  if (dateRange) {
    const start = dayjs(dateRange[0]);
    const end = dayjs(dateRange[1]);
    days = end.diff(start, "day") + 1;
  }

  return (
    <Space direction="vertical" size={12}>
      <RangePicker format={"YYYY-MM-DD"} onChange={onChanges} />
      <p>Number of days: {days}</p>
    </Space>
  );
}

export default Test;
