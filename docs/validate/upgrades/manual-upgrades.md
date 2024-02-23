---
sidebar_position: 4
---

# Manual Upgrades

Learn how to manually upgrade your node.

## Prerequisites

- [Install servnode](../../protocol/evmos-cli)

## 1. Upgrade the SERV version

Before upgrading the SERV version. Stop your instance of `servnode` using `Ctrl/Cmd+C`.

Next, upgrade the software to the desired release version. Check the SERV [releases page](https://github.com/servprotocolorg/serv/releases)
for details on each release.

:::danger
Ensure that the version installed matches the one needed for the network you are running (mainnet or testnet).
:::

```bash
cdserv
git fetch --all && git checkout <new_version>
make install
```

:::tip
If you have issues at this step, please check that you have the latest stable version of
[Golang](https://golang.org/dl/) installed.
:::

Verify that you've successfully installed SERV on your system by using the `version` command:

```bash
$ servnode version --long

name:serv
server_name: servnode
version: 3.0.0
commit: fe9df43332800a74a163c014c69e62765d8206e3
build_tags: netgo,ledger
go: go version go1.20 darwin/amd64
...
```

:::tip
If the software version does not match, then please check your `$PATH` to ensure the correct `servnode` is running.
:::

## 2. Replace Genesis file

:::tip
You can find the latest `genesis.json` file for mainnet or testnet in the following repositories:

- **Mainnet**: [github.com/servprotocolorg/serv](https://github.com/servprotocolorg/serv)
- **Testnet**: [github.com/servprotocolorg/serv](https://github.com/servprotocolorg/serv)
:::

Save the new genesis as `new_genesis.json`. Then, replace the old `genesis.json` located in your `config/` directory with `new_genesis.json`:

```bash
cd $HOME/.serv/config
cp -f genesis.json new_genesis.json
mv new_genesis.json genesis.json
```

:::tip
We recommend using `sha256sum` to check the hash of the downloaded genesis against the expected genesis.

```bash
cd ~/.serv/config
echo "<expected_hash>  genesis.json" | sha256sum -c
```

:::

## 3. Data Reset

:::danger
Check [here](./list-of-upgrades) if the version you are upgrading require a data reset (hard fork). If this is not the
case, you can skip to [Restart](https://docs.cosmos.network/main/modules/upgrade).
:::

Remove the outdated files and reset the data:

```bash
rm $HOME/.serv/config/addrbook.json
servnode tendermint unsafe-reset-all --home $HOME/.serv
```

Your node is now in a pristine state while keeping the original `priv_validator.json` and `config.toml`. If you had any
sentry nodes or full nodes setup before,
your node will still try to connect to them, but may fail if they haven't also
been upgraded.

:::danger
🚨 **IMPORTANT** 🚨

Make sure that every node has a unique `priv_validator.json`. **DO NOT** copy the `priv_validator.json` from an old node
to multiple new nodes. Running two nodes with the same `priv_validator.json` will cause you to [double sign](https://docs.tendermint.com/master/spec/consensus/signing.html#double-signing).
:::

## 4. Restart Node

To restart your node once the new genesis has been updated, use the `start` command:

```bash
servnode start
```
