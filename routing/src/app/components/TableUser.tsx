import React from "react";
import { User } from "../api/model/user";

interface TableUserProps {
  users: User[];
}

const TableUser: React.FC<TableUserProps> = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellidos</th>
          <th>Privacidad</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.lastname}</td>
            <td>{user.privacy}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableUser;
