import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Colombia</h1>
        <nav>
          <a>Home</a>
          <a>About</a>
          <a>Places</a>
        </nav>
      </header>
      <main>
        <section>
          <h2>About Colombia</h2>
          <p>Colombia is one of the world's seventeen megadiverse countries; it has the second-highest level of biodiversity in the world.[15] Its territory encompasses Amazon rainforest, highlands, grasslands and deserts. It is the only country in South America with coastlines and islands along both the Atlantic and Pacific oceans.</p>
        </section>

        <section>
          <h2>Places to go!</h2>
          <div>
            <h3>Cartagena</h3>
            <p>Cartagena is the crown jewel of Colombia's Caribbean coast and one of the best-preserved colonial destinations in the Americas. Take a stroll through the historic walled city, and you may feel as if you've stepped back in time to a different era.</p>
          </div>
        </section>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
