import "./App.css";
import TermekekAdmin from "./components/admin/TermekekAdmin";
import TermekUrlap from "./components/admin/TermekUrlap";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>FakeStore</h1>
      </header>
      <section>
        <TermekUrlap/>
      </section>
      <article>
        
          <TermekekAdmin />
      </article>
    </div>
  );
}

export default App;
