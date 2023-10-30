import React from 'react'
import { FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'
import { useCartContext } from '../context/cart_context'

const CartButtons = () => {
  const {closeSidebar} = useProductsContext()
  const {total_items} = useCartContext()

  return <Wrapper className='cart-btn-wrapper'>
    <Link to='/cart' className='cart-btn' onClick={closeSidebar}>      
      <span className='cart-container'>
        장바구니<FaShoppingCart></FaShoppingCart>
        <span className='cart-value'>{total_items}</span>
      </span>
    </Link>
    <button type='button' className='auth-btn'>
      로그인 
    </button>
  </Wrapper>
} 

const Wrapper = styled.div`
  display: grid; 
  grid-template-columns: 120px 70px;
  align-items: center;
  width: 225px; // grid-template-columns을 정하고 width값을 주면 width값 내에서 1fr씩 차지하기 때문에 가운데 정렬이 된 것 처럼 보인다.

  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 16px;
    letter-spacing: var(--spacing);
    display: flex;
    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: red;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 14px;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 16px;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`
export default CartButtons
