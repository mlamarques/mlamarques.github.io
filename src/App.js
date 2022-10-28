import './App.css';

export default function App() {

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((element) => observer.observe(element));

  return (
    <div className="App">
      <h1>Hi there</h1>

      <section className="hidden">
        <h1>Hi mom</h1>
        <p>This is a website</p>
      </section>

      <section className="hidden">
        <h2>These are some projects</h2>
        <p>
          The things you end up owning you. Its ok after losing end asd you will
          know what you got back
        </p>
      </section>

      <section className="hidden">
        <h2>Its ok to be ok</h2>
      </section>
    </div>
  );
}
