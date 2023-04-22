import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import About from "./Components/About";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Header />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
