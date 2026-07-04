import StudentCard from "./StudentCard";

function StudentList({ students, onDelete, onEdit }) {
  if (students.length === 0) {
    return <h3>No Students Found</h3>;
  }

  return (
    <div className="student-list">
      {students.map((student) => (
        <StudentCard
          key={student.rollNo}
          student={student}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default StudentList;
