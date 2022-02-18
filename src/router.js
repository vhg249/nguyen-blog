import About from "./container/About";
import Contact from "./container/Contact";
import Home from "./container/Home";
import Layout from "./container/Layout";

const routers = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "",
        element: <Home />,
      },
      {
        index: false,
        path: "contact",
        element: <Contact />,
      },
      {
        index: false,
        path: "about",
        element: <About />,
      },
    ],
  },
];

export default routers;
