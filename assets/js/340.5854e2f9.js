(window.webpackJsonp=window.webpackJsonp||[]).push([[340],{687:function(e,t,o){"use strict";o.r(t);var a=o(42),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"custodying-celo-assets-and-monitoring-balances"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#custodying-celo-assets-and-monitoring-balances"}},[e._v("#")]),e._v(" Custodying Celo Assets and Monitoring Balances")]),e._v(" "),o("p",[e._v('This section is intended for Custodians, Exchanges, and other services that intend to custody Celo assets such as Celo Dollar and CELO on behalf of a user. Generally speaking, custodying CELO, the native token on the Celo network, requires understanding the various states that CELO can exist in at any time. This is to provide useful services beyond custody such as allowing users to lock up their CELO and vote with it. Many of these "states" are implemented as smart contracts, and involve sending CELO from a user owned account to a contract address. Thus, in order to be able to show a user\'s true balance, services need to be able to observe every balance changing operation and reconcile CELO balances from all the various contracts and states CELO can be in.')]),e._v(" "),o("h2",{attrs:{id:"balance-model"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#balance-model"}},[e._v("#")]),e._v(" Balance Model")]),e._v(" "),o("p",[e._v("As a fork of Ethereum, Celo retains the account model to keep track of users' balances. Celo Dollar and CELO implement the "),o("a",{attrs:{href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("ERC20"),o("OutboundLink")],1),e._v(" interface. As mentioned previously, it is common for smart contracts to hold balances on behalf of other addresses. One example is the "),o("RouterLink",{attrs:{to:"/docs/celo-codebase/protocol/proof-of-stake/locked-gold.html"}},[o("code",[e._v("LockedGold")])]),e._v(" smart contract that holds the \"locked portion of a user's "),o("code",[e._v("CELO")]),e._v(' balance". Another one is the '),o("a",{attrs:{href:"https://github.com/celo-org/celo-monorepo/blob/master/packages/protocol/contracts/governance/ReleaseGold.sol",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("ReleaseGold")]),o("OutboundLink")],1),e._v(" smart contract that holds "),o("code",[e._v("CELO")]),e._v(" that is being released to a beneficiary address over time according to some schedule.")],1),e._v(" "),o("p",[e._v('{% hint style="warning" %}\nCelo assets assets exist on an independent blockchain, and although they implement the ERC20 interface, they cannot be accessed through wallets that connect to the Ethereum network. Wallets and other integrations must connect to the Celo network to transfer tokens on Celo.\n{% endhint %}')]),e._v(" "),o("p",[e._v("Applications that display balances may need to be written to be aware of this possibility.")]),e._v(" "),o("h2",{attrs:{id:"transfers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#transfers"}},[e._v("#")]),e._v(" Transfers")]),e._v(" "),o("p",[e._v("CELO and Celo Dollars implement the ERC20 interface, as will any future core stable Celo currencies. CELO, as the native currency of the network, can also be transferred by specifying the value field of a transaction, in the same way that ETH can be transferred in Ethereum. Therefore, for CELO, application developers should be aware that transactions can be specified in both ways.")]),e._v(" "),o("h2",{attrs:{id:"celo-state-machine"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#celo-state-machine"}},[e._v("#")]),e._v(" CELO State Machine")]),e._v(" "),o("p",[e._v("CELO as described previously can also exist in various states that represent a specific user behavior. For example, if a user wants to lock CELO to either participate in consensus directly or vote, that CELO will be sent to the "),o("code",[e._v("LockedGold")]),e._v(" smart contract. To understand the high level flow, please read "),o("RouterLink",{attrs:{to:"/docs/celo-codebase/protocol/proof-of-stake/locked-gold.html#locking-and-voting-flow"}},[e._v("this description of the various states CELO can exist in")]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"smart-contracts"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#smart-contracts"}},[e._v("#")]),e._v(" Smart Contracts")]),e._v(" "),o("p",[e._v("The following smart contracts are helpful to understand in order to map the conceptual states to actual accounts and function calls.")]),e._v(" "),o("h3",{attrs:{id:"accounts"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#accounts"}},[e._v("#")]),e._v(" Accounts")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/celo-org/celo-monorepo/blob/master/packages/protocol/contracts/common/Accounts.sol",target:"_blank",rel:"noopener noreferrer"}},[e._v("Accounts.sol"),o("OutboundLink")],1),e._v(" allows the mapping of an address to an account in storage, after which all further functionality (locking, voting, etc.) can be accessed.")]),e._v(" "),o("p",[e._v("The "),o("a",{attrs:{href:"https://github.com/celo-org/celo-monorepo/blob/master/packages/protocol/contracts/common/Accounts.sol#L103",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("createAccount")]),o("OutboundLink")],1),e._v(" function indexes the address as an account in storage, and is required to differentiate an arbitrary key-pair from a user-owned account in the Celo network.")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("Accounts")]),e._v(" contract also allows for the authorization of various signer keys, such as a "),o("a",{attrs:{href:"https://github.com/celo-org/celo-monorepo/blob/master/packages/protocol/contracts/common/Accounts.sol#L175",target:"_blank",rel:"noopener noreferrer"}},[e._v("vote signer key"),o("OutboundLink")],1),e._v('. This allows for the user who owns the primary account key to authorize a separate key that can only vote on behalf of the account. This allows for the ability to custody keys in a manner corresponding to their exposure or "warmth". Eg. the primary account private key can be kept in cold storage after authorizing the signer keys, which can be in warmer environments, and potentially more exposed to the network. See the '),o("RouterLink",{attrs:{to:"/docs/operations-manual/key-management/detailed.html"}},[e._v("key management guide")]),e._v(" for more details.")],1),e._v(" "),o("h3",{attrs:{id:"lockedgold"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#lockedgold"}},[e._v("#")]),e._v(" LockedGold")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/celo-org/celo-monorepo/blob/master/packages/protocol/contracts/governance/LockedGold.sol",target:"_blank",rel:"noopener noreferrer"}},[e._v("LockedGold.sol"),o("OutboundLink")],1),e._v(", which references Celo Gold, the deprecated name for the native token, is used as part of Celo's "),o("RouterLink",{attrs:{to:"/../../celo-codebase/protocol/proof-of-stake/"}},[e._v("proof-of-stake")]),e._v(" mechanism. Users can lock CELO by sending it to the "),o("code",[e._v("LockedGold")]),e._v(" contract after creating an account via the "),o("code",[e._v("Accounts")]),e._v(" contract as described above. This allows users to vote in validator elections, receive epoch rewards, and participate in on-chain governance.")],1),e._v(" "),o("p",[e._v("There are two ways in which users can vote:")]),e._v(" "),o("ul",[o("li",[e._v("Directly, by sending voting transactions with the same key used to lock up CELO")]),e._v(" "),o("li",[e._v("Via an authorized vote signer, which can submit voting transactions on behalf of the account with locked CELO")])]),e._v(" "),o("p",[o("code",[e._v("LockedGold")]),e._v(" has a mapping of addresses to "),o("code",[e._v("balances")]),e._v(" which is a "),o("a",{attrs:{href:"https://github.com/celo-org/celo-monorepo/blob/master/packages/protocol/contracts/governance/LockedGold.sol#L26",target:"_blank",rel:"noopener noreferrer"}},[e._v("type"),o("OutboundLink")],1),e._v(" that contains both the "),o("code",[e._v("nonvoting")]),e._v(" amount of CELO as well as "),o("code",[e._v("pendingWithdrawals")]),e._v(", which contain values corresponding to timestamps at which they can be withdrawn. The reason for the latter is because all locked CELO has an unlocking period that is "),o("a",{attrs:{href:"https://github.com/celo-org/celo-monorepo/blob/master/packages/protocol/contracts/governance/LockedGold.sol#L78",target:"_blank",rel:"noopener noreferrer"}},[e._v("set at time of contract initialization"),o("OutboundLink")],1),e._v(", which is 3 days in the Celo network's deployed "),o("code",[e._v("LockedGold")]),e._v(" contract. Hence, if users unlock CELO in tranches, multiple pending withdrawals could exist at once. Once the timestamp has eclipsed, CELO can be "),o("a",{attrs:{href:"https://github.com/celo-org/celo-monorepo/blob/master/packages/protocol/contracts/governance/LockedGold.sol#L193",target:"_blank",rel:"noopener noreferrer"}},[e._v("withdrawn back to the user's address"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"election"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#election"}},[e._v("#")]),e._v(" Election")]),e._v(" "),o("p",[e._v("Once CELO has been locked via "),o("code",[e._v("LockedGold")]),e._v(", it can then be used to vote for validator groups. "),o("a",{attrs:{href:"https://github.com/celo-org/celo-monorepo/blob/master/packages/protocol/contracts/governance/Election.sol",target:"_blank",rel:"noopener noreferrer"}},[e._v("Election.sol"),o("OutboundLink")],1),e._v(" is the contract that manages this functionality.")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("votes")]),e._v(" in this contract are tracked by a "),o("a",{attrs:{href:"https://github.com/celo-org/celo-monorepo/blob/master/packages/protocol/contracts/governance/Election.sol#L87",target:"_blank",rel:"noopener noreferrer"}},[e._v("Votes type"),o("OutboundLink")],1),e._v(" which has "),o("code",[e._v("pending")]),e._v(", "),o("code",[e._v("active")]),e._v(", and "),o("code",[e._v("total")]),e._v(" votes. Pending votes are those that have been cast for a validator group, and active votes are those that have been activated after an epoch, meaning that these votes generate voter rewards.")]),e._v(" "),o("p",[e._v("Votes are cast for a validator group using the "),o("a",{attrs:{href:"https://github.com/celo-org/celo-monorepo/blob/master/packages/protocol/contracts/governance/Election.sol#L229",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("vote")]),e._v(" function"),o("OutboundLink")],1),e._v(". This increments the "),o("code",[e._v("pending")]),e._v(" and "),o("code",[e._v("total")]),e._v(" votes in the "),o("code",[e._v("Election")]),e._v(" contract, and decrements the equivalent amount of CELO from the "),o("code",[e._v("nonvoting")]),e._v(" balance in the "),o("code",[e._v("LockedGold")]),e._v(" contract, for the associated account.")]),e._v(" "),o("p",[e._v("The "),o("a",{attrs:{href:"https://github.com/celo-org/celo-monorepo/blob/master/packages/protocol/contracts/governance/Election.sol#L263",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("activate")]),e._v(" function"),o("OutboundLink")],1),e._v(" can then be called to shift "),o("code",[e._v("pending")]),e._v(" votes into "),o("code",[e._v("active")]),e._v(" votes in a following epoch. Votes in either state can then be revoked, which decrements votes from the "),o("code",[e._v("Election")]),e._v(" contract and returns them to the "),o("code",[e._v("LockedGold")]),e._v(" balance for the associated account. Users can revoke votes at any time and this takes effect instantly.")]),e._v(" "),o("h3",{attrs:{id:"releasegold"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#releasegold"}},[e._v("#")]),e._v(" ReleaseGold")]),e._v(" "),o("p",[e._v("A common problem in other proof-of-stake protocols is the tension between wanting early token holders' balances to release over time to ensure long-term alignment, while also wanting them to be able to participate in consensus to increase the security of the network. To bridge both goals, many early token balances in the Celo network are released via the "),o("a",{attrs:{href:"https://github.com/celo-org/celo-monorepo/blob/master/packages/protocol/contracts/governance/ReleaseGold.sol",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("ReleaseGold")]),o("OutboundLink")],1),e._v(' contract. Beneficiaries of these contracts can then participate in the proof-of-stake system by staking and voting with CELO that has not yet been "released" for transfers. Please find more high level information about the '),o("code",[e._v("ReleaseGold")]),e._v(" contract "),o("RouterLink",{attrs:{to:"/docs/celo-holder-guide/release-gold.html"}},[e._v("here")]),e._v(".")],1),e._v(" "),o("p",[e._v("From a technical perspective, "),o("code",[e._v("ReleaseGold")]),e._v(' can be thought of as a "puppet" account controlled by the "puppeteer", or the beneficiary private key corresponding to the '),o("code",[e._v("beneficiary")]),e._v(" address in the contract. This beneficiary key can then authorize validator signer and vote signer keys that can then call respective functions associated with validating or voting. Most of the required function calls described above can be made by the signer keys directly to the "),o("code",[e._v("LockedGold")]),e._v(" or "),o("code",[e._v("Election")]),e._v(" contracts associated with the "),o("code",[e._v("ReleaseGold")]),e._v(" account. However, some functions in the "),o("code",[e._v("ReleaseGold")]),e._v(" contract are proxied to the underlying "),o("code",[e._v("LockedGold")]),e._v(" or "),o("code",[e._v("Election")]),e._v(" contracts, and have a separate function signature that can be called by the "),o("code",[e._v("beneficiary")]),e._v(" address. Notably:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/celo-org/celo-monorepo/blob/master/packages/protocol/contracts/governance/ReleaseGold.sol#L669",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("createAccount")]),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/celo-org/celo-monorepo/blob/master/packages/protocol/contracts/governance/ReleaseGold.sol#L525",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("authorizeVoteSigner")]),o("OutboundLink")],1),e._v(" and similar functions for other signer keys")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/celo-org/celo-monorepo/blob/master/packages/protocol/contracts/governance/ReleaseGold.sol#L469",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("lockGold")]),o("OutboundLink")],1),e._v(" and "),o("a",{attrs:{href:"https://github.com/celo-org/celo-monorepo/blob/master/packages/protocol/contracts/governance/ReleaseGold.sol#L477",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("unlockGold")]),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("Notice that all these functions have corresponding functions that are called on the underlying contract. The "),o("code",[e._v("ReleaseGold")]),e._v(" contract can then just be thought of as brokering the transaction to the correct place, when necessary.")]),e._v(" "),o("h2",{attrs:{id:"other-balance-changing-operations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#other-balance-changing-operations"}},[e._v("#")]),e._v(" Other Balance Changing Operations")]),e._v(" "),o("p",[e._v("In addition to transfers (both native and ERC-20) and locking / voting flows affecting user balances, there are also several additional Celo network features that may cause user balances to change:")]),e._v(" "),o("ul",[o("li",[e._v("Gas fee payments: the fee paid by transaction senders to use the network")]),e._v(" "),o("li",[e._v("Tobin tax: a tax on CELO transfers when the reserve balance is low and needs to be repleted")]),e._v(" "),o("li",[e._v("Epoch rewards distribution: reward payments to voters, validators, and validator groups")])]),e._v(" "),o("p",[e._v("Some of these may occur as events rather than transactions on the network, and therefore when updating balances, special attention should be paid to them.")]),e._v(" "),o("h2",{attrs:{id:"useful-tools"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#useful-tools"}},[e._v("#")]),e._v(" Useful Tools")]),e._v(" "),o("p",[e._v("Since monitoring balance changing operations is important to be able to display user balances properly, it can be helpful to use a tracing or reconciling system. "),o("a",{attrs:{href:"https://github.com/celo-org/rosetta",target:"_blank",rel:"noopener noreferrer"}},[e._v("Celo Rosetta"),o("OutboundLink")],1),e._v(" is an RPC server that exposes an API to query the Celo blockchain, obtain balance changing operations, and construct airgapped transactions. With a special focus on getting balance change operations, Celo Rosetta provides an easy way to obtain changes that are not easily queryable using the celo-blockchain RPC.")])])}),[],!1,null,null,null);t.default=n.exports}}]);