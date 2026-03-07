interface UserListProps {
  users: { id: string | number; name: string; email: string }[];
}

export function UserList({ users }: UserListProps) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {users.map((user) => (
        <li
          key={user.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "16px",
            marginBottom: "10px",
          }}
        >
          <strong>{user.name}</strong>
          <p>{user.email}</p>
        </li>
      ))}
    </ul>
  );
}
