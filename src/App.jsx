
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Sidebar1 from "./components/Sidebar1";


const App = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <Sidebar1 />
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default App;
