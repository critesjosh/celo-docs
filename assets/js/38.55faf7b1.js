(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{387:function(e,t,o){"use strict";o.r(t);var r=o(42),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"oracles"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#oracles"}},[e._v("#")]),e._v(" Oracles")]),e._v(" "),o("p",[e._v("As mentioned in the previous section, the stability mechanism needs to know the market price of CELO with respect to the US dollar. This value is made available on-chain in the SortedOracles smart contract.")]),e._v(" "),o("p",[e._v("Through governance, a whitelist of reporters is selected. These addresses are allowed to make reports to the SortedOracles smart contract. The smart contract keeps a list of most recent reports from each reporter. To make it difficult for a dishonest reporter to manipulate the oraclized rate, the official value of the oracle is taken to be the "),o("em",[e._v("median")]),e._v(" of this list.")]),e._v(" "),o("p",[e._v("To ensure the oracle's value doesn't go stale due to inactive reporters, any reports that are too old can be removed from the list. \"Too old\" here is defined based on a protocol parameter that can be modified via governance.")])])}),[],!1,null,null,null);t.default=a.exports}}]);