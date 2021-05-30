import React from "react";
import { useDispatch } from "react-redux";
import { setEmployee } from "../../redux/actions";

const EmployeeItem = ({ employee }) => {
  const dispatch = useDispatch();

  return (
    <div className="employee__single item">
      <span
        style={{
          color: employee.isActive && "red",
        }}>{`${employee.lastName} ${employee.firstName}`}</span>

      <form>
        <label>
          <input
            type="radio"
            checked={!employee.isActive}
            onChange={() => {
              dispatch(setEmployee({ ...employee, isActive: false }));
            }}
          />{" "}
          Not active
        </label>

        <label>
          <input
            type="radio"
            checked={employee.isActive}
            onChange={() => {
              dispatch(setEmployee({ ...employee, isActive: true }));
            }}
          />{" "}
          Active
        </label>
      </form>
    </div>
  );
};

export default EmployeeItem;
