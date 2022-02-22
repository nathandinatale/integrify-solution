//Author:  Nathan Dinatale, Feb 12th, 2022
import { useState, useEffect } from "react";
import UserList from "../components/UserList";

function Homepage() {
  // Initializing the state variable to wait for a response before loading
  // The loaded users state will just
  const [isLoading, setIsLoading] = useState(true);
  const [loadedUsers, setLoadedUsers] = useState([]);

  //  Fetching the data from the API, loading it into an array and setting loading state to false
  // the useEffect hook is used to ensure that the API is not spammed because a change of state causes a re-render,
  // without it the page would just constantly re-render and call the API indefinitely.
  //
  // useEffect allows us to add a restriction so that the code does not always run on a render
  // the second argument specifies the dependencies for running the effect. React checks the values in it to see if they have changed
  // if it is left blank, useEffect is only executed the first time the component is rendered

  // all external values the function relies on should be added to the useEffect array
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
          console.log(user);
          users.push(user);
        }
        setIsLoading(false);
        setLoadedUsers(users);
      });
  }, []);

  // A change of state will cause a re-render, in which the right option here
  // is chosen and will render the users.

  // The created array of users stored in the state variable, loadedUsers, is passed to the
  // UserList component as a prop
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
