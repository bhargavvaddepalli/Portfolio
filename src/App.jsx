import "./App.css"
import { useState } from "react"
import galaxyVideo from "./assets/galaxy.mp4"
import WebTrustLogo from "./assets/webtrust-logo.png"
import Layout from "./components/Layout"
import ScrollingText from "./components/ScrollingText"
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
import Contact from "./components/Connect"
import Skills from "./components/Skills"

const App = () => {
  const [videoLoaded, setVideoLoaded] = useState(false)

  return (
    <div className="app-container">
      {/* Loading Screen */}
      {!videoLoaded && (
        <div className="loading-screen">
          <div className="loading-content">
            <img src={WebTrustLogo} alt="WEBTRUST" className="loading-logo" />
            <div className="loading-bar-container">
              <div className="loading-bar" />
            </div>
            <p className="loading-text">Loading Experience...</p>
          </div>
        </div>
      )}

      {/* Background Video - Fixed position */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
        onCanPlayThrough={() => setVideoLoaded(true)}
        onLoadedData={() => setVideoLoaded(true)}
      >
        <source src={galaxyVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Container - Scrollable */}
      <div className="content-container" style={{ opacity: videoLoaded ? 1 : 0, transition: "opacity 0.6s ease" }}>
        <Layout>
          <div className="relative z-10">
            <ScrollingText />
            <AboutMe />
            <Skills />
            <Projects />
            <Contact/>
          </div>
        </Layout>
      </div>
    </div>
  )
}

export default App
