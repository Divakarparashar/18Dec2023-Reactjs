import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import Footer from './component/footer';
import Aside from './component/aside';
import Section from './component/section';
function App() {
  return (
    <>
      <Header/>
      <main>
        <Aside/>
        <Section/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
