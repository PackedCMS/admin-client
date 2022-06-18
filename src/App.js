import {
   BrowserRouter,
   Routes,
   Route
} from 'react-router-dom';
import Index from './pages/index';

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/admin" element={<Index></Index>}></Route>
         </Routes>
      </BrowserRouter>  
   );
}

export default App;
