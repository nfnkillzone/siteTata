import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "../pages/Home";
import Downloads  from "../pages/Downloads";

export default function Router(){

    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/downloads" element={<Downloads/>}/>
        </Routes>
        </BrowserRouter>
    )
}