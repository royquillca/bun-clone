import Nav from './components/Nav'
import Hero from './components/Hero';

function App() {
  return (
    <div className='w-full bg-[#000]'>
      <div className='max-w-[900px] m-auto h-[500px]'>
        <Nav />
        <Hero />
      </div>
    </div>
  );
}

export default App;
