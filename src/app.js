import "./App.css";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { layoutRouter, nonLayoutRouter } from "./router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const navBar = [
  {
    name: "User Create",
    path: "user/create",
  },
  {
    name: "User List",
    path: "user/index",
  },
];
const Layout = () => (
  <>
    <div className="sidenav">
      {navBar.map((ele, index) => (
        <Link key={index} to={ele.path}>
          {ele.name}
        </Link>
      ))}
    </div>

    <div className="main">
      <Outlet />
    </div>
  </>
);

function App() {
  return (
    <>
      <ToastContainer />

      <Routes>
           {nonLayoutRouter.map((ele, index) => (
        <Route key={index} path={ele.path} element={ele.element} />
           )) 
           }
        <Route key="not-found" element={<h1>404</h1>} />

        <Route element={<Layout />}>
          {layoutRouter.map((ele, index) => (
            <Route key={index} path={ele.path} element={ele.element} />
          ))
          }
        </Route>
      </Routes>
    </>
  );
}

export default App;
