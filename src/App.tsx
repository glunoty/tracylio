import About from "./components/layout/About";
import Links from "./components/layout/Links";
import Navbar from "./components/layout/Navbar";
import Projects from "./components/layout/Projects";

function App() {
  return (
    <div className="flex flex-col gap-y-16 max-w-4xl mx-auto px-6 py-8">
      <Navbar />
      <main className="flex flex-col gap-y-16">
        <About />
        <Projects />
        <Links />
      </main>
    </div>
  );
}

export default App;
