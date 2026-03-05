import { useEffect, useState } from "react";
import { UserList } from "./user-list";
import { Pagination } from "./pagination";

const USERS_PER_PAGE = 5;

export function ClientPaginationDemo() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    }

    fetchUsers();
  }, []);

  const totalPages = Math.ceil(users.length / USERS_PER_PAGE);
  const startIndex = (currentPage - 1) * USERS_PER_PAGE;
  const currentUsers = users.slice(startIndex, startIndex + USERS_PER_PAGE);

  if (loading) return <p>Loading client-side data...</p>;

  return (
    <div>
      <h2>Client-Side Pagination</h2>
      <p>All data is loaded once and pagination happens in the browser.</p>

      <UserList users={currentUsers} />

      <p>
        Page {currentPage} of {totalPages}
      </p>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
