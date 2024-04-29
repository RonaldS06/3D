import { Canvas } from "@react-three/fiber";
import HomeScene from "./components/scenes/HomeScene";

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
        shadows
        camera={{ position: [0, 30, 80], fov: 15 }}
      >
        <HomeScene />
      </Canvas>
    </>
  );
}

export default App;
