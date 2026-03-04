const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());

const users = Array.from({ length: 42 }, (_, index) => ({
  id: index + 1,
  name: `User ${index + 1}`,
  email: `user${index + 1}@example.com`,
}));

app.get("/users", (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 5;

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedUsers = users.slice(startIndex, endIndex);
  const totalItems = users.length;
  const totalPages = Math.ceil(totalItems / limit);

  res.json({
    data: paginatedUsers,
    currentPage: page,
    totalPages,
    totalItems,
    itemsPerPage: limit,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});