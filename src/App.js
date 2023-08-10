import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/styles/globalStyle";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import createRoutePath from "./routes/createRoutePath";
function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          {createRoutePath.map((route, index) => (
            <Route
              key={index}
              exact={route.exact}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
