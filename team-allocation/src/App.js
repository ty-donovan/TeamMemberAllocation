import React from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Employees from './Employees';
import { useState, useEffect } from 'react';

function App() {
  const [selectedTeam, setSelectedTeam] = useState(JSON.parse(localStorage.getItem("selectedTeam")) || "TeamB");

  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem("employees")) || [{
      id: 1,
      fullName: "Bob Jones",
      designation: "JavaScript Developer",
      gender: "male",
      teamName: "TeamA"
    },
    {
      id: 2,
      fullName: "Jill Bailey",
      designation: "Node Developer",
      gender: "female",
      teamName: "TeamA"
    },
    {
      id: 3,
      fullName: "Gail Shepherd",
      designation: "Java Developer",
      gender: "female",
      teamName: "TeamA"
    },
    {
      id: 4,
      fullName: "Sam Reynolds",
      designation: "React Developer",
      gender: "male",
      teamName: "TeamB"
    },
    {
      id: 5,
      fullName: "David Henry",
      designation: "DotNet Developer",
      gender: "male",
      teamName: "TeamB"
    },
    {
      id: 6,
      fullName: "Sarah Blake",
      designation: "SQL Server DBA",
      gender: "female",
      teamName: "TeamB"
    },
    {
      id: 7,
      fullName: "James Bennet",
      designation: "Angular Developer",
      gender: "male",
      teamName: "TeamC"
    },
    {
      id: 8,
      fullName: "Jessica Faye",
      designation: "API Developer",
      gender: "female",
      teamName: "TeamC"
    },
    {
      id: 9,
      fullName: "Lita Stone",
      designation: "C++ Developer",
      gender: "female",
      teamName: "TeamC"
    },
    {
      id: 10,
      fullName: "Daniel Young",
      designation: "Python Developer",
      gender: "male",
      teamName: "TeamD"
    },
    {
      id: 11,
      fullName: "Adrian Jacobs",
      designation: "Vue Developer",
      gender: "male",
      teamName: "TeamD"
    },
    {
      id: 12,
      fullName: "Devin Monroe",
      designation: "Graphic Designer",
      gender: "male",
      teamName: "TeamD"
    }]);

  useEffect(() => {
    localStorage.setItem("employeesList", JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam));
  }, [selectedTeam]);

  const handleTeamSelectionChange = (event) => {
      setSelectedTeam(event.target.value);
  }

  const handleEmployeeCardClick = (event) => {
      const transformedEmployees = employees.map((employee) => {
          if (employee.id === parseFloat(event.currentTarget.id)) {
            if (employee.teamName === selectedTeam) {
              return { ...employee, teamName: "" };
            } else {
              return { ...employee, teamName: selectedTeam };
            }
          } else {
            return employee;
          }
        });
        
      setEmployees(transformedEmployees);
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <Header selectedTeam={selectedTeam}
              teamMemberCount={employees.filter((employee) => employee.teamName === selectedTeam).length}/>
      <Employees employees={employees}
                selectedTeam={selectedTeam}
                handleEmployeeCardClick={handleEmployeeCardClick}
                handleTeamSelectionChange={handleTeamSelectionChange}/>
      <Footer />
    </div>
  );
}

export default App;
