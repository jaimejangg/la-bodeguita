import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Header from "./components/Header";
import AtencionAlCliente from "./components/AtencionAlCliente";
import Mascotas from "./components/Mascotas";
import CallToAction from "./components/CallToAction";
import Sucursales from "./Sucursales";
import Footer from "./components/Footer";
import Contacto from "./components/Contacto";
import Precios from "./components/Precios";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Hero />
          <Header />
          <Mascotas />
          <CallToAction />
          <AtencionAlCliente />
          <Sucursales />
          <Footer />
        </Route>
        <Route exact path="/contacto">
          <Contacto />
        </Route>
        {/* <Route exact path="/precios">
          <Precios />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
