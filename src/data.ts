import { FormUser } from "./components/modal-window/types";
import { IUser } from "./dashboard/types";

export let data: IUser[] = [
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

export const createUserHandler = (model: IUser): void => {
  const newData = [...data, model];
  data = newData;
  console.log(data)
};

export const editionUserHandler = (user: FormUser, id: number): void => {
  const editionUser: IUser = { id: id, ...user }
  const newData: IUser[] = data.map((item) => (
    item.id === editionUser.id
      ? item = { ...editionUser }
      : item
  ));
  data = newData;
};

export const newUserObject = (user: FormUser): IUser => {
  let newUser: IUser = { id: (data.length + 1), ...user };
  return newUser
};

export const getUserById = (id: number): IUser => {
  let user: IUser[] = [];
  data.forEach((person) => {
    if(person.id === id) user.push(person)
  })
  return user[0];
};

export const deleteUserHandler = (id: number): IUser[] => {
  const newData: IUser[] = data.filter(user => user.id !== id && user)
  return newData;
};
