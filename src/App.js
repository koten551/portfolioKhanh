import "./css/grid.css"
import "./css/base.css"
import Header from "./Components/Header/Header"
import Body from "./Components/Body/Body"
import Footer from "./Components/Footer/Footer"
import FixedBar from "./Components/FixedBar/FixedBar"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import particlesConfig from "./configParticles"
function App() {

  const particlesInit = async (main) => {
    console.log(main)
    await loadFull(main)
  }
  const particlesLoaded = (container) => {
    console.log(container)
  }
  return (
    <>
      <div className="grid">
        <Header />

        <Body />

        <Footer />

        <FixedBar/>

        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesConfig}
        />
      </div>
    </>
  )
}

export default App
