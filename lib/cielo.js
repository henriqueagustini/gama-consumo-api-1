const fetch = require("node-fetch");

class Cielo {
  static compra(params) {
    return fetch("https://apisandbox.cieloecommerce.cielo.com.br/1/sales/", {
      method: "post",
      body: JSON.stringify(params),
      headers: {
        "Content-Type": "application/json",
        MerchantId: "330d4094-ebe3-4b70-89fe-1fd81b5310f8",
        MerchantKey: "EGJKXWCQSBJZCQNTHJPOEHWGBWUCKYDNITPLGGWZ"
      }
    }).then(res => res.json());
  }

  static captura(paymentId) {
    return fetch(
      "https://apisandbox.cieloecommerce.cielo.com.br/1/sales/" +
        paymentId +
        "/capture",
      {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          MerchantId: "330d4094-ebe3-4b70-89fe-1fd81b5310f8",
          MerchantKey: "EGJKXWCQSBJZCQNTHJPOEHWGBWUCKYDNITPLGGWZ"
        }
      }
    ).then(res => res.json());
  }

  static consulta(paymentId) {
    return fetch(
      "https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/" +
        paymentId,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          MerchantId: "330d4094-ebe3-4b70-89fe-1fd81b5310f8",
          MerchantKey: "EGJKXWCQSBJZCQNTHJPOEHWGBWUCKYDNITPLGGWZ"
        }
      }
    ).then(res => res.json());
  }
}

module.exports = Cielo;
