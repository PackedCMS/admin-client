import { default_endpoints } from "../../services/endpoints/defatuls";
import SidebarItem from "./button/button";
import SidebarItemAlt from "./button/buttonalt";



export default function SidebarItems() {

   return (
      <div className="sidebar-items">
         <div>
            <SidebarItem to="/admin">Panel</SidebarItem>
            <SidebarItemAlt to="/admin/graphs">Grafikler</SidebarItemAlt>
            <SidebarItemAlt to="/admin/stats">Durum</SidebarItemAlt>
         </div>
         <div>
            <SidebarItem to="/admin/endpoints">Endpoints</SidebarItem>
            {default_endpoints.map((endpoint) => (
               <SidebarItemAlt to={"/admin/media/" + endpoint.slug}>{endpoint.name}</SidebarItemAlt>
            ))}
         </div>
         <div>
            <SidebarItem to="/admin/media">Medya</SidebarItem>
            <SidebarItemAlt to="/admin/media/posts">Yazılar</SidebarItemAlt>
            <SidebarItemAlt to="/admin/media/media">Medya</SidebarItemAlt>
            <SidebarItemAlt to="/admin/media/sharings">Paylaşımlar</SidebarItemAlt>
         </div>
         <div>
            <SidebarItem to="/admin/settings">Ayarlar</SidebarItem>
            <SidebarItemAlt to="/admin/users">Kullanıcılar</SidebarItemAlt>
            <SidebarItemAlt to="/admin/photos">Yetkiler</SidebarItemAlt>
         </div>
      </div>
   )
}