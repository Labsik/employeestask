import React from "react";
import moment from "moment";

const BdayMonth = ({ birthdaysEmployeesList }) => {
  return (
    <div>
      {birthdaysEmployeesList.map((bday, index) => {
        if (bday.employees?.length > 0) {
          return (
            <div key={index}>
              <div>
                <div>{bday?.month}</div>
                <div>
                  {bday?.employees.map((emp) => {
                    return (
                      <div key={emp.id}>
                        <ul>
                          <li>
                            <span>{emp.lastName + " " + emp.firstName} - </span>
                            <span>
                              {`${moment(emp.dob).format("DD")}
                                  
                                  ${moment(emp.dob).format("MMMM")}, ${moment(
                                emp.dob
                              ).format("YYYY")} year`}
                            </span>
                          </li>
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default BdayMonth;
