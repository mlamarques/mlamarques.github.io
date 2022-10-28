import { useInView } from 'react-intersection-observer';
import './App.css';

export default function App() {
  const [ref, isVisible] = useInView()
  const [refOk, isOkVisible] = useInView()
  console.log('isVisible: ', isVisible)

  return (
    <div className="App">
      <h1>Hi there</h1>

      <section className="show">
        <h1>Hi mom</h1>
        <p>This is a website</p>
      </section>

      <section >
        <div ref={ref} className={isVisible ? 'show' : 'hidden'}>
          <h2>These are some projects</h2>
          <p>
            The things you end up owning you. Its ok after losing end asd you will
            know what you got back
          </p>
        </div>
        
      </section>

      <section ref={refOk} className={isOkVisible ? 'show' : 'hidden'}>
        <h2>Its ok to be ok</h2>
      </section>
    </div>
  );
}
