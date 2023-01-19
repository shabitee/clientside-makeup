import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllDataApi from "./components/AllDataApi";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Products from "./components/Products";
import About from "./components/About";
import MyFavorites from "./components/MyFavorites";
import Profile from "./login/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./login/Login";




function App() {
const { isAuthenticated } = useAuth0();

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path ="/about" element = {<About/>}/>
        <Route exact path ="/fav" 
        element = { isAuthenticated ? <MyFavorites/>:<Login/>}
        />
        <Route exact path ="/profile" element = {<Profile/>}/>
        <Route exact path ="/" element = {<AllDataApi/>}/>
      </Routes>
      {/*<Products/>*/}
      <Footer/>
      </BrowserRouter>
    </>

    
  );
}

export default App;
