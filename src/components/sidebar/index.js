import SidebarItems from "../items";
import SidebarBrand from "./brand/brand";



export default function Sidebar() {

   return (
      <div className="sidebar">
         <SidebarBrand />
         <div className="sidebar-line"></div>
         <SidebarItems></SidebarItems>
      </div>
   )
}