import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Userdetails from "../components/Userdetails";

function UserdetailsPage() {
  const { id } = useParams();

  const [loadedUser, setLoadedUser] = useState();
  const [loadedAddress, setLoadedAddress] = useState();

  const url = "https://jsonplaceholder.typicode.com/users/" + id;

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
        setLoadedUser(user);
        setLoadedAddress(address);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
