import React from 'react';

 const FormComp= (props) => {
  
        return (
            <div>
              <form onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="Enter You City"/>
            <input type="text" name="country" placeholder="Enter Your Country"/>
            <button type="submit">Get Weather</button>
              </form>
            </div>
        )
    
}

export default FormComp