class User {
  constructor(name, age, money) {
    this.name = name;
    this.age = age;
    this.money = money;
  }
}

const users = [];
console.log(users)

function registerUser() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const money = document.getElementById("money").value;

  const createUser = new User(name, age, money);
  users.push(createUser);
  updateTable();
  clearForm();
}

function updateTable() {
  const tableBody = document.getElementById('userTable')
//   const tableBody = document.getElementById('userTable').getElementsByTagName('tbody')[0];

  users.forEach((user) => {
    const row = tableBody.insertRow()

    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    const cell3 = row.insertCell();

    cell1.innerHTML = user.name;
    cell2.innerHTML = user.age;
    cell3.innerHTML = user.money;

    tableBody.appendChild(row);

    // // Append cells to the row
    // row.appendChild(cell1);
    // row.appendChild(cell2);
    // row.appendChild(cell3);

    // // Append the row to the table body
    // tableBody.appendChild(row);
  });
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("money").value = "";
}