function StudentCard({ student, onDelete, onEdit }) {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>

      <p>
        <strong>Roll No:</strong> {student.rollNo}
      </p>

      <p>
        <strong>Course:</strong> {student.course}
      </p>

      <p>
        <strong>Email:</strong> {student.email}
      </p>

      <div className="buttons">
        <button onClick={() => onEdit(student)}>Edit</button>

        <button onClick={() => onDelete(student.rollNo)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default StudentCard;
