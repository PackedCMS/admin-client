import {
   BrowserRouter,
   Routes,
   Route
} from 'react-router-dom';
import Endpoints from './pages/endpoints';
import Index from './pages/panel';

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/admin" element={<Index></Index>}></Route>
            <Route path="/admin/endpoints" element={<Endpoints></Endpoints>}></Route>
            <Route path="/admin/media" element={<Index></Index>}></Route>
            <Route path="/admin/settings" element={<Index></Index>}></Route>

         </Routes>
      </BrowserRouter>  
   );
}

export default App;
