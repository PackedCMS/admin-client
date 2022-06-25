import { Link } from "react-router-dom";
import { default_endpoints } from "../../../../services/endpoints/defatuls";




export default function EndpointItem({ slug, children }) {

   return (
      <div className="endpoint-item">
         <div className="endpoint-item-name">
            {children}
         </div>
         <div className="enpoint-action-items">
            <Link to={`/admin/endpoints/${slug}/edit`} className="endpoint-action-item">
               Edit <i class="fa-solid fa-pencil"></i>
            </Link>
            <Link to={`/admin/endpoints/${slug}`} className="endpoint-action-item">
               Show <i class="fa-solid fa-list"></i>
            </Link>
            {!default_endpoints.map(a => a.slug).includes(slug) ? (
               <Link to={`/admin/endpoints/${slug}/delete`} className="endpoint-action-item">
                  Delete <i class="fa-solid fa-trash"></i>
               </Link>
            ) : (<></>)}
         </div>
      </div>
   )
}