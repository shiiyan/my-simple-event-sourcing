const events = [
    { type: "add_expected_point", walletId: "wallet1", amount: 100, time: 0 },
    { type: "exchange_confirmed_point", walletId: "wallet1", reward: "iPhone", amount: 50, time: 2 },
    { type: "convert_expected_to_confirmed", walletId: "wallet1", amount: 100, time: 1 },
];

// rebuild wallets
// output
// { wallet1: { expectedPoint: 0, confirmedPoint: 50 } }
const wallets = events.reduce(
    (wallets, event) => {
        if (event.type === "add_expected_point") {
            wallets[event.walletId].expectedPoint += event.amount;
        }

        if (event.type === "convert_expected_to_confirmed") {
            wallets[event.walletId].expectedPoint -= event.amount;
            wallets[event.walletId].confirmedPoint += event.amount;
        }

        if (event.type === "exchange_confirmed_point") {
            wallets[event.walletId].confirmedPoint -= event.amount;
        }

        return wallets;
    },
    {
        wallet1: {
            expectedPoint: 0,
            confirmedPoint: 0
        }
    }
);

console.log(wallets);