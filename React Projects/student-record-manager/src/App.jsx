import { useEffect, useState } from "react";
import "./App.css";

import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";

function App() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [courseFilter, setCourseFilter] = useState("All");
  const [editStudent, setEditStudent] = useState(null);

  // Load data from Local Storage
  useEffect(() => {
    const savedStudents = JSON.parse(localStorage.getItem("students"));

    if (savedStudents) {
      setStudents(savedStudents);
    }
  }, []);

  // Save whenever students change
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  // Add Student
  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  // Delete Student
  const deleteStudent = (rollNo) => {
    const updatedStudents = students.filter(
      (student) => student.rollNo !== rollNo
    );

    setStudents(updatedStudents);
  };

  // Edit Button
  const handleEdit = (student) => {
    setEditStudent(student);
  };

  // Update Student
  const updateStudent = (updatedStudent) => {
    const updatedList = students.map((student) =>
      student.rollNo === updatedStudent.rollNo ? updatedStudent : student
    );

    setStudents(updatedList);
    setEditStudent(null);
  };

  // Search + Filter
  const filteredStudents = students.filter((student) => {
    const matchSearch = student.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCourse =
      courseFilter === "All" || student.course === courseFilter;

    return matchSearch && matchCourse;
  });

  return (
    <div className="container">

      <h1>Student Record Manager</h1>

      <StudentForm
        addStudent={addStudent}
        editStudent={editStudent}
        updateStudent={updateStudent}
      />

      <div className="top-bar">
        <SearchBar search={search} setSearch={setSearch} />

        <Filter
          courseFilter={courseFilter}
          setCourseFilter={setCourseFilter}
        />
      </div>

      <StudentList
        students={filteredStudents}
        onDelete={deleteStudent}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default App;
