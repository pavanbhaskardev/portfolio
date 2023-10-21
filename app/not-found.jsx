import { redirect } from "next/navigation";

const NotFound = () => {
  redirect("/lost");
};

export default NotFound;
