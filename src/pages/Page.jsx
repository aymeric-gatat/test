import { NavLink } from "react-router-dom";

export default function Page() {
  return (
    <>
      <div>Ceci est page</div>
      <NavLink to={"/"}>Changer de page</NavLink>
    </>
  );
}
