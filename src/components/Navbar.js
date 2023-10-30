import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo3.png'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import CartButtons from './CartButtons'
import { useProductsContext } from '../context/products_context'

const Nav = () => {
  const {openSidebar} = useProductsContext()
  return <NavContainer><div className='nav-center'>
    <div className="nav-header">
      <Link to='/'>
        <img src={logo} alt="" />
      </Link>
      <button type='button' className='nav-toggle' onClick={openSidebar}>
        <FaBars></FaBars>
      </button>
    </div>
    <ul className='nav-links'>
      {links.map((link)=>{
        const {id, text, url} = link;
        return (
          <li key={id}>
            <Link to = {url}>{text}</Link>
          </li>
        ) 
      })}
    </ul>
    <CartButtons></CartButtons>
  </div>
</NavContainer> 
}

const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 10;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 100px;
      height: 80px;
      margin-top: 5px;      
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: end;
      margin-right: 30px;
     
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`

export default Nav