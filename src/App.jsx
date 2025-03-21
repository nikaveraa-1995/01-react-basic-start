import Header from './components/Header';
import WayToTeach from './components/WayToTeach';
import Button from './components/Button/Button';
import { ways } from './data';

export default function App() {
  let content = 'Click the button';

  function handlerClick(type) {
    console.log('button clicked', type);
    content = type;
  }

  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Our approach to learning</h3>

          <ul>
            <WayToTeach
              title={ways[0].title}
              description={ways[0].description}
            />

            {/* Сокращенный вариант */}
            <WayToTeach {...ways[1]} />
            <WayToTeach {...ways[2]} />
            <WayToTeach {...ways[3]} />
          </ul>
        </section>
        <section>
          <h3>What makes us different from others</h3>

          <Button onClick={() => handlerClick('way')}>Аpproach</Button>
          <Button onClick={() => handlerClick('easy')}>Availability</Button>
          <Button onClick={() => handlerClick('program')}>Concentration</Button>

          <p>{content}</p>
        </section>
      </main>
    </div>
  );
}
