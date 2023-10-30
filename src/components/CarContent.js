import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import CartColumns from './CartColumns'
import CartItem from './CartItem'
import CartTotals from './CartTotals'

const CartContent = () => {
  const {cart, clearCart} = useCartContext()
  return <Wrapper className='section section-center'>
    {/* cart 제목 */}
    <CartColumns></CartColumns>

    {/* cart 목록 */}
    {
      cart.map((item)=>{
        return <CartItem key={item.id} {...item}></CartItem>
      })
    }
    <hr />
    {/* Link 영역 */}
    <div className="link-container">
      <Link to='/products' className='link-btn'>
        이어서 쇼핑하기
      </Link>
      <button type='button' className='link-btn clear-btn'
      onClick={() => clearCart()}
      >
        장바구니 비우기
      </button>
    </div>
    {/* cart 총 가격 */}
    <CartTotals></CartTotals>
  </Wrapper>
}

const Wrapper = styled.section`
  padding-top: 10px;
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }
`
export default CartContent
