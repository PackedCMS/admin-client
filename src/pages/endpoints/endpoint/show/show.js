import AdminPanel from "../../../../components/panels/panel/panel";
import Sidebar from "../../../../components/sidebar";




export default function EndpointShow() {


   return (
      <div className="main-container">
         <Sidebar />
         <div className="admin-panel-one">
            <AdminPanel head={"Endpoint: name"}>

            </AdminPanel>
         </div>
      </div>
   )
}