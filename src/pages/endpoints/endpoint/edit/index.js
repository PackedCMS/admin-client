import { useEffect, useState } from "react";
import { useParams } from "react-router"
import EndpointEditForm from "../../../../components/panels/endpoints/edit/form"
import AdminPanel from "../../../../components/panels/panel/panel"
import Sidebar from "../../../../components/sidebar"
import { default_endpoints } from "../../../../services/endpoints/defatuls";


export default function EndpointEdit() {

   const { slug } = useParams();
   
   const [value, setValue] = useState({})

   useEffect(() => {
      const endpoint = default_endpoints.find(a => a.slug === slug)
      setValue(endpoint)
   })

   return (
      <div className="main-container">
         <Sidebar></Sidebar>
         <div className="admin-panel-one">
            <AdminPanel head={"Endpoint Edit"}>
               <EndpointEditForm value={value} />
            </AdminPanel>
         </div>
      </div>
   )
}