import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import plant from '../assets/plant.png'
import stand from '../assets/stand.png'

const Hero = () => {
  return <Wrapper className='section-center'>
    <article className='content'>
      <div className='description'>
        <h1>
          <span>글로리가구</span>와 함께<br></br>
        </h1>          
        <h2>  
          당신만의 공간을 <br></br>
          디자인 해보세요
        </h2>
        <p>글로리가구 전 지점에서 가을 신상 할인 및 사은품 증정 이벤트를 진행합니다.
          가까운 글로리가구 매장에서 고퀄리티의 신상가구를
          이벤트 할인가로 만나보세요!
        </p>
        <h5>*할인행사는 11월 30일까지 진행합니다.</h5>
        <Link to='/products' className='btn hero-btn'>둘러보기</Link>
      </div>
      
    </article>
    <article className='img-container'>
      <img src={plant} alt="table" className='main-img' />
      <img src={stand} alt="workingman" className='accent-img' />
    </article>

  </Wrapper> 
} 

const Wrapper = styled.section`
  max-height: 80vh;
  display: grid;
  margin: 0 auto;
  place-items: center;

  .description{
    margin-top: 100px;
  }

  .section-center{
    margin: 0 auto;
  }

  .img-container {
    display: none;
  }
 
  h5{
    color: var(--clr-red-dark);
    margin-bottom: 20px;
  }

  span{
    color: var(--clr-primary-4);
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-4);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr auto;
    gap: 8rem;
    h1, h2 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .description{
    margin-right: 200px;
    margin-top: 0;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 400px;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 300px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`

export default Hero
