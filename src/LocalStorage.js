    //method retrieving positions from localstorage
  async function getPositionsFromLocalStorage() {
    const itemsFromLocalStorage = JSON.parse(localStorage.getItem("dashboard-positions"))
    if (itemsFromLocalStorage) {
      return itemsFromLocalStorage
    }
    return []
  };

  //method to store positions to localstorage and also store values to dynamoDB
  async function storePositionsToLocalStorage(newPositions) {
    localStorage.setItem("dashboard-positions", JSON.stringify(newPositions));
  }

  export {getPositionsFromLocalStorage, storePositionsToLocalStorage}