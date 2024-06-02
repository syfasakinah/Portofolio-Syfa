import "./App.css";
import foto1 from "./assets/foto1.jpeg";

const App = () => {
  return (
    <div>
      <section className=" rounded-b-full text-5xl font-bold h-screen bg-yellow-200 from-red-400 items-center justify-start object-left-top text-center text-3xlmp-12 md:p-16 xl:p-20 space-y-8">
      <div className="flex w-full justify-center mt-5">
        <img className="object-cover rounded-full h-60 w-60" src={foto1} alt="foto sipa" />
      </div>
        <h1>Hello I'm Syfa Sakinah, Im' a Fullstack Developer!</h1>
      <div className="bg-yellow-500 font-bold p-5 rounded-full place-content-between w-80 h-80 mx-auto text-base">
        <div className="mt-10">
        <h2>ABOUT ME</h2>
        <p>
          "I am passionate about building excellent software that improves the
          lives of those around me. I specialize in creating software for
          clients ranging from individuals and small-businesses all the way to
          large enterprise corporations."
        </p>

        </div>
      </div>
      </section>
    </div>
  );
};

export default App;
