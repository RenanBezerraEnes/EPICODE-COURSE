window.onload = async () => {
  try {
    let dataUsers = await fetchUsers();

    console.log(dataUsers)

    addUserList(dataUsers)

    displayUsersAddresses(dataUsers)

    const btnDisplayNames = document.querySelector("#btnDisplayNames")

    btnDisplayNames.addEventListener("click", () => {
      listOfNames(dataUsers)
    })
  } catch (error) {
    console.log(error);
  }
}

const fetchUsers = async () => {

  let fetchUsersResult = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  let dataUsers = await fetchUsersResult.json();

 return dataUsers
};

const search = async() => {
  addUserList(await filterUsers())
}

const filterUsers = async () => {
let inputSearch = document.querySelector("input").value
let dropdownSearch = document.querySelector("#inputGroupSelect01").value

let usersArray = await fetchUsers()


  if (inputSearch && dropdownSearch === "name") {
    return usersArray.filter((user) => user.name.includes(inputSearch))

  } else if (inputSearch && dropdownSearch === "username") {
    return usersArray.filter((user) => user.username.includes(inputSearch))

  } else if (inputSearch && dropdownSearch === "email") {
    return usersArray.filter((user) => user.email.includes(inputSearch))

  } else {
    return usersArray
  }
}

const addUserList = (usersArray) => {
  // const container = document.querySelector(".container");

  const usersTable = document.querySelector("#tableUs")

  usersTable.innerHTML = usersArray.map((user) => {
  return `
  <tbody>
    <tr>
      <th scope="row">${user.id}</th>
      <td scope="row">${user.name}</td>
      <td scope="row">${user.username}</td>
      <td scope="row">${user.email}</td>
      <td scope="row"><a class="btn btn-secondary"" href='./details.html?id=${user.id}'></a></td>
    </tr>
  </tbody>
`
  }).join(" ")
};


const displayUsersAddresses = (usersAddresses) => {
 const addressList = document.querySelector("#addressList")

 addressList.innerHTML = usersAddresses.map((user) => {
   return `
   <tbody>
    <tr>
      <th scope="row">${user.id}</th>
      <th scope="row">${user.address.street}</th>
      <td scope="row">${user.address.suite}</td>
      <td scope="row">${user.address.city}</td>
      <td scope="row">${user.address.zipcode}</td>
      <td scope="row">${user.address.geo.lat}</td>
      <td scope="row">${user.address.geo.lng}</td>
    </tr>
  </tbody>
   `
 }).join(" ")
}

const listOfNames = (listNames) => {
  const names = document.querySelector(".listNames")
  names.innerHTML = `
  <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
    </tr>
  </thead>
  <tbody id="tableNames">
    
  </tbody>
</table>
`
const tableNames = document.querySelector("#tableNames")
tableNames.innerHTML = listNames.map((user) => {
    return `
    <tr>
    <td scope="row">${user.name}</td>
    </tr>
    `
  }).join(" ")
}

