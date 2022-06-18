
import { Link } from "react-router-dom";


export default function SidebarItem({ children, to }) {

   return (
      <div className="sidebar-item">
         <Link to={to} itemType="button" className="link-sidebar">{children}</Link>
      </div>
   )
}