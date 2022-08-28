import { SupplierTransaction, TransactionRequest } from "./types";
// const temp = "http://localhost:3001/api/transactionRequest";
export const transactionRequest = async (transaction: TransactionRequest) => {
    // const res = await fetch(temp, {
  const res = await fetch(
    `${process.env.BANK_ENDPOINT}/api/transactionRequest`,
    {
      method: "POST",
      body: JSON.stringify(transaction),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
  return await res.json();
};

export const sendToSupplier = async (transaction: SupplierTransaction) => {
  const res = await fetch(`${process.env.SUPPLIER_ENDPOINT}/api/transaction`, {
    method: "POST",
    body: JSON.stringify(transaction),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return await res.json();
};
