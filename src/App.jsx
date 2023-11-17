// stylesheet
import "./App.css";

// react routers
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Playground } from "./pages/playground/Playground";

function App() {

  return (

    <main>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={"Home Page"} />
            <Route path="/playground" element={<Playground/>} />
            <Route path="/search" element={""} />
         </Routes>
        </BrowserRouter>
    </main>
  );
}

export default App;
