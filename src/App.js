import "./app.scss";
import Layout from "./components/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [contactUsRef, setContactUsRef] = useState(null);

  return (
    <Layout contactUsRef={contactUsRef}>
      <Switch>
        <Route path="/" exact>
          <Home setContactUsRef={(e) => setContactUsRef(e)} />
        </Route>
        <Route path="/products">
          <Products contactUsRef={contactUsRef} />
        </Route>
      </Switch>
      <Footer setContactUsRef={(e) => setContactUsRef(e)} />
    </Layout>
  );
}

export default App;
