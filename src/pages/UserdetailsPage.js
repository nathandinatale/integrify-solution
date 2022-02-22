import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Userdetails from "../components/Userdetails";

// The url from which the API is called uses the current URL's id paramater
// from App.js, id was specified to be a variable appendage to the react app URL
function UserdetailsPage() {
  const { id } = useParams();

  const [loadedUser, setLoadedUser] = useState();
  const [loadedAddress, setLoadedAddress] = useState();

  const url = "https://jsonplaceholder.typicode.com/users/" + id;

  // Throws an error into the console if user can't be found
  // Could also do this by catching the failure to resolve the promise

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Issue communicating with User API");
        }
      })
      .then((data) => {
        const user = {
          ...data,
        };
        const address = {
          ...data.address,
        };
        // Address is loaded seperately because itself is a JSON object
        setLoadedUser(user);
        setLoadedAddress(address);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // The user details page is only rendered once the user and their address have been received
  // the loadedUser and loadedAddress key/value pairs are passed as props to userdetails component
  return loadedUser && loadedAddress ? (
    <div>
      <Userdetails {...loadedUser} {...loadedAddress} />
    </div>
  ) : (
    <section>
      <p>Loading... </p>
    </section>
  );
}

export default UserdetailsPage;
