import { BrowserRouter,Routes,Route } from "react-router-dom";
import User from "./Components/User";
import Create from "./Components/Create";
import Edit from "./Components/Edit";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
 
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/"element={<User/>}/>
    <Route path="/create"element={<Create/>}/>
    <Route path="/Edit/:id"element={<Edit/>}/>
   </Routes>
   </BrowserRouter>
  );
}


export default App;
