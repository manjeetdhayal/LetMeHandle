import { Checkbox } from "native-base";
import React, { useState } from "react";

const TaskList = ({ status, data }) => {


  return (
          <Checkbox value={data} my="1" bg="amber.600">
            {data}
          </Checkbox>)
};

export default TaskList;
