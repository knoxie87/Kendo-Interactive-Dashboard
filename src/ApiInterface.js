
const getPositions = async () => {
    const query = `query getConfiguration {
      getConfiguration {
        id,
        newOrder,
        col,
        rowSpan,
        colSpan
      }
}`;

      const result = await fetch('http://localhost:3000/dev/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          query,
        })
      })
        .then(r => r.json())
        .then((result) => {
          console.log(result);
          return result
        });

      const temporaryconfiguration = await result.data.getConfiguration;
      return temporaryconfiguration
  }

  const storePosition = async (positions) => {
    const query = `mutation createTest($id: String, $newOrder: Int $col: Int, $colSpan: Int, $rowSpan: Int){
      addConfiguration(id: $id, newOrder: $newOrder, col: $col, colSpan: $colSpan, rowSpan: $rowSpan  ) {
        id,
        newOrder,
        col,
        colSpan,
        rowSpan,
      }
    }`;

    const result = await fetch('http://localhost:3000/dev/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables: { id: positions.id, newOrder: positions.order, col: positions.col, colSpan: positions.colSpan, rowSpan: positions.rowSpan }
        })
    })
        .then(r => r.json())
        .then((result) => {
            console.log(result);
            return result.data.addConfiguration
        }).catch(err => {
            console.log(err.result);
        });
        const temporaryconfiguration = result;
        return temporaryconfiguration
  }

  const updatePosition = async (configuration) => {
    const query = `mutation updateTest($id:String, $newOrder: Int,  $col: Int, $colSpan: Int, $rowSpan: Int! ){
      updateConfiguration(id:$id, newOrder:$newOrder, col: $col, colSpan: $colSpan, rowSpan: $rowSpan ) {
        id,
        newOrder,
        col,
        colSpan,
        rowSpan 
      }
    }`
    const result = await fetch('http://localhost:3000/dev/graphql',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables: {id: configuration.id.toString(), newOrder: configuration.order, col: configuration.col, colSpan: configuration.colSpan, rowSpan: configuration.rowSpan}
        })
    })
    .then(r => r.json())
    .then((result) => {
        console.log(result)
        return result
    })
    .catch(err => {
        console.log(err.result.data);
    })

    const temporaryconfiguration = await result;
    return temporaryconfiguration
}


const deletePosition = async (id) => {
    const query = `mutation deleteConfiguration($id: String){
        deleteConfiguration(id: $id){
          id
        }
      }
      `
    const result = await fetch('http://localhost:3000/dev/graphql',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables: {id: id}
        })
    })
    .then(r =>r.json())
    .then((result) => {
        console.log(result)
        return result
    });
    const temporaryconfiguration = await result.data.getConfiguration;
    return temporaryconfiguration
}
export {getPositions, updatePosition, storePosition, deletePosition};



