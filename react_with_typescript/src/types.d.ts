/** @format */

export type User = {
  id: number;
  name: string;
  email: string;
};

export type AdminInfo = User & {
  role: string;
  loginDate: Date;
};
