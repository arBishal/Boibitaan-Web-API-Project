import type { NextApiRequest, NextApiResponse } from "next";
import { verifyJWT } from "../../lib/tokenVerification";
import {
  transactionRequest,
  sendToSupplier,
} from "../../lib/transactionHelper";
import {
  PurchaceRequest,
  SupplierTransaction,
  TransactionRequest,
  TransactionResponse,
  SupplierResponse,
  PurchaceResponse,
} from "../../lib/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { token } = req.body;
    const response = verifyJWT(token);

    if (response) {
      const { clientInfo, products, totalPrice }: PurchaceRequest =
        req.body.purchaceRequest;
      try {
        const transaction1: TransactionRequest = {
          sender: clientInfo.accountNumber,
          reciever: Number(process.env.E_COMMERCE_ACCOUNT_NUMBER),
          amount: totalPrice,
          secretKey: clientInfo.secretKey,
        };

        const { verdict, message }: TransactionResponse =
          await transactionRequest(transaction1);

        if (verdict) {
          const transaction2: TransactionRequest = {
            sender: Number(process.env.E_COMMERCE_ACCOUNT_NUMBER),
            reciever: Number(process.env.SUPPLIER_ACCOUNT_NUMBER),
            amount: Math.floor(totalPrice * 0.85),
            secretKey: clientInfo.secretKey,
          };
          const transaction: TransactionResponse = await transactionRequest(
            transaction2
          );
          if (transaction.verdict) {
            const supplierTransaction: SupplierTransaction = {
              txnId: transaction.txnId,
              clientInfo,
              products,
              recievedAmount: transaction.amount,
            };
            const supplierResponse: SupplierResponse = await sendToSupplier(
              supplierTransaction
            );
            if (supplierResponse.txnId) {
              const purchaceResponse: PurchaceResponse = {
                txnId: transaction.txnId,
                verdict: true,
                message: "Successfull",
                products,
                amount: totalPrice,
              };
              return res.status(200).json(purchaceResponse);
            }
            return res
              .status(200)
              .json({ verdict: false, message: "Failed To Reach Supplier!" });
          }
        } else {
          return res.status(200).json({verdict: false, message});
        }
      } catch (err) {
        console.log(err);
      }

      return res
        .status(200)
        .json({ status: false, message: "Internal Issue!" });
    }
  } catch (err) {
    console.log({ err });
  }
  return res.status(200).json({ status: false, message: "invalid token" });
}
