import { useState, useEffect } from "react";
import UserList from "../components/UserList";

function Homepage() {
  // Initializing the state variable to wait for a response before loading
  // The loaded users state will just
  const [isLoading, setIsLoading] = useState(true);
  const [loadedUsers, setLoadedUsers] = useState([]);

  // The use effect state is used to wait for the API to return before rendering the page
  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const users = [];

        for (const key in data) {
          const user = {
            id: key,
            ...data[key],
          };
          users.push(user);
        }
        setIsLoading(false);
        setLoadedUsers(users);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading... </p>
      </section>
    );
  }

  return (
    <div>
      <h1></h1>
      <UserList users={loadedUsers} />
    </div>
  );
}

export default Homepage;
