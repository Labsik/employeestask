import React from "react";
import { useSelector } from "react-redux";
import { sortArr, months } from "../../helpers/helpers";
import moment from "moment";
import BdayMonth from "./BdayMonth";

const BirthdaysList = () => {
  const { allEmployees } = useSelector((state) => state.getEmployees);

  const selectedEmployees = allEmployees?.filter((i) => i.isActive);
  if (selectedEmployees.length === 0) {
    return <p>Employees List is empty</p>;
  } else {
    const birthdaysSortedEmployees = sortArr(selectedEmployees, "lastName");
    const curMonth = new Date().getMonth();

    const updatedMonths = [
      ...months.slice(curMonth),
      ...months.slice(0, curMonth),
    ];

    const birthdaysEmployeesList = updatedMonths.map((month) => {
      return {
        month,
        employees: birthdaysSortedEmployees?.filter((employee) => {
          return moment(employee.dob).format("MMMM") === month;
        }),
      };
    });

    return (
      <div>
        <BdayMonth birthdaysEmployeesList={birthdaysEmployeesList} />
      </div>
    );
  }
};

export default BirthdaysList;
