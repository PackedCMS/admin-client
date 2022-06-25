import EndpointNewForm from "../../../../components/panels/endpoints/new/form";
import AdminPanel from "../../../../components/panels/panel/panel";
import Sidebar from "../../../../components/sidebar";




export default function EndpointNew() {


   return(
      <div className="main-container">
         <Sidebar />
         <div className="admin-panel-one">
            <AdminPanel head={"Endpoint New"}>
               <EndpointNewForm />
            </AdminPanel>
         </div>
      </div>
   )
}