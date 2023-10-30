import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS, 
} from '../actions'

const filter_reducer = (state, action) => {
  if(action.type === LOAD_PRODUCTS){

    // maxPrice로 product들의 가격이 담겨있는 배열을 만든다
    let maxPrice = action.payload.map((product)=>{ 
      return product.price      
    })
    // maxPrice를 최대값으로 재정의한다
    maxPrice = Math.max(...maxPrice) 

    return {
      ...state, 
      all_products:[...action.payload], 
      filtered_products:[...action.payload],

      // initialState안에 있는 filters객체 수정하기
      filters:{...state.filters, max_price: maxPrice, price: maxPrice}
    }      
  }

  if(action.type === SET_GRIDVIEW){
    return {...state, grid_view: true}
  }
  if(action.type === SET_LISTVIEW){
    return {...state, grid_view: false}
  }
  if(action.type === UPDATE_SORT){
    return {...state, sort: action.payload}
  }
  if(action.type === SORT_PRODUCTS){
    const {filtered_products, sort} = state
    let tempProducts = [...filtered_products] // 원본 배열은 항상 보존해주는 것이 좋다
    if(sort === 'price-lowest'){      
      tempProducts.sort((a, b) => a.price - b.price)
    }
    if(sort === 'price-highest'){
      tempProducts.sort((a, b) => b.price - a.price)
    }
    if(sort === 'name-a'){
      tempProducts.sort((a, b) => a.name.localeCompare(b.name))
    }
    if(sort === 'name-z'){
      tempProducts.sort((a, b) => b.name.localeCompare(a.name))
    }
    return {...state, filtered_products: tempProducts}
  }

  // UPDATE_FILTERS
  if(action.type === UPDATE_FILTERS){
    const {name, value} = action.payload
    // if(name === 'text'){
    //   return {...state, filters:{...state.filters, text:value}}
    // }
    return {...state, filters:{...state.filters, [name]:value}}    
  }

  // FILTER_PRODUCTS
  if(action.type === FILTER_PRODUCTS){
    const {all_products} = state
    const {text, category, company, color, price, shipping} = state.filters 
    let tempProducts = [...all_products]

    // text
    if(text){
      tempProducts = tempProducts.filter((product)=>{
        return product.name.startsWith(text)
      })
    }

    // category
    if(category !== 'all'){
      tempProducts = tempProducts.filter((product)=>{
        return product.category === category
      })
    }
    // company
    if(company !== 'all'){
      tempProducts = tempProducts.filter((product)=>{
        return product.company === company
      })
    }
    // color
    if(color !== 'all'){ 
      tempProducts = tempProducts.filter((product)=>{
        return product.colors.includes(color)
      })
    }
    // price
    tempProducts = tempProducts.filter((product)=>{
      return product.price <= price
    })

    // shipping
    if(shipping === true){
      tempProducts = tempProducts.filter((product)=>{
        return product.shipping === true
      })
    }

    return {...state, filtered_products: tempProducts}
  }

  // CLEAR_FILTERS
  if(action.type === CLEAR_FILTERS){
    return {
      ...state,
      filters: {
        ...state.filters,
        text:'',
        company:'all',
        category:'all',
        color:'all',
        price: state.filters.max_price,
        shipping: false,
      }
    }
  }
   
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
