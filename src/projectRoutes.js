import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashbord from "./Pages/Dashbord";
import Login from "./Pages/Login";
import Scandetails from "./Pages/Scandetails";




let projectRoutes=(
   
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashbord/>}/>
            <Route path="/scandetails/:id" element={<Scandetails/>}/>
        </Routes>
    </BrowserRouter>
   )    

export default projectRoutes;