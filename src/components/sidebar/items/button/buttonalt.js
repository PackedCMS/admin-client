
import { Link } from "react-router-dom";


export default function SidebarItemAlt({ children, to }) {

   return (
      <div className="sidebar-tree">
         <div className="line-alt"></div>
         <Link to={to}>
            <div itemType="button" className="sidebar-item-alt">{children}</div>
         </Link>
      </div>
   )
}