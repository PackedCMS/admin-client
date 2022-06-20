import SidebarBrand from "./brand/brand";
import SidebarItems from "./items";



export default function Sidebar() {

   return (
      <div className="sidebar">
         <SidebarBrand />
         <div className="sidebar-line"></div>
         <SidebarItems></SidebarItems>
      </div>
   )
}