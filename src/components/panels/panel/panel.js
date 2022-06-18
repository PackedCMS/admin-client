


export default function AdminPanel({ head, children }) {

   return (
      <div className="admin-panel">
         <div className="admin-panel-head">
            {head}
         </div>
         <div className="admin-panel-content">
            {children}
         </div>
      </div>
   )
}