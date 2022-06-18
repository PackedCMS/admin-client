import AdminPanel from "./panel/panel";




export default function AdminPanels() {

   return (
      <div>
         <div className="admin-panels">
            <div>
               <AdminPanel head="Hoşgeldiniz">
                  <div style={{ backgroundColor: "black", height: 2, width: "100%", margin: 5, marginLeft: 0 }}></div>
                  <div style={{ fontSize: 24 }}>Durum;</div>
                  <div style={{ fontSize: 18 }}>Gönderi: 20</div>

               </AdminPanel>
            </div>
            <div>
               <AdminPanel>
                  dasdasdasdsa
               </AdminPanel>
            </div>
         </div>
      </div>
   )
}