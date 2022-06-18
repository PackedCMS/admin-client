
import { Link } from "react-router-dom";


export default function SidebarItem({ children, to }) {

   return (
      <Link to={to}>
         <div itemType="button" className="sidebar-item">{children}</div>
      </Link>
   )
}