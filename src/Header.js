import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

const Header = () => {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link to='/'>
            <img className='header-logo' src='https://pngimg.com/uploads/amazon/amazon_PNG25.png' alt='' /></Link>

            <div className='header-search'>
                <input className='header-searchInput' type='text' />
                <SearchIcon className='header-searchIcon' />
            </div>

            <div className='header-nav'>
                <Link to={!user && '/login'} className='header-option'>
                    <div onClick={handleAuthentication} className='header-option'>
                    <span className='header-optionLineOne'>Hello {user ? user?.email : 'Guest'}</span>
                    <span className='header-optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                

                <div className='header-option'>
                    <Link to='/' className='header-option'>
                    <span className='header-optionLineOne'>Returns</span>
                    <span className='header-optionLineTwo'>& Orders</span>
                    </Link>    
                </div>

                <div className='header-option'>
                    <Link to='/' className='header-option'>
                    <span className='header-optionLineOne'>Your</span>
                    <span className='header-optionLineTwo'>Prime</span>
                    </Link>
                </div>

                <div className='header-optionBasket'>
                    <Link to='/checkout' className='header-optionBasket'>
                    <ShoppingBasketIcon />
                    </Link>
    <span className='header-optionLineTwo header-basketCount'>{basket?.length}</span>
                </div>
            </div>
        </div>
    )
}

export default Header
