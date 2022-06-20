import { default_endpoints } from "../../../services/endpoints/defatuls"
import AdminPanel from "../panel/panel"
import EndpointItem from "./item"


export default function EndpointsPanels() {

   return (
      <div>
         <div className="admin-panels-one">
            <AdminPanel head="Endpointler">
               {default_endpoints.map(endpoint => (
                  <EndpointItem slug={endpoint.slug}>{endpoint.name}</EndpointItem>
               ))}
            </AdminPanel>
         </div>
      </div>
   )
}