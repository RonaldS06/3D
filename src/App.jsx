import { Canvas } from "@react-three/fiber";
import HomeScene from "./components/scenes/HomeScene";
import Intro from "./components/scenes/Intro";

function App() {
  return (
    <>
      <main className="mainSection">
        <section className="text-light hero">
          <h1>Web 3D con React & Three JS</h1>
          <p>Por Ronald Santamaria - @ronaldsp7</p>
        </section>
      </main>
      <Canvas
        className="canvas"
        concurrent
        gl={{ alpha: false }}
        pixelRatio={[1, 1.5]}
        camera={{ position: [10, 3, 100], fov: 15 }}
      >
        <HomeScene />
        <Intro />
      </Canvas>
    </>
  );
}

export default App;
