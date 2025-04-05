import "./App.css"
import galaxyVideo from "./assets/galaxy.mp4"
import Layout from "./components/Layout"
import Greeting from "./components/ScrollingText"
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

const App = () => {
  return (
    <div className="app-container">
      {/* Background Video - Fixed position */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src={galaxyVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Container - Scrollable */}
      <div className="content-container">
        <Layout>
          <div className="relative z-10">
            {/* <h1 className="text-5xl font-bold text-center mt-20">Welcome to My Portfolio</h1> */}
            <Greeting />
            <AboutMe />
            <Projects />
            <Contact/>
          </div>
        </Layout>
      </div>
    </div>
  )
}

export default App

