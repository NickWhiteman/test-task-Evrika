const express = require("express");
const app = express();
const port = 3000;
const baseLink = 'http://localhost:3000'

let data = [
  {
    id: 1,
    firstName: "Иванов",
    lastName: "Иван",
    fatherName: "Иванович",
    email: "mail1@mail.ru",
    login: "user1"
  },
  {
    id: 2,
    firstName: "Петров",
    lastName: "Петр",
    fatherName: "Сергеевич",
    email: "mail2@mail.ru",
    login: "user2"
  },
  {
    id: 3,
    firstName: "Сергеев",
    lastName: "Григорий",
    fatherName: "Викторович",
    email: "mail3@mail.ru",
    login: "user3"
  },
  {
    id: 4,
    firstName: "Федоров",
    lastName: "Виктор",
    fatherName: "Федорович",
    email: "mail4@mail.ru",
    login: "user4"
  },
  {
    id: 5,
    firstName: "Хвастунов",
    lastName: "Сергей",
    fatherName: "Петрович",
    email: "mail5@mail.ru",
    login: "user5"
  },
  {
    id: 6,
    firstName: "Григорьев",
    lastName: "Федор",
    fatherName: "Григорьевич",
    email: "mail6@mail.ru",
    login: "user6"
  }
];

app.get(`${baseLink}/api/getUsers`, (req, res) => {
  res.send(data);
});

app.post(`${baseLink}/api/createUser`, (req, res) => {
  req.body((user) => {
    data.push(user);
  });
  res.send(data);
});

app.post(`${baseLink}/api/deleteUser/`, (req, res) => {
  // data.find((item) => item.id === req.body.id && data.pop(item));
  res.send(data);
});

app.put(`${baseLink}/api/userUpdate/`, (req, res) => {
  req.body((model) => {});
  res.send(data);
});

app.listen(port, () => console.log(`Server work on port: ${port}`));
