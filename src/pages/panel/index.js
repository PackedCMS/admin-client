import AdminPanels from "../../components/panels";
import Sidebar from "../../components/sidebar";


export default function Index() {

    return(
      <div className="main-container">
         <Sidebar></Sidebar>
         <AdminPanels></AdminPanels>
      </div>
    )
} 
