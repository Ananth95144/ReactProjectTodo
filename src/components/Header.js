import { Link } from 'react-router-dom'
import Logo from './Assets/logo.png'
const Header = () => {
  return (
      <div>Header
          <div className='logo'>
              <img src={Logo} height='100px' width='200px'></img>
          </div>
          <div className='nav'>
              <ul className='list'>
                  <Link to='./'><li>Home</li></Link>
                  <Link to='/about'><li>About</li></Link>
                  <Link to='/contact'><li>Contact</li></Link>
                <Link to='/todo'><li>Todo</li></Link>
                  
              </ul>
          </div>
    </div>
  )
}

export default Header