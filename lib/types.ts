import { Session } from "next-auth/core/types";

export type CredentialType = {
  email: string;
  passHash: string;
};

export type SessionType = {
  user: { name: string; phone: string; email: string };
  id: string;
  expires: string;
  token: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  accountNumber: number | string;
  address: string;
  secretKey?: string;
};

export type BankAccount = {
  id: number;
  name: string;
  accountNumber: number;
  balance: number;
};

export type Book = {
  id: number;
  name: string;
  author: string;
  price: number;
  image: string;
  publisher: string;
  supplier: string;
  quantity: number;
  sale: number;
  catagory: string;
  description: string;
};

export type Supplier = {
  id: number;
  name: string;
  accountNumber: number;
};

export type Transaction = {
  id: number;
  sender: string;
  reciever: string;
  amount: number;
};

export type Cart = Record<
  string | number,
  {
    amount: number;
    book: Book;
  }
>;
