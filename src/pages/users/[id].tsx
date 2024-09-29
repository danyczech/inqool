import { ReactElement, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ErrorPage from "@/components/pages/ErrorPage";
import { EditUser } from "@/components/shared";

const EditUserPage = ():ReactElement => {

  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);

    fetch(`https://inqool-interview-api.vercel.app/api${pathname}`, { method: "GET" })
      .then((response) => {

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.json();
      })
      .then((resData) => {
        setUser(resData);
      })
      .catch(error => {
        return <ErrorPage title='Sorry, error when loading the user' message={error} />  
      })
      .finally(() => setLoading(false))

  }, [pathname]);
  
  if (loading) return <p>Data Loading...</p>

  return <EditUser user={user} />

};
  

export default EditUserPage;
