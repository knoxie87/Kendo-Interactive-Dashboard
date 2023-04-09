const getPositionsFromDB = async () => {
  const query = `query getConfiguration {
      getConfiguration {
        id,
        newOrder,
        col,
        rowSpan,
        colSpan,
        type
      }
}`;

  const result = await fetch("http://localhost:3000/dev/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  })
    .then((r) => r.json())
    .then((result) => {
      console.log(result);
      return result;
    });

  const temporaryconfiguration = await result.data.getConfiguration;
  return temporaryconfiguration;
};

const storePositionToDB = async (positions) => {
  const query = `mutation createTest($id: String, $newOrder: Int $col: Int, $colSpan: Int, $rowSpan: Int, $type: String){
      addConfiguration(id: $id, newOrder: $newOrder, col: $col, colSpan: $colSpan, rowSpan: $rowSpan, type: $type  ) {
        id,
        newOrder,
        col,
        colSpan,
        rowSpan,
        type
      }
    }`;

  const result = await fetch("http://localhost:3000/dev/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query,

      variables: {
        id: positions.id,
        newOrder: positions.order,
        col: positions.col,
        colSpan: positions.colSpan,
        rowSpan: positions.rowSpan,
        type: positions.type,
      },
    }),
  })
    .then((r) => r.json())
    .then((result) => {
      console.log(result);
      return result.data.addConfiguration;
    })
    .catch((err) => {
      console.log(err.result);
    });
  const temporaryconfiguration = result;
  return temporaryconfiguration;
};

const updatePositionToDB = async (configuration) => {
  const query = `mutation updateTest($id:String, $newOrder: Int,  $col: Int, $colSpan: Int, $rowSpan: Int!, $type: String ){
      updateConfiguration(id:$id, newOrder:$newOrder, col: $col, colSpan: $colSpan, rowSpan: $rowSpan, type: $type ) {
        id,
        newOrder,
        col,
        colSpan,
        rowSpan,
        type
      }
    }`;
  const result = await fetch("http://localhost:3000/dev/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query,
      variables: {
        id: configuration.id.toString(),
        newOrder: configuration.order,
        col: configuration.col,
        colSpan: configuration.colSpan,
        rowSpan: configuration.rowSpan,
        type: configuration.type,
      },
    }),
  })
    .then((r) => r.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((err) => {
      console.log(err.result.data);
    });

  const temporaryconfiguration = await result;
  return temporaryconfiguration;
};

const deletePositionFromDB = async (id) => {
  const query = `mutation deleteConfiguration($id: String){
        deleteConfiguration(id: $id){
          id
        }
      }
      `;
  const result = await fetch("http://localhost:3000/dev/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query,
      variables: { id: id },
    }),
  })
    .then((r) => r.json())
    .then((result) => {
      console.log(result);
      return result;
    });
  const temporaryconfiguration = await result.data.getConfiguration;
  return temporaryconfiguration;
};
export {
  getPositionsFromDB,
  updatePositionToDB,
  storePositionToDB,
  deletePositionFromDB,
};
