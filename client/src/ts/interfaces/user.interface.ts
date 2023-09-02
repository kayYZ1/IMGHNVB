export interface IUser {
  name: string;
  email: string;
  password: string;
  gender: string;
  avatar: string | null;
  date: string;
  introduction: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}
