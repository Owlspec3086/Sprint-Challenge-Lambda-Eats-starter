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
      <select name='size' formvalues={formvalues.name} onChange={changeValues}>
        <option>Please Select A Size</option>
        <option formvalue='small'>Small</option>
        <option formvalue='Medium'>Medium</option>
        <option formvalue='Large'>Large</option>
      </select>

      {/* //////////////////////////////////Toppings//////////////////////// */}

      <h4> Choose a Topping</h4>
      <label>Onions</label>
      <input
        name='Onions'
        type='checkbox'
        checked={checked}
        formvalue={formvalues.toppings.onions}
      />

      <label>Chicken</label>
      <input
        name='Chicken'
        type='checkbox'
        checked={checked}
        formvalue={formvalues.toppings.chicken}
      />

      <label>Cheese</label>
      <input
        name='Cheese'
        type='checkbox'
        check={checked}
        formvalue={formvalues.toppings.cheese}
      />

      <label>Hawaiian</label>
      <input
        name='hawaiian'
        type='checkbox'
        checked={checked}
        formvalue={formvalues.toppings.hawaiian}
      />

      {/* Special Instructions  */}
      <label>
        <h4>Instructions</h4>
      </label>
      <input
        name='Instructions'
        onChange={changeValues}
        text='text'
        formvalue={formvalues.instructions}
      />

      <label>
        <h4>Enter Quantity Here</h4>
      </label>
      <input
        name='quantity'
        type='number'
        step='1'
        onChange={changeValues}
        formvalue={formvalues.quantity}
      />
      <label>
        <h4>Finish with order?</h4>
      </label>

      <button>Submit!</button>
    </form>
  );
}

export default Pizza;
