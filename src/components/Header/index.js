import './index.css'
import Logo from '../../assets/Logo.png'
import { FiSearch } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import { TbShoppingBag } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa6";


const Header = () => {
    return (
        <div className='header-container'>
            <div className='header-container-div-1'>

            </div>
            <div className='header-container-div-2'>
                <div className='header-div-1'>
                    <img src={Logo} className='logo' alt="logo" />
                    <>
                    <h1 className='logo-heading'>LOGO</h1>
                    </>
                    <div className='icons-section'>
                        <FiSearch className='icons' />
                        <GoHeart className='icons' />
                        <TbShoppingBag className='icons' />
                        <CgProfile className='icons' />
                        <span className='span'>ENG <FaAngleDown /></span>
                    </div>
                </div>
                <ul className='header-list'>
                    <li className='header-list-items'>SHOPS</li>
                    <li className='header-list-items'>SKILLS</li>
                    <li className='header-list-items'>STORIES</li>
                    <li className='header-list-items'>ABOUT</li>
                    <li className='header-list-items'>CONTACT US</li>
                </ul>
            </div>
        </div>
    )
}

export default Header