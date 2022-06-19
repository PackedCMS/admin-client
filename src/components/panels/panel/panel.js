


export default function AdminPanel({ head, children }) {

   return (
      <div className="admin-panel">
         <div className="admin-panel-head">
            {head}
         </div>
         <div style={{ backgroundColor: "white", height: 2, width: "100%", margin: 5, marginLeft: 0 }}></div>
         <div className="admin-panel-content">
            {children}
         </div>
      </div>
   )
}