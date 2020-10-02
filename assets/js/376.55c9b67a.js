(window.webpackJsonp=window.webpackJsonp||[]).push([[376],{723:function(e,t,o){"use strict";o.r(t);var s=o(42),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"monitoring"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#monitoring"}},[e._v("#")]),e._v(" Monitoring")]),e._v(" "),o("h2",{attrs:{id:"monitoring-validators-and-proxies"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#monitoring-validators-and-proxies"}},[e._v("#")]),e._v(" Monitoring Validators and Proxies")]),e._v(" "),o("h3",{attrs:{id:"logging"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#logging"}},[e._v("#")]),e._v(" Logging")]),e._v(" "),o("p",[e._v("Several command line options control logging:")]),e._v(" "),o("ul",[o("li",[o("p",[o("code",[e._v("--verbosity")]),e._v(": Sets logging verbosity. "),o("code",[e._v("3")]),e._v(" outputs logs up to "),o("code",[e._v("INFO")]),e._v(" level and is recommended. "),o("code",[e._v("4")]),e._v(" outputs up to "),o("code",[e._v("DEBUG")]),e._v(" level; "),o("code",[e._v("5")]),e._v(" is "),o("code",[e._v("TRACE")]),e._v(".")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("--vmodule")]),e._v(": Overrides this verblosity in specific modules. For example, to configure "),o("code",[e._v("TRACE")]),e._v(" level logging of consensus activity, use "),o("code",[e._v("consensus/istanbul/*=5")]),e._v(".")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("--consoleoutput")]),e._v(": Sends output to the given path, or to "),o("code",[e._v("stdout")]),e._v(".")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("--consoleformat")]),e._v(": Formats logs for easy viewing in a terminal ("),o("code",[e._v("term")]),e._v("), or as structured JSON ("),o("code",[e._v("json")]),e._v(").")])])]),e._v(" "),o("p",[e._v("Useful messages to record or set up log-based metrics on:")]),e._v(" "),o("ul",[o("li",[o("p",[o("code",[e._v('msg="Validator Election Results"')]),e._v(": When the last block of any epoch ("),o("code",[e._v("number")]),e._v(") has been agreed, "),o("code",[e._v("elected")]),e._v(" shows whether the validator was selected in the validator election.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v('msg="Elected but didn\'t sign block"')]),e._v(": This validator was elected but did not have its signature included in the block given by "),o("code",[e._v("number")]),e._v(" (in fact, in the child's parent seal). This block could count towards downtime if 12 successive blocks are missed.")])])]),e._v(" "),o("h3",{attrs:{id:"metrics"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#metrics"}},[e._v("#")]),e._v(" Metrics")]),e._v(" "),o("p",[e._v("Celo Blockchain inherits "),o("a",{attrs:{href:"https://github.com/ethereum/go-ethereum/wiki/Metrics-and-Monitoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("go-ethereum's metrics"),o("OutboundLink")],1),e._v(" system, but additional Celo-specific metrics have been added.")]),e._v(" "),o("p",[e._v("Metrics reporting is enabled with the "),o("code",[e._v("--metrics")]),e._v(" flag.")]),e._v(" "),o("p",[e._v("Pull-based metrics are available using the "),o("code",[e._v("--pprof")]),e._v(" flag. This enables the "),o("code",[e._v("pprof")]),e._v(" debugging HTTP server, by default on "),o("code",[e._v("http://localhost:6060")]),e._v(". The "),o("code",[e._v("--pprofaddr")]),e._v(" and "),o("code",[e._v("--pprofport")]),e._v(" options can be used to configure the interface and port respectively. If the node is running inside a Docker container, you will need to set "),o("code",[e._v("--pprofaddr 0.0.0.0")]),e._v(", then on your Docker command line add "),o("code",[e._v("-p 6060:localhost:6060")]),e._v(".")]),e._v(" "),o("p",[e._v('{% hint style="warning" %}\nBe sure never to expose the '),o("code",[e._v("pprof")]),e._v(" service to the public internet.\n{% endhint %}")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://prometheus.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Prometheus"),o("OutboundLink")],1),e._v(" format metrics are available at "),o("code",[e._v("http://localhost:6060/debug/metrics/prometheus")]),e._v(".")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://golang.org/pkg/expvar/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ExpVar"),o("OutboundLink")],1),e._v(" format metrics are available at "),o("code",[e._v("http://localhost:6060/debug/metrics")]),e._v(".")]),e._v(" "),o("p",[e._v("Support for pushing metrics to "),o("a",{attrs:{href:"https://www.influxdata.com/products/influxdb-overview/",target:"_blank",rel:"noopener noreferrer"}},[e._v("InfluxDB"),o("OutboundLink")],1),e._v(" is available via "),o("code",[e._v("--metrics.influxdb")]),e._v(" and related flags. This works without the "),o("code",[e._v("pprof")]),e._v(" server.")]),e._v(" "),o("p",[e._v("Note that metric name separators differ between these endpoints.")]),e._v(" "),o("p",[e._v("All metrics are soft-state and are cleared when the process is restarted.")]),e._v(" "),o("h3",{attrs:{id:"memory-metrics"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#memory-metrics"}},[e._v("#")]),e._v(" Memory metrics")]),e._v(" "),o("p",[e._v("Memory metrics derived from "),o("a",{attrs:{href:"https://godoc.org/github.com/go-graphite/carbonzipper/mstats",target:"_blank",rel:"noopener noreferrer"}},[e._v("mstats"),o("OutboundLink")],1),e._v(":")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("system_memory_held")]),e._v(": Gauge of virtual address space allocated by the Celo Blockchain process, measured in bytes.")]),e._v(" "),o("li",[o("code",[e._v("system_memory_used")]),e._v(": Gauge of Memory in use by the Celo Blockchain process, measured as bytes of allocated heap objects.")]),e._v(" "),o("li",[o("code",[e._v("system_memory_allocs")]),e._v(": Counter for memory allocations made, measured in bytes. Consider monitoring the rate.")]),e._v(" "),o("li",[o("code",[e._v("system_memory_pauses")]),e._v(": Counter for stop-the-world Garbage Collection pauses, measured in nanoseconds. Consider monitoring the rate.")])]),e._v(" "),o("h3",{attrs:{id:"cpu-metrics"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cpu-metrics"}},[e._v("#")]),e._v(" CPU metrics")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("system_cpu_sysload")]),e._v(": Gauge of load average for the system.")]),e._v(" "),o("li",[o("code",[e._v("system_cpu_syswait")]),e._v(": Gauge of IO wait time for the system.")]),e._v(" "),o("li",[o("code",[e._v("system_cpu_procload")]),e._v(": Gauge of load average for the Celo Blockchain process.")])]),e._v(" "),o("h3",{attrs:{id:"network-metrics"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#network-metrics"}},[e._v("#")]),e._v(" Network metrics")]),e._v(" "),o("ul",[o("li",[o("p",[o("code",[e._v("p2p_peers")]),e._v(": The number of connected peers. This should remain at exactly "),o("code",[e._v("1")]),e._v(" for a proxied validator (just its proxy). It should remain at a relatively steady level for proxy nodes.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("p2p_ingress")]),e._v(": Counter for total inbound traffic, measured in bytes. Consider monitoring the rate.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("p2p_egress")]),e._v(": Counter for total outbound traffic, measured in bytes. Consider monitoring the rate.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("p2p_dials")]),e._v(": Counter for outbound connection attempts. Consider monitoring the rate.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("p2p_serves")]),e._v(": Counter for accepted inbound connection attempts. Consider monitoring the rate.")])])]),e._v(" "),o("h3",{attrs:{id:"blockchain-metrics"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#blockchain-metrics"}},[e._v("#")]),e._v(" Blockchain metrics")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("chain_inserts_count")]),e._v(": The count of insertions of new blocks into this node's chain. The rate of this metric should be close to constant at "),o("code",[e._v("0.2")]),e._v(" /second.")])]),e._v(" "),o("h3",{attrs:{id:"validator-health-metrics"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#validator-health-metrics"}},[e._v("#")]),e._v(" Validator health metrics")]),e._v(" "),o("p",[e._v("A number of metrics are tracked for the parent of the last sealed block received (i.e. this is always two fewer than the current consensus sequence):")]),e._v(" "),o("ul",[o("li",[o("p",[o("code",[e._v("consensus_istanbul_blocks_elected")]),e._v(": Counts the number of blocks for which this validator has been elected")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("consensus_istanbul_blocks_signedbyus")]),e._v(": Counts the blocks for which this validator was elected and its signature was included in the seal. This means the validator completed consensus correctly, sent a "),o("code",[e._v("COMMIT")]),e._v(", its commit was received in time to make the seal of the parent received by the next proposer, or was received directly by the next proposer itself, and so the block will not count as downtime. Consider monitoring the rate.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("consensus_istanbul_blocks_missedbyus")]),e._v(": Counts the blocks for which this validator was elected but not included in the child's parent seal (this block could count towards downtime if 12 successive blocks are missed).  Consider monitoring the rate.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("consensus_istanbul_blocks_missedbyusinarow")]),e._v(": ("),o("em",[e._v("since 1.0.2")]),e._v(") Counts the blocks for which this validator was elected but not included in the child's parent seal in a row.  Consider monitoring the gauge.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("consensus_istanbul_blocks_proposedbyus")]),e._v(": ("),o("em",[e._v("since 1.0.2")]),e._v(") Counts the blocks for which this validator was elected and for which a block it proposed was succesfully included in the chain. Consider monitoring the rate.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("consensus_istanbul_blocks_downtimeevent")]),e._v(": ("),o("em",[e._v("since 1.0.2")]),e._v(") Counts the blocks for which this validator was elected and for blocks where it is considered down (occurs when "),o("code",[e._v("missedbyusinarow")]),e._v(" is >= 12). Consider monitoring the rate.")])])]),e._v(" "),o("h3",{attrs:{id:"consensus-metrics"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#consensus-metrics"}},[e._v("#")]),e._v(" Consensus metrics")]),e._v(" "),o("ul",[o("li",[o("p",[o("code",[e._v("consensus_istanbul_core_desiredround")]),e._v(": Current desired round for this validator, i.e the round we are waiting to see a quorum of validators send "),o("code",[e._v("RoundChange")]),e._v(" messages for. Usually this value should be "),o("code",[e._v("0")]),e._v(". Desired rounds increment with each timeout, which backoff exponentially. A value of "),o("code",[e._v("5")]),e._v(" indicates consensus has stalled for more than 30 seconds. Values above that means the validator is unable to participate in quorum (either because it is disconnected, out of sync, etc, or because of network partition or failure of other validators).")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("consensus_istanbul_core_round")]),e._v(": : Current consensus round for this validator, i.e the round for which this validator has received a quorum of "),o("code",[e._v("RoundChange")]),e._v(" messages. Usually this value should be "),o("code",[e._v("0")]),e._v(". If this value is less than "),o("code",[e._v("consensus_istanbul_core_desiredround")]),e._v(" the validator is not connected to a quorum of other validators that are also unable to participate (for instance, they did see a proposed block, but this validator did not). If it is equal, it means the validator remains connected to a quorum of other validators but cannot agree on a block.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("consensus_istanbul_core_sequence")]),e._v(": Current consensus sequence number, i.e the block number currently being proposed.")])])]),e._v(" "),o("h3",{attrs:{id:"network-consensus-health-metrics"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#network-consensus-health-metrics"}},[e._v("#")]),e._v(" Network consensus health metrics")]),e._v(" "),o("ul",[o("li",[o("p",[o("code",[e._v("consensus_istanbul_blocks_totalsigs")]),e._v(": The number of validators whose signatures were included in the child's parent seal. This can be used to determine how many validators are up and contributing to consensus. If this number falls towards two thirds of validator set size, network block production is at risk.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("consensus_istanbul_blocks_missedrounds")]),e._v(": Sum of the "),o("code",[e._v("round")]),e._v(" included in the "),o("code",[e._v("parentAggregatedSeal")]),e._v(" for the blocks seen. That is, the cumulative number of consensus round changes these blocks needed to make to get to this agreed block. This metric is only incremented when a block is succesfully produced after consensus rounds fails, indicating down validators or network issues.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("consensus_istanbul_blocks_missedroundsasproposer")]),e._v(": ("),o("em",[e._v("since 1.0.2")]),e._v(") A meter noting when this validator was elected and could have proposed a block with their signature but did not. In some cases this could be required by the Istanbul BFT protocol.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("consensus_istanbul_blocks_validators")]),e._v(": ("),o("em",[e._v("since 1.0.2")]),e._v(") Total number of validators eligible to sign blocks.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("consensus_istanbul_core_consensus_count")]),e._v(": Count and timer for succesful completions of consensus (Use "),o("code",[e._v("quantile")]),e._v(" tag to find percentiles: "),o("code",[e._v("0.5")]),e._v(", "),o("code",[e._v("0.75")]),e._v(", "),o("code",[e._v("0.95")]),e._v(", "),o("code",[e._v("0.99")]),e._v(", "),o("code",[e._v("0.999")]),e._v(")")])])]),e._v(" "),o("h3",{attrs:{id:"management-apis"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#management-apis"}},[e._v("#")]),e._v(" Management APIs")]),e._v(" "),o("p",[e._v("Celo blockchain inherits and extends go-ethereum's Javascript console, exposing "),o("a",{attrs:{href:"https://geth.ethereum.org/docs/rpc/server",target:"_blank",rel:"noopener noreferrer"}},[e._v("management APIs"),o("OutboundLink")],1),e._v(" and "),o("a",{attrs:{href:"https://github.com/ethereum/wiki/wiki/JavaScript-API",target:"_blank",rel:"noopener noreferrer"}},[e._v("web3 DApp APIs"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("Connect a client using a variant of the "),o("code",[e._v("attach")]),e._v(" command line option:")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("geth attach --datadir DATADIR\ngeth attach ipc:"),o("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("PATH")]),e._v("/TO/geth.ipc\ngeth attach http://localhost:8545\ngeth attach ws://localhost:8546\n")])])]),e._v(" "),o("h2",{attrs:{id:"monitoring-attestation-service"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#monitoring-attestation-service"}},[e._v("#")]),e._v(" Monitoring Attestation Service")]),e._v(" "),o("p",[e._v("It is also important to "),o("RouterLink",{attrs:{to:"/docs/operations-manual/attestation-service.html#monitoring"}},[e._v("monitor Attestation Service")]),e._v(" and the full node that it depends on.")],1),e._v(" "),o("h2",{attrs:{id:"community-moniting-tools"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#community-moniting-tools"}},[e._v("#")]),e._v(" Community Moniting Tools")]),e._v(" "),o("h3",{attrs:{id:"pretoria-research-lab-mainnet-signed-blocks-map"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pretoria-research-lab-mainnet-signed-blocks-map"}},[e._v("#")]),e._v(" "),o("a",{attrs:{href:"https://cauldron.pretoriaresearchlab.io/rc1-block-map",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pretoria Research Lab Mainnet Signed Blocks Map"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("Shows current and historic data on validator signatures collected in each block on Mainnet.")]),e._v(" "),o("p",[o("em",[e._v("Please raise a Pull Request against "),o("a",{attrs:{href:"https://github.com/celo-org/celo-monorepo/blob/master/packages/docs/celo-holder-guide/voting-validators.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("this page"),o("OutboundLink")],1),e._v(" to add/amend details of any community services!")])])])}),[],!1,null,null,null);t.default=a.exports}}]);