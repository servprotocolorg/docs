# Introduction

## Development Environments

[JSON-RPC](https://en.wikipedia.org/wiki/JSON-RPC) is a remote procedure call protocol encoded in JSON. You can use this API to access data from the Harmony nodes. The JSON-RPC API server runs on:

| Chains | URLs |
| :--- | :--- |
| mainnet | [https://api.s1.t.hmny.io ](../../) |
| pangaea | [https://api.s1.p.hmny.io](../../) |
| betaNet | [https://api.s1.b.hmny.io](https://api.s1.b.hmny.io) |
| local | [http://localhost:9500](http://localhost:9500) |

Web sockets can also be used

| Chains | URLs |
| :--- | :--- |
| mainnet | [wss://ws.s1.t.hmny.io ](wss://ws.s1.t.hmny.io%20) |
| pangaea | [wss://ws.s1.p.hmny.io](wss://ws.s1.p.hmny.io) |
| betaNet | [wss://ws.s1.b.hmny.io](wss://ws.s1.b.hmny.io) |
| local | [wss://localhost:9800](./) |

All requests follow the standard JSON-RPC format and include 4 variables in the data object:

| Request Data Object | Example | Purpose |
| :--- | :--- | :--- |


| jsonrpc | "2.0" | Specifies version number |
| :--- | :--- | :--- |


| method | "hmy\_getBalance" | Method to be called server-side |
| :--- | :--- | :--- |


| params | \["0xD7Ff...24Cf2d", "latest"\] | Parameters for method call |
| :--- | :--- | :--- |


<table>
  <thead>
    <tr>
      <th style="text-align:left">id</th>
      <th style="text-align:left">&quot;1&quot;</th>
      <th style="text-align:left">
        <p>Echoed in response, can be used</p>
        <p>to match request to response</p>
        <p>when sending multiple requests</p>
      </th>
    </tr>
  </thead>
  <tbody></tbody>

</table>## Key Differences between Harmony and Ethereum


1. The prefix of RPC calls is different - 'hmy' is used instead of 'eth'.
2. Address format, SDK uses two, the default use checksum, it is recommended to use Bech32. has been defined in the SDK.
3. Transaction uses RLP, but adds two fields, one is shardID and the other is toShardID.
4. There are some RPC Ethereum, there is no Harmony, we will discuss it in detail during the process.

So for the JS project, you can directly modify the existing Ethereum library, or you can use the SDK package to see your engineering needs.

**The best practice is to extend the SDK's Transaction class and then add customization.**

The biggest difference is that Harmony does not use `eth_sendTransaction` and uses `eth_sendRawTransaction` to send the signed bytes, this is called `hmy_sendRawTransaction`.

