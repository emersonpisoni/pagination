# Pagination in React: Client-Side and Server-Side

This project explores two common pagination strategies used in web applications:

* **Client-Side Pagination**
* **Server-Side Pagination**

Pagination is used to divide large datasets into smaller pages, improving performance, usability, and data management in web interfaces.

---

# Why Pagination Is Important

Pagination helps applications:

* Reduce the amount of data rendered at once
* Improve page performance
* Make large datasets easier to navigate
* Reduce memory usage in the browser
* Improve user experience when browsing lists

Common use cases include:

* Product catalogs
* User lists
* Search results
* Tables with large datasets
* Social media feeds

---

# Client-Side Pagination

Client-side pagination loads the **entire dataset in a single request**, and pagination logic is handled in the frontend.

The browser stores the full dataset and displays only a subset of it depending on the selected page.

### How It Works

1. The frontend fetches all records from the API.
2. Data is stored in application state.
3. The UI displays only a portion of the dataset using array slicing.

Example logic:

```javascript
const startIndex = (currentPage - 1) * itemsPerPage;

const visibleItems = data.slice(
  startIndex,
  startIndex + itemsPerPage
);
```

### When to Use Client-Side Pagination

Client-side pagination is appropriate when:

* The dataset is **small or moderate**
* The total number of records is known
* All data can be loaded without performance issues
* Fast page switching is important
* The application does not require complex filtering or server queries

Typical examples:

* Small dashboards
* Admin panels
* Static datasets
* Prototypes or demos

### Advantages

* Simple implementation
* Fast navigation between pages
* Only one API request is needed
* Reduced backend complexity

### Limitations

* Not suitable for large datasets
* Higher memory usage in the browser
* Large initial payloads

---

# Server-Side Pagination

Server-side pagination loads **only the data required for the current page**. The backend calculates which records should be returned.

Each time the user changes the page, the frontend sends a request to the backend with pagination parameters.

Example request:

```
GET /users?page=2&limit=10
```

The server processes the request and returns only the required records.

Example response:

```json
{
  "data": [...],
  "currentPage": 2,
  "totalPages": 12,
  "totalItems": 120
}
```

### How It Works

1. The user selects a page.
2. The frontend sends a request to the backend with pagination parameters.
3. The backend calculates the correct dataset slice.
4. The server returns only the relevant records.

Backend logic example:

```javascript
const startIndex = (page - 1) * limit;
const endIndex = startIndex + limit;

const results = data.slice(startIndex, endIndex);
```

### When to Use Server-Side Pagination

Server-side pagination is recommended when:

* The dataset is **large**
* Data is stored in a database
* Filtering or sorting is required
* Performance and scalability are important
* Network payload size must be minimized

Typical examples:

* E-commerce product listings
* Large databases
* Analytics dashboards
* Search results
* Enterprise applications

### Advantages

* Handles large datasets efficiently
* Smaller network responses
* Lower memory usage in the browser
* Better scalability

### Limitations

* Requires backend implementation
* Slightly more complex architecture
* Each page change requires a new request

---

# Key Differences

| Feature                         | Client-Side Pagination  | Server-Side Pagination |
| ------------------------------- | ----------------------- | ---------------------- |
| Data loading                    | All data loaded at once | Data loaded per page   |
| API requests                    | One request             | Multiple requests      |
| Performance with large datasets | Poor                    | Good                   |
| Implementation complexity       | Simple                  | Moderate               |
| Memory usage                    | Higher on client        | Lower on client        |

---

# Choosing the Right Approach

The choice depends mainly on **dataset size and application requirements**.

Use **client-side pagination** when:

* Data is small
* Simplicity is preferred
* The dataset rarely changes

Use **server-side pagination** when:

* Data is large
* The application must scale
* Filtering, sorting, and searching are required
* Data comes from a database

# Next studies

- Client-side pagination
- Server-side pagination
- Offset pagination
- Cursor pagination
- Keyset pagination
- Infinite scroll
- Load more pagination
- GraphQL pagination
- Virtualized lists