import {
  ALL_EMPLOYEES_FAIL,
  ALL_EMPLOYEES_REQUEST,
  ALL_EMPLOYEES_SUCCESS,
  SET_EMPLOYEE,
} from "./constants";

const initState = {
  allEmployees: [],
  loading: true,
  error: null,
};

export const employeesReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ALL_EMPLOYEES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_EMPLOYEES_SUCCESS:
      return {
        ...state,
        loading: false,
        allEmployees: payload,
      };
    case ALL_EMPLOYEES_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case SET_EMPLOYEE:
      const updatedEmployee = payload;
      const employees = state.allEmployees;
      const updatedEmployees = employees.map(emp => {
        if (emp.id !== updatedEmployee.id) {
          return emp;
        }
        return updatedEmployee;
      });

      return {
        allEmployees: updatedEmployees,
      };

    default:
      return state;
  }
};
