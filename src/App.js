import logo from "./logo.svg";
import "./App.css";
import Header from "./components/layouts/Header";
import Landing from "./components/layouts/Landing";
import Footer from "./components/layouts/Footer";
import { BrowserRouter } from "react-router-dom";
import Routers from "./components/routers/Routers";
import { Provider } from "react-redux";
import store from "./redux/store";
import { useEffect } from "react";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./redux/action/authAction";

function App() {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());
  }, []);
  const appName = "KHUpgradeDevConnector";
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Header appName={appName}></Header>
          <Routers></Routers>
          <Footer></Footer>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
