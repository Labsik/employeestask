import axios from "axios";
import {
  ALL_EMPLOYEES_FAIL,
  ALL_EMPLOYEES_REQUEST,
  ALL_EMPLOYEES_SUCCESS,
  SET_EMPLOYEE,
} from "./constants";

export const getAllEmployees = () => async (dispatch) => {
  dispatch({ type: ALL_EMPLOYEES_REQUEST });
  try {
    const { data } = await axios.get(
      "https://yalantis-react-school-api.yalantis.com/api/task0/users"
    );

    const activeEmployeesUnparsed =
      localStorage.getItem("bdayEmployees") || "[]";
    const activeEmployees = JSON.parse(activeEmployeesUnparsed);

    const updatedEmployees = data.map((emp) => {
      const activeEmp = activeEmployees.find(({ id }) => id === emp.id);
      if (activeEmp) {
        return { ...emp, isActive: true };
      }
      return { ...emp, isActive: false };
    });

    dispatch({ type: ALL_EMPLOYEES_SUCCESS, payload: updatedEmployees });
  } catch (error) {
    console.log(error);
    dispatch({ type: ALL_EMPLOYEES_FAIL, payload: error });
  }
};

export const setEmployee = (employee) => (dispatch) => {
  const birthdaysEmployees = localStorage.getItem("bdayEmployees") || "[]";

  const birthdaysEmployeesParsed = JSON.parse(birthdaysEmployees);

  const updatedEmployee = { ...employee };
  const bdayEmployeesUpdated = employee.isActive
    ? [...birthdaysEmployeesParsed, updatedEmployee]
    : birthdaysEmployeesParsed.filter((emp) => emp.id !== updatedEmployee.id);

  localStorage.setItem("bdayEmployees", JSON.stringify(bdayEmployeesUpdated));

  dispatch({ type: SET_EMPLOYEE, payload: updatedEmployee });
};
