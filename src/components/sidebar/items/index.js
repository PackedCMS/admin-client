import { default_endpoints } from "../../../services/endpoints/defatuls";
import { default_media } from "../../../services/media/defaults";
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
               <SidebarItemAlt to={"/admin/endpoint/" + endpoint.slug}>{endpoint.name}</SidebarItemAlt>
            ))}
         </div>
         <div>
            <SidebarItem to="/admin/media">Medya</SidebarItem>
            {default_media.map((media) => (
               <SidebarItemAlt to={"/admin/media/" + media.slug}>{media.name}</SidebarItemAlt>
            ))}
         </div>
         <div>
            <SidebarItem to="/admin/settings">Ayarlar</SidebarItem>
            <SidebarItemAlt to="/admin/users">Kullanıcılar</SidebarItemAlt>
            <SidebarItemAlt to="/admin/photos">Yetkiler</SidebarItemAlt>
         </div>
      </div>
   )
}