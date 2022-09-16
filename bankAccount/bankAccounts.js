const events = [
  { type: "open", id: "account1", balance: 150, time: 0 },
  { type: "open", id: "account2", balance: 0, time: 1 },
  { type: "transfer", fromId: "account1", toId: "account2", amount: 50, time: 2 },
];


// rebuild accounts
// output 
// {
//   account1: { balance: 100 },
//   account2: { balance: 50 },
// };
const accounts = events.reduce((accounts, event) => {
  if (event.type === "open") {
    accounts[event.id] = { balance: event.balance };
  }

  if (event.type === "transfer") {
    accounts[event.fromId] = { balance: accounts[event.fromId].balance - event.amount }
    accounts[event.toId] = { balance: accounts[event.toId].balance + event.amount }
  }

  return accounts;
}, {});

console.log(accounts);
