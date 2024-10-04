import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Question from "./pages/Question";
import Result from "./pages/Result";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "question",
        element: <Question />,
      },
      {
        path: "result",
        element: <Result />,
      },
    ],
  },
]);

const GlobalStyle = createGlobalStyle`
${reset}
@font-face {
  font-family: "SimKyungha";
  src: url("/fonts/SimKyungha.ttf") format("truetype");
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul,li {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

body {
  font-family: "SimKyungha";
  background: url("https://i.pinimg.com/564x/ba/d5/01/bad5015e95b15cc3e2465d89d055f63c.jpg") center/cover no-repeat;
  height: 100vh;
}
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
