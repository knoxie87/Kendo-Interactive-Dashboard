import { gql, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import loadPositions from  "../App"
import {getPositions} from "../ApiInterface"
import DeletePositions from '../crud_components/DeletePositions';

const GetPositions = (props)  => {

  const [configuration, setConfiguration] = useState([])

  useEffect(() => {
    let tempconfig = [...configuration]
    tempconfig = (props.positions.map((item) => {
      return {id:item.id, order: item.order, col: item.col, colSpan: item.colSpan, rowSpan: item.rowSpan}
    }))
    setConfiguration(tempconfig)
    },[props.positions])

    return (
      <div className='get-items-component'>
          <div>
          {configuration.map((Position) => {
            return (
              <table key={Position.id}>
                <tbody>
              <tr>
                <th>Name</th>
                <th>order</th>
                <th>Col</th>
                <th>Rowspan</th>
                <th>Colspan</th>
                <th>Delete</th>
              </tr>
              <tr>
                <td>{Position.id}</td>
                <td>{Position.order}</td>
                <td>{Position.col}</td>
                <td>{Position.rowSpan}</td>
                <td>{Position.colSpan}</td>
                <td><DeletePositions deleteTile = {props.deleteTile} position = {Position}/></td>            
              </tr>
              </tbody>
              </table>
            );
          })}
          </div>
        </div>
  )
}

export default GetPositions;
