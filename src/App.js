import {
   BrowserRouter,
   Routes,
   Route
} from 'react-router-dom';
import Endpoints from './pages/endpoints';
import EndpointEdit from './pages/endpoints/endpoint/edit';
import EndpointNew from './pages/endpoints/endpoint/new';
import EndpointShow from './pages/endpoints/endpoint/show/show';
import Index from './pages/panel';

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/admin" element={<Index />}></Route>
            <Route path="/admin/endpoints" element={<Endpoints />}></Route>
            <Route path="/admin/endpoints/:slug/edit" element={<EndpointEdit />}></Route>
            <Route path="/admin/endpoints/new" element={<EndpointNew />}></Route>
            <Route path="/admin/endpoints/:slug" element={<EndpointShow />}></Route>
            <Route path="/admin/media" element={<Index />}></Route>
            <Route path="/admin/settings" element={<Index />}></Route>
         </Routes>
      </BrowserRouter>
   );
}

export default App;
