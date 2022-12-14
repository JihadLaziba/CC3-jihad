
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { getUser } from "./redux/UserSlice";
import { getPosts } from "./redux/PostSlice";
import { BrowserRouter as Router } from "react-router-dom";
import Accueil from "./Components/Acceuil";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Router>
      <div className="App">
        <Accueil />
      </div>
    </Router>
  );
}

export default App;

