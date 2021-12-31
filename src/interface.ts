/**
 * @description User-Service parameters
 */
export interface IUserOptions {
  uid: string;
}

export interface IGetUserResponse {
  success: boolean;
  message: string;
  data: IUserOptions;
}

export interface User {
  id: string;
  name: string;
  age: number;
}

export interface Account {
  username: string;
  password: string;
}
