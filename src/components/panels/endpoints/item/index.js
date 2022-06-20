



export default function EndpointItem({ slug, children }) {

   return (
      <div className="endpoint-item">
         <div className="endpoint-item-name">
            {children}
         </div>
         <div className="enpoint-items-action">
            <div className="edit"></div>
         </div>
      </div>
   )
}