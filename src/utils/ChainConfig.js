import Swal from "sweetalert2";

export const chainConfig = {
  stakeCurrency: {
    coinDenom: "SERV",
    coinMinimalDenom: "aservo",
    coinDecimals: 18,
  },
  bech32Config: {
    bech32PrefixAccAddr: "sx",
    bech32PrefixAccPub: "sxpub",
    bech32PrefixValAddr: "sxvaloper",
    bech32PrefixValPub: "sxvaloperpub",
    bech32PrefixConsAddr: "sxvalcons",
    bech32PrefixConsPub: "sxvalconspub",
  },
  currencies: [
    {
      coinDenom: "SERV",
      coinMinimalDenom: "aservo",
      coinDecimals: 18,
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "SERV",
      coinMinimalDenom: "aservo",
      coinDecimals: 18,
      gasPriceStep: {
        low: 25000000000,
        average: 25000000000,
        high: 40000000000,
      },
    },
  ],
  bip44: {
    coinType: 60,
  },
  chainId: "serv_43970-1",
  chainName: "SERV Testnet",
  rpc: "https://rpc.serv.services/evmos",
  rest: "https://lcd.serv.services",
  beta: true,
  features: ["ibc-transfer", "ibc-go", "eth-address-gen", "eth-key-sign"],
};

export const handler = async () => {
  if (window.keplr) {
    try {
      await window.keplr.enable(chainConfig.chainId);
      Swal.fire({
        title: "Note",
        text: `Testnet ${chainConfig.chainId} has already added`,
        icon: "info",
        confirmButtonText: "Awesome",
      });
    } catch (e) {
      try {
        await window.keplr.experimentalSuggestChain(chainConfig);
        await window.keplr.enable(chainConfig.chainId);
      } catch (e2) {
        Swal.fire({
          title: "Error",
          text: e2?.message,
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    }
  } else {
    Swal.fire({
      title: "Error",
      text: "Keplr Wallet Extension could not be found. Please check browser compatibility or try again later.",
      icon: "error",
      confirmButtonText: "Ok",
    });
  }
};
