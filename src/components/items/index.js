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
            <SidebarItemAlt to="/admin/endpoint/posts">Yazılar</SidebarItemAlt>
            <SidebarItemAlt to="/admin/endpoint/photos">Resimler</SidebarItemAlt>
            <SidebarItemAlt to="/admin/endpoint/sharings">Yorumlar</SidebarItemAlt>
         </div>
         <div>
            <SidebarItem to="/admin/media">Medya</SidebarItem>
            <SidebarItemAlt to="/admin/media/posts">Yazılar</SidebarItemAlt>
            <SidebarItemAlt to="/admin/media/photos">Resimler</SidebarItemAlt>
            <SidebarItemAlt to="/admin/media/sharings">Paylaşımlar</SidebarItemAlt>
         </div>
         <div>
            <SidebarItem to="/admin/settigns">Ayarlar</SidebarItem>
            <SidebarItemAlt to="/admin/users">Kullanıcılar</SidebarItemAlt>
            <SidebarItemAlt to="/admin/photos">Yetkiler</SidebarItemAlt>
         </div>
      </div>
   )
}