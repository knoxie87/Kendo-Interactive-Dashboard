import React, { useState } from "react";
import {deletePosition, getPositions} from "../ApiInterface"
import storePositionsToDynomoDB from "./StorePositionToDynomoDB";

const DeletePositions = (props) => {
    async function removePosition(id) {
        props.deleteTile(props.position)
    }
    return(
        <div onClick={() => removePosition(props.position.id)}>
            <button className="delete-position-button">Delete</button>
        </div>
    )
}
export default DeletePositions;
