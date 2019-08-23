const remoteURL = "http://localhost:5002"

export default {
  search(keyword) {
    let allSearchResults = {}
    return fetch(`${remoteURL}/animals?name_like=${keyword}`)
      .then(result => result.json())
      .then(animalsArray => {
        allSearchResults.animals = animalsArray
        // return allSearchResults
      })
      .then(() => fetch(`${remoteURL}/employees?name_like=${keyword}`))
      .then(result => result.json())
      .then(employeesArray => {
        allSearchResults.employees = employeesArray
      })
      .then(() => fetch(`${remoteURL}/locations?name_like=${keyword}`))
      .then(result => result.json())
      .then(locationsArray => {
        allSearchResults.locations = locationsArray
      })
      .then(() => fetch(`${remoteURL}/owners?name_like=${keyword}`))
      .then(result => result.json())
      .then(ownersArray => {
        allSearchResults.owners = ownersArray
        return allSearchResults
      })
  },
  get(resource, id) {
    return fetch(`${remoteURL}/${resource}/${id}`).then(result => result.json())
  },
  getAll(resource) {
    return fetch(`${remoteURL}/${resource}`).then(result => result.json())
  },
  delete(resource, id) {
    return fetch(`http://localhost:5002/${resource}/${id}`, {
      method: "DELETE"
    })
      .then(result => result.json())
  },
  post(resource, newObject) {
    return fetch(`${remoteURL}/${resource}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newObject)
    }).then(data => data.json())
  },
  update(resource, editedObject) {
    return fetch(`${remoteURL}/${resource}/${editedObject.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedObject)
    }).then(data => data.json());
  }
}