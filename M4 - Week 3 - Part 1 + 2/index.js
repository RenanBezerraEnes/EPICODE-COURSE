window.onload = async () => {
  try {
    let dataUsers = await fetchUsers();

    console.log(dataUsers)

    addUserList(dataUsers)

  } catch (error) {
    console.log(error);
  }
}

const fetchUsers = async () => {
  let fetchUsersResult = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  let dataUsers = fetchUsersResult.json();

  return dataUsers;
};

const addUserList = (usersArray) => {
  const container = document.querySelector(".container");

  container.innerHTML = usersArray.map((user) => {
`<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">${user.id}</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>${user.name}</td>
      <td>${user.username}</td>
      <td>${user.email}</td>
    </tr>
  </tbody>
</table>
`
  }).join(" ")
};
