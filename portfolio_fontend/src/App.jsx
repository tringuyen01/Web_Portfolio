import NavBar from "./components/NavBar";
import SkillsProjects from "./components/SkillsProjects";
import React from "react";
import Home from "./components/Home";
import Social from "./components/Social";
import Contact from "./components/Contact";
import DisplayFeedback from "./components/admin/DisplayFeedback";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { id } from "./components/admin/Post";
import Post from "./components/admin/Post"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route
            exact path="/"
            element={
              <div>
                <NavBar />
                <Social />
                <Home />
                <SkillsProjects />
                <Contact />
              </div>
            }
          />
          <Route exact path="/admin" element={<DisplayFeedback />}>
            
          </Route>
          <Route exact path={"/admin/"+id} element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>

    // <div>
    //   {loading ? "Loading please wait" : (
    //     (typeof data === "undefined") ? "data undefined" : data.map((item) => <p>{item.desc}</p>)
    //   )}
    // </div>
  );
}
export default App;
//<div>
// {/* <NavBar/>
// <Social/>
//<Home/>
// <SkillsProjects/>
//  <Contact/> */}
//   {/* <DisplayFeedback/> */}
// </div>
