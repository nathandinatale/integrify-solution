//Author:  Nathan Dinatale, Feb 12th, 2022
import { useState, useEffect } from "react";
import UserList from "../components/UserList";

function Homepage() {
  // Initializing the state variable to wait for a response before loading
  // The loaded users state will just
  const [isLoading, setIsLoading] = useState(true);
  const [loadedUsers, setLoadedUsers] = useState([]);

  //  Fetching the data from the API, loading it into an array and setting loading state to false
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

  // A change of state will cause a re-render, in which the right option here
  // is chosen and will render the users.
  return !isLoading ? (
    <div>
      <h1></h1>
      <UserList users={loadedUsers} />
    </div>
  ) : (
    <section>
      <p>Loading... </p>
    </section>
  );
}

export default Homepage;
