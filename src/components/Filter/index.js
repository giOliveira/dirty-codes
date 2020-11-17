import  React from "react";

const Filter = ({handleOrder}) => {

    return (
        <div className='control'>
          <select onChange={handleOrder} >
            <option value='rating'>Rating</option>
            <option value='name'>Name</option>
            <option value='year' >Year</option>
            <option value='duration'>Duration</option>
          </select>
        </div>
    )
}

export default Filter