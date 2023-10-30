import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const PageHero = ({title, product}) => {
  return <Wrapper>
    <div className="section-center">
      <div className='hero'>
        <Link to='/'>홈 </Link> 
        {product && <Link to='/products'>&gt; 전체상품 </Link>}
         &gt; {title}
      </div>
    </div>
  </Wrapper>
}

const Wrapper = styled.section`
  background: var( --clr-primary-8);
  margin-bottom: 40px;
  width: 100%;
  min-height: 20px;
  display: flex;
  align-items: center;
  color: var(--clr-primary-1);
  
  a {
    color: var(--clr-primary-3);    
    transition: var(--transition);
    font-size: 16px;

  }
  a:hover {
    color: var(--clr-primary-1);
  }

  .hero{
    
    padding-top: 5px;
    padding-bottom: 5px;
    color: var(--clr-primary-2);
  }


`

export default PageHero
