import { useEffect, useState } from "react";
import { UserList } from "./user-list";
import { Pagination } from "./pagination";

const ITEMS_PER_PAGE = 5;

export function ServerPaginationDemo() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `http://localhost:3001/users?page=${currentPage}&limit=${ITEMS_PER_PAGE}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const result = await response.json();

        setUsers(result.data);
        setTotalPages(result.totalPages);
      } catch (err: unknown) {
        setError(
          err instanceof Error
            ? err.message
            : "An error occurred while fetching users"
        );
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, [currentPage]);

  return (
    <div>
      <h2>Server-Side Pagination</h2>
      <p>The frontend requests only the current page from the backend.</p>

      {loading && <p>Loading server-side data...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && (
        <>
          <UserList users={users} />

          <p>
            Page {currentPage} of {totalPages}
          </p>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
}
