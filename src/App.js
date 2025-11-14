import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Home from './pages/Home.js'
import About from './pages/About.js'
import Contact from './pages/Contact'
import Todo from './pages/Todo.js'
import { BrowserRouter as Router,Routes,Route}from 'react-router-dom' 
function App() {
  return (
    <div className="App">
      <Router>
          <div>
        <Header/>
        </div>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/todo' element={<Todo />} />
        </Routes>
        <div>
          <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
