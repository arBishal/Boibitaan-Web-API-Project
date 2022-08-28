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
  id: number;
  name: string;
  email: string;
  phone: string;
  accountNumber: number;
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
  supplier: number;
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

export type Cart = Record<
  string | number,
  {
    amount: number;
    book: Book;
  }
>;

export type ClientInfo = {
  id: number;
  name: string;
  phone: string;
  address: string;
  accountNumber: number;
  secretKey: string;
};

// EC-FrontEnd to EC-BackEnd
export type PurchaceRequest = {
  clientInfo: ClientInfo;
  products: {
    id: string;
    quantity: number;
    suplier: number;
  }[];
  totalPrice: number;
};

// EC-BackEnd to Bank
export type TransactionRequest = {
  sender: number;
  secretKey: string;
  reciever: number;
  amount: number;
};

// Bank to EC-BackEnd
export type TransactionResponse = {
  txnId: string;
  verdict: boolean;
  message?: string;
  sender: number;
  reciever: number;
  amount: number;
};

// EC-BackEnd to EC-FrontEnd
export type PurchaceResponse = {
  txnId: string;
  verdict: boolean;
  message?: string;
  products: {
    id: string;
    quantity: number;
    suplier: number;
  }[];
  amount: number;
};

// EC-Backend to FE, Supplier
export type SupplierTransaction = {
  txnId: string;
  clientInfo: ClientInfo;
  products: {
    id: string;
    quantity: number;
    suplier: number;
  }[];
  recievedAmount: number;
};

export type SupplierResponse = {
  txnId: string;
  products: {
    id: string;
    quantity: number;
    suplier: number;
  }[];
  verditc: boolean;
};
