import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";

function App() {
  return (
    <div className="bg-neutral-200  px-20">
      <Navbar/>
      <Header/>
      <main>
        <section>
          <h2 className="text-3xl font-[Playfair-bold]">About Me</h2>
        </section>
      </main>
    </div>
  );
}

export default App;
