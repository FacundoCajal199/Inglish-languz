import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/common/Banner'
import Headline from './components/Headline'
import Presents from './components/Presents';
function App() {
  
  return (
    <> 
     <Banner></Banner>
    <section className='mainSection'>
<Headline></Headline>
<Presents></Presents>
    </section>
    </>
  )
}

export default App
