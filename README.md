# E - Wallet Application

## Run Setup
- Follow the steps below in order to run the project in local:
1. Go to /docker directory
   - Run ```docker compose up``` command in it.
2. Go to /db directory and run the files below.
   - Run the scripts in the **e-wallet_ddl.sql** file to create the schema and tables. 
   - Run the scripts in the **e-wallet_dml.sql** file to insert the data necessary for the application to run.
3. Go to /bom directory and run the ```mvn clean install``` command.
4. Build the project in the current directory.
   - ```mvn clean install```
4. Go to the wallet-service module and run the jar file under the target file.
   - ```java -jar target/wallet-service-1.0.0.jar```
5. Go to the wallet-frontend module and run the npm commands below.
   - ```npm install```
   - ```npm start```

---
- When logging into the application, a wallet is created by clicking on the "Create Wallet" link. 
- To view all wallets, go to the home page, after a wallet record is created.   
---
## App Showcase

![Wallet Service API](https://github.com/semih/wallet/blob/main/documentation/wallet-service-api.png)
![Initialization Page](https://github.com/semih/wallet/blob/main/documentation/initialization-page.png)
![Wallet List](https://github.com/semih/wallet/blob/main/documentation/wallets.png)
![Wallet Transactions](https://github.com/semih/wallet/blob/main/documentation/wallet-transactions.png)
![Add Wallet](https://github.com/semih/wallet/blob/main/documentation/add-wallet.png)
![Deposit](https://github.com/semih/wallet/blob/main/documentation/deposit.png)
![Withdraw](https://github.com/semih/wallet/blob/main/documentation/withdraw.png)
![Deposit](https://github.com/semih/wallet/blob/main/documentation/deposit.png)
![Transfer](https://github.com/semih/wallet/blob/main/documentation/transfer.png)

## Request Examples

```
{
   "transactionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
   "transactionType": "TRANSFER",
   "description": "Transfer Description",
   "amount": 100,
   "senderWallet": {
      "id": 1
   },
   "receiverWallet": {
      "id": 2
   }
}

{
   "transactionId": "3fa85f64-5717-4562-b3fc-2c963f66afa7",
   "transactionType": "WITHDRAW",
   "description": "Withdraw Description",
   "amount": 100,
   "senderWallet": {
      "id": 1
   }
}

{
   "transactionId": "3fa85f64-5717-4562-b3fc-2c963f66afa8",
   "transactionType": "DEPOSIT",
   "description": "Deposit Description",
   "amount": 100,
   "receiverWallet": {
      "id": 2
   }
}
```
