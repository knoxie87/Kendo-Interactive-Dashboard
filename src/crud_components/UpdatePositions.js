import { useState } from "react";
import { updatePositionToDB } from "../ApiInterface";


const UpdatePositions = (props) => {
    const [position, setPositions] = useState([{
        id:"",
        order:"",
        col: "",
        rowSpan: "",
        colSpan:""
      }])

    //method updateing the usestate hook with each new object property
    const handleChange = e => {
        const { name, value } = e.target;
        if (name !== "id"){
            setPositions(prevState =>({
                ...prevState,
                [name]:parseInt(value)
            }));
        }else {
            setPositions(prevState =>({
                ...prevState,
                [name]:(value)
            }));
        }
    }

    const updatePositions = () => {
        updatePositionToDB(position)
    }

    return (
        <ul>
        <form>
          <label>
          <input type="text" placeholder="name" name="id"  onChange={handleChange}/>
          <input type="text" placeholder="order" name="order"  onChange={handleChange}/>
          <input type="text" placeholder="col" name="col"  onChange={handleChange}/>
          <input type="text" placeholder="colSpan" name="colSpan" onChange={handleChange}/>
          <input type="text" placeholder="rowSpan" name="rowSpan" onChange={handleChange}/>
          </label>
        </form>
        <button className='update-positions-button' onClick={() => { updatePositions()} }>UpdatePositions</button>
    </ul>
    )
}

export default UpdatePositions;