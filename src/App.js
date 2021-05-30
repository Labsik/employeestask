import "./App.css";
import AllEmployees from "./components/Employees/AllEmployees";
import BirthdaysList from "./components/BirthdaysSide/BirthdaysList";

function App() {
  return (
    <div className="container">
      <AllEmployees />
      <div>
        <h2>Employees birthday</h2>
        <BirthdaysList />
      </div>
    </div>
  );
}

export default App;
