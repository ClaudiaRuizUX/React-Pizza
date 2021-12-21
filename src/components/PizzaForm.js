import React from "react";

const PizzaForm = (props) => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" name={props.pizzaForm.topping}
            value={props.pizzaForm.topping} onChange={(e) => props.PizzaForm(e)}/>
        </div>
        <div className="col">
          <select value={props.pizzaForm.size} className="form-control" onChange={(e) => props.onUpdateForm(e)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" value="Vegetarian" checked={props.pizzaForm.vegetarian} onChange={(e) => props.onUpdateForm(e)}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={props.pizzaForm.vegetarian} onChange={(e) => props.onUpdateForm(e)}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={props.onSubmitForm}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
