import './index.css'
import Header from '../Header'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import Footer from '../Footer';
import ProductList from '../ProductList';
import { useState } from 'react';

const Home = () => {
  const [showFilter, setShowFilter] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
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
                {showFilter ? <IoIosArrowBack className='arrow-icons' /> : <IoIosArrowForward className='arrow-icons' />}
                <button className='hide-button' onClick={toggleFilter}>{showFilter ? 'HIDE FILTER' :  `SHOW FILTER`}</button>
              </div>
            </div>
            <div className='home-detail-header-2' style={{ position: 'relative', display: 'inline-block' }}>
              <button onClick={toggleDropdown} className='item-para'>RECOMMENDED</button>
              <FaChevronDown className='arrow-icons' />
            </div>
            {isDropdownOpen && (
              <div style={{ position: 'absolute', top: '65%', right: 0, backgroundColor: 'white', border: '1px solid #ccc', boxShadow: '0px 8px 16px rgba(0,0,0,0.2)', zIndex: 1, width: '200px',}}>
                <ul style={{ listStyle: 'none', padding: '10px 0', margin: 0 , }}>
                  <li style={{ padding: '8px 16px', cursor: 'pointer', fontSize: '14px' }}>✔ RECOMMENDED</li>
                  <li style={{ padding: '8px 16px', cursor: 'pointer', fontSize: '14px' }}>NEWEST FIRST</li>
                  <li style={{ padding: '8px 16px', cursor: 'pointer', fontSize: '14px' }}>POPULAR</li>
                  <li style={{ padding: '8px 16px', cursor: 'pointer',fontSize: '14px' }}>PRICE: HIGH TO LOW</li>
                  <li style={{ padding: '8px 16px', cursor: 'pointer', fontSize: '14px' }}>PRICE: LOW TO HIGH</li>
                </ul>
              </div>
            )}
          </div>
          <div className='filter-container'>
          {showFilter && (
              <div style={{ minWidth: '230px', margin: '20px', borderRight: '1px solid #ccc', padding: '10px' }}>
                <div >
                  <input type="checkbox" />
                  <label>CUSTOMIZBLE</label>
                </div>
                <div>
                  <h3>IDEAL FOR</h3>
                  <p>ALL</p>
                  <div>
                  <input type="checkbox" />
                  <label>Men</label>
                  </div>
                  <div>
                  <input type="checkbox" />
                  <label>Women</label>
                  </div>
                  <div>
                  <input type="checkbox" />
                  <label>Baby & Kids</label>
                  </div>
                </div>
                <div>
                <h3>OCCASION</h3>
                <p>ALL</p>
                </div>
                <div>
                <h3>WORK</h3>
                <p>ALL</p>
                </div>
                <div>
                <h3>FABRIC</h3>
                <p>ALL</p>
                </div>
                
              </div>
            )}
          <ProductList />
          </div>
          <Footer />
        </div>
    )
}

export default Home