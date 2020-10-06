(window.webpackJsonp=window.webpackJsonp||[]).push([[377],{724:function(e,t,a){"use strict";a.r(t);var n=a(42),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"node-upgrades"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-upgrades"}},[e._v("#")]),e._v(" Node Upgrades")]),e._v(" "),a("p",[e._v("When a new version of the Celo node is available, you can follow this guide to upgrade.")]),e._v(" "),a("h2",{attrs:{id:"when-an-upgrade-is-required"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#when-an-upgrade-is-required"}},[e._v("#")]),e._v(" When an upgrade is required")]),e._v(" "),a("p",[e._v("Upgrades to the Celo node software will often be optional improvements, such as improvements to performance, new useful features, and non-critical bug fixes.")]),e._v(" "),a("p",[e._v("Occasionally, they may be required when the upgrade is necessary to continue operating on the network, such as hard forks, or critical bug fixes. Required upgrades are enforced by setting the via a minimum client version number stored on-chain, which may be updated via "),a("RouterLink",{attrs:{to:"/docs/celo-codebase/protocol/governance.html"}},[e._v("Governance")]),e._v(" after the client is made available.")],1),e._v(" "),a("h2",{attrs:{id:"upgrading-a-non-validating-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-a-non-validating-node"}},[e._v("#")]),e._v(" Upgrading a non-validating node")]),e._v(" "),a("p",[e._v("Use these instructions to update non-validating nodes, such as your account node or your attestation node on the Baklava testnet. Also use these instructions to upgrade your proxy node, but remember not to stop the proxy of a running validator.")]),e._v(" "),a("h3",{attrs:{id:"pull-the-latest-docker-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pull-the-latest-docker-image"}},[e._v("#")]),e._v(" Pull the latest Docker image")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("CELO_IMAGE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("us.gcr.io/celo-org/celo-node:baklava\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("NETWORK_ID")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("200110")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Baklava testnet phases 2 and 3")]),e._v("\ndocker pull "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$CELO_IMAGE")]),e._v("\n")])])]),a("h3",{attrs:{id:"stop-and-remove-the-existing-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stop-and-remove-the-existing-node"}},[e._v("#")]),e._v(" Stop and remove the existing node")]),e._v(" "),a("p",[e._v("Stop and remove the existing node. Make sure to stop the node gracefully (i.e. giving it time to shut down and complete any writes to disk) or your chain data may become corrupted.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("docker stop -t "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("60")]),e._v(" celo-fullnode\ndocker "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" celo-fullnode\n")])])]),a("h3",{attrs:{id:"start-the-new-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-the-new-node"}},[e._v("#")]),e._v(" Start the new node")]),e._v(" "),a("p",[e._v("Start the new node using "),a("code",[e._v("docker run")]),e._v(" as detailed in the appropriate section of the getting started guide. Remember to recover any environment variables, if using a new terminal, before running the documented commands.")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/docs/getting-started/running-a-full-node-in-mainnet.html#start-the-node"}},[e._v("Full node")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/docs/getting-started/running-a-validator-in-mainnet.html#start-your-accounts-node"}},[e._v("Accounts node")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/docs/getting-started/running-a-validator-in-mainnet.html#running-the-attestation-service"}},[e._v("Attestion node")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/docs/getting-started/running-a-validator-in-mainnet.html#deploy-a-proxy"}},[e._v("Proxy node")])],1)]),e._v(" "),a("h2",{attrs:{id:"upgrading-a-validating-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-a-validating-node"}},[e._v("#")]),e._v(" Upgrading a Validating Node")]),e._v(" "),a("p",[e._v("Upgrading a validating node is much the same, but requires extra care to be taken to prevent validator downtime.")]),e._v(" "),a("p",[e._v("To complete a validating node upgrade, pull the latest Docker image, as mentioned above, then execute a Validator signing key rotation, using the latest image as the new Validator signing node. A recommended procedure for key rotation is documented in the "),a("RouterLink",{attrs:{to:"/docs/operations-manual/key-management/key-rotation.html"}},[e._v("Key Management")]),e._v(" guide.")],1)])}),[],!1,null,null,null);t.default=r.exports}}]);