import { Link } from "react-router-dom";



export default function AdminPanel({ head, right, children }) {

   return (
      <div className="admin-panel">
         <div style={{ display: "grid", gridTemplateColumns: "1fr auto" }}>
            <div className="admin-panel-head">
               {head}
            </div>
            {right ? (
               <Link to={right.to} className="admin-panel-head-right">
                  {right.name} <i className="fa fa-plus"></i>
               </Link>
            ) : (<></>)}
         </div>
         <div style={{ backgroundColor: "white", height: 2, width: "100%", margin: 5, marginLeft: 0 }}></div>
         <div className="admin-panel-content">
            {children}
         </div>
      </div>
   )
}