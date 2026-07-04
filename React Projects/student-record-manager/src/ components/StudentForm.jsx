import { useState, useEffect } from "react";

function StudentForm({ addStudent, editStudent, updateStudent }) {
  const [student, setStudent] = useState({
    name: "",
    rollNo: "",
    course: "",
    email: "",
  });

  useEffect(() => {
    if (editStudent) {
      setStudent(editStudent);
    }
  }, [editStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setStudent({
      ...student,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      student.name.trim() === "" ||
      student.rollNo.trim() === "" ||
      student.course.trim() === "" ||
      student.email.trim() === ""
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (editStudent) {
      updateStudent(student);
    } else {
      addStudent(student);
    }

    setStudent({
      name: "",
      rollNo: "",
      course: "",
      email: "",
    });
  };

  return (
    <div className="form-container">
      <h2>{editStudent ? "Edit Student" : "Add Student"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={student.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="rollNo"
          placeholder="Roll Number"
          value={student.rollNo}
          onChange={handleChange}
        />

        <input
          type="text"
          name="course"
          placeholder="Course"
          value={student.course}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={student.email}
          onChange={handleChange}
        />

        <button type="submit">
          {editStudent ? "Update Student" : "Add Student"}
        </button>
      </form>
    </div>
  );
}

export default StudentForm;
