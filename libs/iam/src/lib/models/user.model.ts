export interface IUser extends IUserAttributes {
  id: string;
  createdAt: Date;
}

export interface IUserAttributes {
  firstName: string;
}
