import myImg from '../../assets/img.jpg'
import './Header.scss'
const Header =() => {
    return <header>
        <figure className='header__box'>
            <img src={myImg} alt="Joel" className='header__img'/>
        </figure>
        <p>Countries Details</p>
    </header>
}

export default Header