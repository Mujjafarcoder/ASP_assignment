import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashbord from "./Pages/Dashbord";
import Login from "./Pages/Login";
import Scandetails from "./Pages/Scandetails";
import Register from "./Pages/Register";




let projectRoutes=(
   
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Register/>}/>
            <Route path="/dashboard" element={<Dashbord/>}/>
            <Route path="/scandetails/:id" element={<Scandetails/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    </BrowserRouter>
   )    

export default projectRoutes;