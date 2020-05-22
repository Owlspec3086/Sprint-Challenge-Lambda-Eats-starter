import React from 'react';
 
// Selection of pizza toppings
function Pizza(props) {
 //destructuring so I wont have to add {props.}
 const { changeValues, formvalues, checked, submitHandler } = props;
 
 return (
   <form onSubmit={submitHandler}>
     {/* Customer Name Here */}
 
     <h4>Order Here</h4>
     <label>Name</label>
       <input
         name='name'
         type='text'
         formvalues={formvalues.name}
         // onInputChange={onInputChange}
         onChange={changeValues}
       />
 
     {/* Dropdown for Size */}
 
     <h4>Choice of Size:</h4>
     <label>Size:</label>
       <select
         name='size'
         formvalues={formvalues.name}
         onChange={changeValues}
       >
         <option>Please Select A Size</option>
         <option value='small'>Small</option>
         <option value='Medium'>Medium</option>
         <option value='Large'>Large</option>
       </select>
 
     {/* //////////////////////////////////Toppings//////////////////////// */}
 
     <h4> Choose a Topping</h4>
     <label>Onions</label>
       <input
         name='Onions'
         checked={checked}
         type='checkbox'
         // value='specialChoice'
         value={formvalues.toppings.onions}
       />
 
     <label>Chicken</label>
       <input
         name='Chicken'
         checked={checked}
         type='checkbox'
         value={formvalues.toppings.chicken}
         />
 
     <label>Cheese</label>
         <input
         check={checked}
         name='Cheese'
         type='checkbox'
         value={formvalues.toppings.cheese}
       />
 
     <label>Hawaiian</label>
       <input
         checked={checked}
         value={formvalues.toppings.hawaiian}
         name='hawaiian'
         type='checkbox'
       />
 
     {/* Special Instructions  */}
     <h4>Instructions</h4>
     <label>
       <input
         name='Instructions'
         onChange={changeValues}
         text='text'
         value={formvalues.instructions}
       />
     </label>
     <h4>Enter Quantity Here</h4>
     <label>
       <input
         name='quantity'
         type='number'
         step='1'
         onChange={changeValues}
         value={formvalues.quantity}
       />
 
       <h4>Finish with order?</h4>
     </label>
 
     <button>Submit!</button>
   </form>
 );
}
 
export default Pizza;
 
 
