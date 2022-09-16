import myImg from '../../assets/img.jpg'
import './Header.scss'
const Header =() => {
    return <header>
        <figure className='header__box'>
            <img src={myImg} alt="Joel" className='className='header__img/>
        </figure>
        <p>Country</p>
    </header>
}

export default Header