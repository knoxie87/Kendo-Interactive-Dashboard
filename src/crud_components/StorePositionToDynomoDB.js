import { storePositionToDB } from "../ApiInterface";


const storePositionsToDynomoDB = async (positions) => {
    await positions.map( async position => {
       await storePositionToDB(position)
    })
}
export default storePositionsToDynomoDB;