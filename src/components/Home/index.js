import './index.css'
import Header from '../Header'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import Footer from '../Footer';

const Home = () => {
    return (
        <div>
          <Header />  
          <div className='home-top-container'>
            <h1 className='home-heading'>DISCOVER OUR PRODUCTS</h1>
            <p className="home-para">Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
          </div>
          <div className='home-detail-container-headers'>
            <div className='home-detail-header-1'>
              <p className='item-para'>3425 ITEMS</p>
              <div className='home-detail-cont'>
                <IoIosArrowBack className='arrow-icons' />
                <button className='hide-button'>HIDE FILTER</button>
              </div>
            </div>
            <div className='home-detail-header-2'>
              <p className='item-para'>RECOMMENDED</p>
              <FaChevronDown className='arrow-icons' />
            </div>
          </div>
          <Footer />
        </div>
    )
}

export default Home