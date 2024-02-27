import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

export async function action({ params }: LoaderFunctionArgs) {
  await deleteContact(params.contactId);
  
  return redirect("/");
}