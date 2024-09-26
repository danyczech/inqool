import Link from "next/link";
import { ReactElement } from "react";
import { Button } from "../shared";

type IProps = {
  title: string,
  message: string,
}


const ErrorPage = ({ title, message }:IProps):ReactElement => {

  return (
    <div>
      <h2>{title}</h2>
      <p>{message}</p>

      <Link href={"/"}>
        <Button>
          Go to homepage
        </Button>
      </Link>
    </div>
  );
}

export default ErrorPage;