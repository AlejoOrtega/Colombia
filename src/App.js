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
          <p>Colombia is one of the world's seventeen megadiverse countries; it has the second-highest level of biodiversity in the world. Its territory encompasses Amazon rainforest, highlands, grasslands and deserts. It is the only country in South America with coastlines and islands along both the Atlantic and Pacific oceans.</p>
        </section>

        <section>
          <h2>Places to go!</h2>
          <div>
            <h3>Cartagena</h3>
            <div className='place-content'>
              <img src='https://wallpapercave.com/wp/wp3350867.jpg' alt='Cartagena Imagen'/>
              <p>Cartagena is the crown jewel of Colombia's Caribbean coast and one of the best-preserved colonial destinations in the Americas. Take a stroll through the historic walled city, and you may feel as if you've stepped back in time to a different era.</p>
            </div>
          </div>
          <div>
            <h3>Medellin</h3>
            <div className='place-content'>
              <p>Bogotá might be the Colombian capital, but it's the smaller and more manageable city of Medellin that tends to capture the hearts of visitors. Medellin was dubbed the most dangerous city in the world in the early 1990s, but a quarter of a century later, it has earned a reputation for something entirely different: innovation.</p>
              <img src='https://wallpapercave.com/wp/wp3925544.jpg' alt='Medellin Imagen'/>
            </div>
          </div>
          <div>
            <h3>Eje Cafetero</h3>
            <div className='place-content'>
              <img src='https://media.traveler.es/photos/61376876c6202df75915fbda/16:9/w_3728,h_2097,c_limit/157286.jpg' alt='Eje Cafetero Imagen'/>
              <p>The world's third-largest producer of coffee beans, Colombia is a fantastic country for tastings and tours. The vast majority of production takes place in the subtropical Andean hills west of Bogota between the small cities of Armenia, Pereira, and Manizales. This region, known as the Eje Cafetero (or Coffee Axis), is home to a growing number of coffee plantations that have opened up their operations to the public in recent years for tours, tastings, and lavish farm stays.</p>
            </div>
          </div>
          <div>
            <h3>Leticia</h3>
            <div className='place-content'>
              <p>Picture the Amazon, and Colombia may not be the first country to come to mind – which is odd, because about a third of the nation is blanketed in its thick (and often impenetrable) jungles. The capital of the vast Amazon Basin is the small frontier town of Leticia, which sits along the banks of the mighty Amazon River, right where Colombia bumps up against Brazil and Peru.</p>
              <img src='https://i0.wp.com/www.amazonascolombia.info/wp-content/uploads/2021/07/El-delfin-rosado-una-criatura-extraordinaria.jpg?fit=1000%2C536&ssl=1' alt='Eje Cafetero Imagen'/>
            </div>
          </div>
          <div>
            <h3>Tayrona National Natural Park</h3>
            <div className='place-content'>
              <img src='https://i.ytimg.com/vi/3ZZkdeEfXrk/maxresdefault.jpg' alt='Eje Cafetero Imagen'/>
              <p>You'll find some of the best beaches in Colombia within the protected Tayrona National Natural Park, which is known for its palm-shaded coves and crystal-clear coastal lagoons. Most beaches are set against the dramatic mountains of the Sierra Nevada de Santa Marta, whose rainforested hills make for a great side trip on any beach vacation.</p>
            </div>
          </div>
        </section>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
