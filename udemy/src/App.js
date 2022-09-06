import logo from "./logo.svg";
import "./App.css";
//import JustT from "./Components/JustT";
import NavBar from "./Components/NavBar";
import BeforeCourses from "./Components/BeforeCourses";
import CoursesArea from "./Components/CoursesArea";
import CoursesCards from "./Components/CoursesCards";
function App() {
  return (
    <div className="App">
      <NavBar />
      <BeforeCourses />
      <CoursesArea />
    </div>
  );
}

export default App;
