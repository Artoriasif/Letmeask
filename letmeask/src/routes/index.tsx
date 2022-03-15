import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Home } from "../pages/Home";
import { NewRoom } from "../pages/NewRoom";

export const AppRouter = () => {
    return(
         <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/rooms/new" element={<NewRoom/>}/>
            </Routes>
         </BrowserRouter>
    );
};