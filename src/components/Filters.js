import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import { getUniqueValues } from '../utils/helpers'

const Filters = () => {
  const {
    filters:{ text, company, category, shipping},
    updateFilters, 
    clearFilters, 
    all_products,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, 'category')
  const companies = getUniqueValues(all_products, 'company')
  
  return <Wrapper>
    <div className="content">
      <form onSubmit={(e)=>e.preventDefault()}>
        {/* search */}
        <div className="form-control">
          <input 
          type="text" 
          name='text' 
          placeholder='검색' 
          className='search-input'
          value={text}
          onChange={updateFilters}
          />
        </div>
        {/* search */}

        {/* category */}
        <div className="form-control">
          <h5>카테고리</h5>
          <div>
            {categories.map((cate, i)=>{
              return <button key={i} 
              onClick={updateFilters}
              type='button'
              name='category'
              className=
              {`${category === cate ? 'active':null}`}
              >{cate}</button>
            })}
          </div>
        </div>
        {/* category */}

      {/* companies */}
      <div className="form-control">
        <h5>브랜드</h5>
        <select name="company" value={company} onChange={updateFilters} className='company'>
          {companies.map((com, i)=>{
            return (
              <option key={i} value={com}>{com}</option>
            )
          })}
        </select>
      </div>

      {/* shipping */}
      <div className="form-control shipping">
        <label htmlFor="shipping">무료배송</label>
        <input type="checkbox" name="shipping" id="shipping" 
        onChange={updateFilters} checked={shipping}/>
      </div>
      {/* shipping */}
      </form>
      
      <button type='button' className='clear-btn' onClick={clearFilters}>필터 제거</button>
      
    </div>
  </Wrapper>
}

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 0.5rem;
    font-size: 1rem;
    max-width: 200px;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`

export default Filters
