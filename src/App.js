import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routers from "./router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routers.map((item, index) => (
            <Route path={item.path} element={item.element}>
              {item.children && item.children.map((child, i) => (
                <Route index={child.index} path={child.path} element={child.element} />
              ))}
            </Route> 
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
