(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{379:function(e,t,r){"use strict";r.r(t);var o=r(42),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"epoch-rewards"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#epoch-rewards"}},[e._v("#")]),e._v(" Epoch Rewards")]),e._v(" "),r("h2",{attrs:{id:"overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),r("p",[r("strong",[e._v("Epoch Rewards")]),e._v(" are similar to the familiar notion of block rewards in other blockchains, minting and distributing new units of CELO as blocks are produced, to create several kinds of incentives. Epoch rewards are paid in the final block of the epoch and are used to:")]),e._v(" "),r("ul",[r("li",[e._v("Distributed "),r("RouterLink",{attrs:{to:"/docs/celo-codebase/protocol/proof-of-stake/validator-rewards.html"}},[e._v("rewards for validators and validator groups")])],1),e._v(" "),r("li",[e._v("Distribute "),r("RouterLink",{attrs:{to:"/docs/celo-codebase/protocol/proof-of-stake/locked-gold-rewards.html"}},[e._v("rewards to holders of Locked CELO")]),e._v(" voting for groups that elected validators")],1),e._v(" "),r("li",[e._v("Make payments into a "),r("RouterLink",{attrs:{to:"/docs/celo-codebase/protocol/proof-of-stake/community-fund.html"}},[e._v("Community Fund")]),e._v(" for protocol infrastructure grants")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/docs/celo-codebase/protocol/proof-of-stake/community-fund.html#bolstering-the-reserve"}},[e._v("Bolster the stablecoin reserve")]),e._v(" if it is under-collateralized")],1),e._v(" "),r("li",[e._v("Make payments into a "),r("RouterLink",{attrs:{to:"/docs/celo-codebase/protocol/proof-of-stake/carbon-offsetting-fund.html"}},[e._v("Carbon Offsetting Fund")]),e._v(".")],1)]),e._v(" "),r("p",[e._v("A total of 400 million CELO will be released for epoch rewards over time. CELO is a utility and governance asset on Celo, and also the reserve collateral for Celo Dollar (and possibly in the future other whitelisted tokens). It has a fixed total supply and in the long term will exhibit deflationary characteristics like Bitcoin.")]),e._v(" "),r("p",[e._v("The total amount of disbursements is determined at the end of every epoch via a two step process. In step one, economically desired "),r("strong",[e._v("on-target rewards")]),e._v(" are derived. These are explained in the following pages. Several factors can increase or decrease the value of the payments that would ideally be made in a given epoch (including the CELO to Dollar exchange rate, the collateralization of the reserve, and whether payments to validators or groups are held back due to poor uptime or prior slashing).")]),e._v(" "),r("p",[e._v("In step two, these on-target rewards are adjusted to generate a drift towards a predefined target epoch rewards schedule. This process aims to solve the trade-off between paying reasonable rewards in terms of purchasing power and avoiding excessive over- or underspending with respect to a predefined epoch rewards schedule. More detail about the two steps is provided below.")]),e._v(" "),r("h2",{attrs:{id:"adjusting-rewards-for-target-schedule"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#adjusting-rewards-for-target-schedule"}},[e._v("#")]),e._v(" Adjusting Rewards for Target Schedule")]),e._v(" "),r("p",[e._v("There is a target schedule for the release of CELO epoch rewards. The proposed target curve (subject to change) of remaining epoch rewards declines linearly over 15 years to 50% of the initial 400 million CELO, then decays exponentially with half life of $$h = ln(2)\\times15 =10.3$$ afterwards. The choice of $$h$$ guarantees a smooth transition from the linear to the exponential regime.")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://storage.googleapis.com/celo-website/docs/epoch-rewards-schedule.png",alt:""}})]),e._v(" "),r("p",[e._v("The total "),r("strong",[e._v("actual rewards")]),e._v(" paid out at the end of a given epoch result from multiplying the total on-target rewards with a "),r("code",[e._v("Rewards Multiplier")]),e._v(". This adjustment factor is a function of the percentage deviation of the remaining epoch rewards from the target epoch rewards remaining. It evaluates to "),r("code",[e._v("1")]),e._v(" if the remaining epoch rewards are at the target and to smaller (or larger) than "),r("code",[e._v("1")]),e._v(" if the remaining rewards are below (or above, respectively) the target. This creates a drag towards the target schedule.")]),e._v(" "),r("p",[e._v("The sensitivity of the adjustment factor to the percentage deviation from the target are governable parameters: one for an underspend, one for an overspend.")])])}),[],!1,null,null,null);t.default=a.exports}}]);