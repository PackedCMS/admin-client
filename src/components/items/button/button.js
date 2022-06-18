
import { Link } from "react-router-dom";


export default function SidebarItem(child, {to}) {

   return(
      <Link to={to}>{child}</Link>
   )
}