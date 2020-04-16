import './scss/app.scss'
import Header from './components/Header';
import User from './components/User';


const app = async () => {
    document.querySelector('#header').innerHTML = Header();
    document.querySelector('#user').innerHTML = await User();
}

// Init app
app();