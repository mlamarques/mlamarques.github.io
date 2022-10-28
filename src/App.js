import { useEffect, useRef, useState } from 'react'
import './App.css';

export default function App() {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  console.log('isVisible: ', isVisible)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries
      setIsVisible(entry.isIntersecting)
    })
    observer.observe(ref.current)
  }, [])

  return (
    <div className="App">
      <h1>Hi there</h1>

      <section className="show">
        <h1>Hi mom</h1>
        <p>This is a website</p>
      </section>

      <section ref={ref} className={isVisible ? 'show' : 'hidden'}>
        <div >
          <h2>These are some projects</h2>
          <p>
            The things you end up owning you. Its ok after losing end asd you will
            know what you got back
          </p>
        </div>
        
      </section>

      <section className='hidden'>
        <h2>Its ok to be ok</h2>
      </section>
    </div>
  );
}
