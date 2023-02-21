import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../page/Login";

export const Router = () => {
    return (
        <BrowserRouter>
           <Routes>
                <Route path="/" element={<Login />} />
           </Routes>
        </BrowserRouter>
    );
}