---
description: Net_PeerCount
---

# net\_peerCount

Gets the number of peers on the network.

**Sample Curl Request**

```bash
curl -d '{
    "jsonrpc":"2.0",
    "method":"net_peerCount",
    "params":[],
    "id":1
}' -H 'Content-Type:application/json' -X POST 'http://l0.b.hmny.io:9500'
```

**Sample Curl Response**

```javascript
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0xbf"
}
```

