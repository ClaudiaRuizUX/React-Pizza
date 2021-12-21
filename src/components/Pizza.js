import React from "react"

const Pizza = (props) => {
  const {toppings, size, id, vegetarian} = props.pizzas;
  return(
    <tr key={id}>
      <td>{toppings}</td>
      <td>{size}</td>
      <td>{vegetarian? "yes" : "no"}</td>
      <td><button type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
