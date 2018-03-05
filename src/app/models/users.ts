export interface User {
  id: number;
  username: string;
  email: string;
  fullName: string;
  age: number;
}

export const availableUsers: User[] = [
  {
      id: 1,
      username: 'jkowalski',
      email: 'jkowalski@comarch.com',
      fullName: 'Jan Kowalski',
      age: 21,

  },
  {
      id: 2,
      username: 'kklimczak',
      email: 'kklimczak@comarch.com',
      fullName: 'Konrad Klimczak',
      age: 23
  },
  {
      id: 3,
      username: 'dpaluch',
      email: 'dpaluch@comarch.com',
      fullName: 'Dominik Paluch',
      age: 23
  }
];
