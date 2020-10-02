(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{400:function(e,t,i){"use strict";i.r(t);var n=i(42),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"invitations"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#invitations"}},[e._v("#")]),e._v(" Invitations")]),e._v(" "),i("h3",{attrs:{id:"overview"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" "),i("strong",[e._v("Overview")])]),e._v(" "),i("p",[e._v("To be able to use the wallet and create an account, a user must be invited through their phone number by a verified user. The inviter will send an "),i("em",[e._v("invitation code")]),e._v(" to the invitee, which they can later redeem upon downloading the app.")]),e._v(" "),i("h3",{attrs:{id:"sending-invitations"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#sending-invitations"}},[e._v("#")]),e._v(" "),i("strong",[e._v("Sending Invitations")])]),e._v(" "),i("p",[e._v("If Alice is verified, she can invite (unverified) Bob to the app by choosing him through her contacts list in the wallet or by inputting his phone number. This will generate a temporary public/private key pair and associated temporary wallet address. Alice will have to pay a small invitation fee to this temporary wallet. Finally, Alice's wallet app will auto populate a message including this temporary private key, now known as invitation code, and will prompt Alice to send this message to Bob through either SMS or WhatsApp.")]),e._v(" "),i("p",[e._v('{% hint style="info" %}\nNote: The invitation fee allows for invitees to be able to pay for verification fees and complete the '),i("RouterLink",{attrs:{to:"/docs/celo-codebase/wallet/how-the-wallet-works/verification.html"}},[e._v("verification")]),e._v(" process upon redemption of the invitation code.\n{% endhint %}")],1),e._v(" "),i("p",[e._v("Along with an invite, inviters also have the option of sending a payment. In the example above, Alice will send this payment to an "),i("RouterLink",{attrs:{to:"/docs/celo-codebase/protocol/transactions/escrow.html"}},[e._v("escrow")]),e._v(" smart contract which maps the temporary wallet address associated with the invitation code/temporary private key with the specific payment.")],1),e._v(" "),i("h3",{attrs:{id:"escrow-and-redeeming-invites"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#escrow-and-redeeming-invites"}},[e._v("#")]),e._v(" Escrow and Redeeming Invites")]),e._v(" "),i("p",[e._v("After downloading the wallet app, Bob can redeem the invitation code that Alice sent him by inputting it into the app's homepage. During the invitation code redemption process:")]),e._v(" "),i("ul",[i("li",[e._v("A new public/private key pair and corresponding wallet address is generated (which only Bob has access to). This is his permanent wallet address.")]),e._v(" "),i("li",[e._v("Bob proves ownership of the temporary wallet address since he can provide its corresponding private key (which is the invitation code).")]),e._v(" "),i("li",[e._v("Bob then transfers the invitation fee held in the temporary wallet to his newly created permanent wallet.")]),e._v(" "),i("li",[e._v("Bob is then prompted to the "),i("RouterLink",{attrs:{to:"/docs/celo-codebase/wallet/how-the-wallet-works/verification.html"}},[e._v("verification")]),e._v(" screen.")],1)]),e._v(" "),i("p",[e._v("If the invite code is attached to an "),i("RouterLink",{attrs:{to:"/docs/celo-codebase/protocol/transactions/escrow.html"}},[e._v("escrowed payment")]),e._v(" then, upon finishing verification, the payment will be automatically withdrawn and those funds will be transferred into the user’s account.")],1),e._v(" "),i("p",[e._v('{% hint style="info" %}\nNote: If a user has been invited by multiple people and they all sent payments along with the invite, the user will only be able to redeem the payment corresponding to the invite code they chose to use initially. The original senders of the rest of the unclaimed payments will be able to reclaim those funds and resend the payment to the new wallet associated to the now-verified user.\n{% endhint %}')])])}),[],!1,null,null,null);t.default=a.exports}}]);