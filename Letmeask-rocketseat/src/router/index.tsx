import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Home } from "../pages/Home";
import { NewRoom } from "../pages/NewRoom";
import { AuthContextProvider } from "../contexts/AuthContext";

export const AppRouter = () => {
    return(
         <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms/new" element={<NewRoom />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
    );
};