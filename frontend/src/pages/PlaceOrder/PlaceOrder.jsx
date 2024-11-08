// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState} from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {

  const {getTotalCartAmount,token,food_list,cartItems,url}=useContext(StoreContext)

  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    year:"",
    section:"",
    department:"",
    phone:""
  })

  const onChangeHandler = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItem =[];
    food_list.map((item)=>{
      if (cartItems[item._id]>0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItem.push(itemInfo);
        
      }
    })


    let orderData = {
      address:data,
      items:orderItem,
      amount:getTotalCartAmount(), 
    }
    let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}});
    if (response.data.success) {
      const {session_url} = response.data;
      window.location.replace(session_url);
      
    }
    else{
      alert("Failed to place order");
    }

  }
  const navigate = useNavigate();

  useEffect(()=>{
    if (!token) {
      navigate('/cart')
    }
    else if(getTotalCartAmount()===0){
      navigate('/cart')
    }


  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[token])

  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className='multi-fields'>
          <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First name'/>
          <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last name'/>

        </div>
        <input required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='email address' />
        <input required name='year' onChange={onChangeHandler} value={data.year} type="text" placeholder='Year'/>
        <div className='multi-fields'>
          <input required name='section' onChange={onChangeHandler} value={data.section} type="text" placeholder='Section'/>
          <input required name='department' onChange={onChangeHandler} value={data.department} type="text" placeholder='Department'/>

        </div>
        {/* <div className='multi-fields'>
          <input type="text" placeholder='Zip Code'/>
          <input type="text" placeholder='country'/>

        </div> */}
        <input required name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='phone' />



      </div>
      <div className='place-order-right'>
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>RS: {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Charges</p>
              <p>RS: {0}</p>
            </div>
            <hr />

            <div className="cart-total-details">
              <b>Total</b>
              <b>RS: {getTotalCartAmount()+0}</b>
            </div>

          </div>
          <button type='submit' >PROCEED TO PAYMENT</button>
        </div>


      </div>

      
    </form>
  )
}

export default PlaceOrder
