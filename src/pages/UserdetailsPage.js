import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Userdetails from "../components/Userdetails";

function UserdetailsPage() {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [loadedUser, setLoadedUser] = useState();
  const [loadedAddress, setLoadedAddress] = useState();

  const url = "https://jsonplaceholder.typicode.com/users/" + id;

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const user = {
          ...data,
        };
        const address = {
          ...data.address,
        };
        setLoadedUser(user);
        setLoadedAddress(address);
      });
    setIsLoading(false);
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
      <Userdetails {...loadedUser} {...loadedAddress} />
    </div>
  );
}

export default UserdetailsPage;
