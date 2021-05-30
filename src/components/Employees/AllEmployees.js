import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { alphabet, sortArr } from "../../helpers/helpers";
import { getAllEmployees } from "../../redux/actions";
import EmployeeItem from "./EmployeeItem";

const AllEmployees = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEmployees());
  }, [dispatch]);

  const { allEmployees, loading, error } = useSelector(
    (state) => state.getEmployees
  );

  const sortEmployees = sortArr(allEmployees, "lastName");

  const employeesList =
    !loading &&
    alphabet.map((char) => {
      const alphabetEmployees = sortEmployees?.filter(
        (employee) => employee.lastName[0] === char
      );

      const alphabetElement = alphabetEmployees?.map((employee) => (
        <EmployeeItem key={employee.id} employee={employee} />
      ));

      return (
        <div className="employees__item" key={char}>
          <h3 className="employees-alphabet">{char}</h3>
          {alphabetElement?.length ? alphabetElement : "----"}
        </div>
      );
    });

  console.log(allEmployees);

  return (
    <div className="container__employees">
      {error ? (
        <p>Oops, something went wrong on server side..</p>
      ) : !loading ? (
        <>
          <h2>Employees</h2>
          <div className="employees__list">{employeesList}</div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AllEmployees;
