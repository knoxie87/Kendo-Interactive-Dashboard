import { selectionSetMatchesResult } from "@apollo/client/cache/inmemory/helpers";
import { useState } from "react";
import { storePosition } from "../ApiInterface";


const storePositionsToDynomoDB = (positions) => {
    positions.map(async position => {
       await storePosition(position)
    })
}
export default storePositionsToDynomoDB;