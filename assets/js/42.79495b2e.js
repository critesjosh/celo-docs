(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{391:function(e,t,a){"use strict";a.r(t);var n=a(42),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"paying-for-gas-in-tokens"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#paying-for-gas-in-tokens"}},[e._v("#")]),e._v(" Paying for Gas in Tokens")]),e._v(" "),a("p",[e._v("As in Ethereum, transaction fees play a critical role in the Celo protocol as a safeguard against denial-of-service attacks. In order to simplify the process of sending funds, these fees can be paid in ERC20 tokens, and not just the native token of the protocol, CELO. This means that a user sending Celo Dollars to friends or family will be able to pay their transaction fee out of their Celo Dollar balance, and do not need to hold a separate balance of CELO in order to make transactions.")]),e._v(" "),a("p",[e._v("The protocol maintains a governable whitelist of smart contract addresses which can be used to pay for transaction fees. These smart contracts implement an extension of the ERC20 interface, with additional functions that allow the protocol to debit and credit transaction fees. When creating a transaction, users can specify the address of the currency they would like to use to pay for gas via the "),a("code",[e._v("feeCurrency")]),e._v(" field. Leaving this field empty will result in the native currency, CELO, being used. Note that transactions that specify non-CELO gas currencies will cost approximately 100k additional gas. Note that this number is expected to drop significantly in the near future.")])])}),[],!1,null,null,null);t.default=o.exports}}]);