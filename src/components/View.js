import React from "react";
import { Icon } from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash";
export const View = ({ students, deleteStudent }) => {
  return students.map((student) => (
    <tr key={student.isbn}>
      <td>{student.firstname}</td>
      <td>{student.lastname}</td>
      <td>{student.phone}</td>
      <td className="delete-btn" onClick={() => deleteStudent(student.phone)}>
        <Icon icon={trash} />
      </td>
    </tr>
  ));
};
