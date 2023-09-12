# Ledger Nano S Hardware Wallet Guide

### Overview

The Nano S is a hardware wallet created by Ledger. A hardware wallet stores the private keys to Harmony tokens on a separate device, making it much harder for malicious parties to steal them. In fact, the private keys never leave the Nano S itself, so they will remain secure even if the device is connected to a compromised computer. As long as you follow best practices when using your Nano S, it is virtually impossible for an attacker to steal your funds. 

Harmony CLI \(command line interface\) tool provides support for Ledger Nano S hardware wallet. This guide specifies the related command line interfaces for sending transaction with Ledger Nano S.

### Get everything together

Using Harmony hardware wallet on the Ledger Nano S requires a few things. You will need:

* Your Ledger Nano S
* The Harmony app installed on your Nano S
* The [harmony CLI app](https://docs.harmony.one/sdk-wiki/command-line-interface/using-the-harmony-cli-tool) on your computer to talk to the Nano S
* Familiarity with your computer's command-line interface \(CLI\).

### Set up your Ledger Nano S

_Let's make sure your hardware wallet ready to use._

1. [Initialize](https://support.ledgerwallet.com/hc/en-us/articles/360000613793) your Ledger Nano S. This gets the hardware wallet set up and ready to use.

{% embed url="https://youtu.be/JlojlZiVK8E" %}



 2. Download [Ledger Live](https://support.ledgerwallet.com/hc/en-us/articles/360006395553/) onto your computer. Ledger Live is the app you use to manage your Ledger device.  Please follow the official installation instruction [here](https://support.ledger.com/hc/en-us/articles/360006395553). 

3.  [Install the latest firmware](https://support.ledgerwallet.com/hc/en-us/articles/360002731113) on your Nano S. This ensures compatibility with the Harmony app.

{% embed url="https://youtu.be/\_5CymmI4BTQ" %}



At this point, you're ready to install apps on your Ledger Nano S. Remember to store your 24-word recovery phrase in a safe place, because you'll need it to recover your funds if your device is lost or damaged.

### Install Ledger Nano S Firmware In Debugging Mode

_This is ONLY for wallet developers / testers. Other users please download firmware through Ledger Live._

1. Download Ledger firmware app.hex from [here](https://s3-us-west-1.amazonaws.com/pub.harmony.one/release/ledger_firmware/app.hex) .
2. Download firmware map file app.map from [here](https://s3-us-west-1.amazonaws.com/pub.harmony.one/release/ledger_firmware/app.map).
3. Set up the python loader 

```text
[sudo] pip install -U setuptools
[sudo] pip install virtualenv

#linux dependencies for ledgerblue module  
#sudo apt install libudev1 libudev-dev libusb-1.0-0-dev

virtualenv -p python3 venv
source venv/bin/activate
pip install ledgerblue
or pip install git+https://github.com/LedgerHQ/blue-loader-python.git 
```

    4.  Run the following command to load the firmware to Ledger Nano S. 

```text
sudo ./venv/bin/python -m ledgerblue.loadApp --appFlags 0x40 --path "44'/1023'"  --curve secp256k1 --tlv --targetId 0x31100004 --delete --fileName app.hex --appName One --appVersion 0.0.1 --dataSize `cat app.map |grep _nvram_data_size | tr -s ' ' | cut -f2 -d' '` --icon 01ffffff00ffffff00ffffffffffffc7e1bbcdbbddbbcdbbc50bd8a3ddbbddbbddb3edc7e3ffffffff
```

### Display the Harmony ONE address for Ledger Nano S

As Ledger Nano S is connected to PC/Mac through USB,   super user's permission is needed to open the USB.   To use the Ledger Nano S hardware wallet,  run harmony CLI **under sudo** and ****use command **keys list --ledger**

```text
$ sudo LD_LIBRARY_PATH=lib ./hmy keys list --ledger 
```

An example session is shown below.  Please note that you will have to confirm the address displayed on Ledger Nano S LED screen.


After running the keys command with --ledger option, the following GUI will be displayed on Ledger Nano S LED screen:

![](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LlYdMT-Wp5uYwcF_tMW%2F-Lp17W8qGssyWUeQC8Hm%2F-Lp1QqkoLZa7pg6QMFeO%2F1assets_-LlYdMT-Wp5uYwcF_tMW.jpg?alt=media&token=32fe24fd-f99c-48d3-84a6-48e1e3664fc6)

There are two buttons on top of Ledger Nano, click the right one to continue \(or click the left one to cancel\). After that, the following address will be shown on Ledger Nano S LED screen:‌

![](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LlYdMT-Wp5uYwcF_tMW%2F-Lp17W8qGssyWUeQC8Hm%2F-Lp1QtQgDJ6cR36TkYqq%2F2.jpg?alt=media&token=3c767945-33b3-432f-a959-faaba7f3d010)

As the address is longer than the LED screen, you can use the top two button to shift the address display to the left or side right side. Click both buttons to confirm the address and it should be same as displayed on PC/Mac terminal.‌

The entire process is shown in video below:

{% embed url="https://youtu.be/m5RLYGWosuk" %}

###  <a id="display-token-balance-for-ledger-nano-s"></a>

### Display token balance for Ledger Nano S <a id="display-token-balance-for-ledger-nano-s"></a>

Balance on any Harmony wallet addresses can be displayed using CLI with command **balance** using the following command line options:

```text
$ LD_LIBRARY_PATH=lib ./hmy balance --node=[server_address] [address] 
```

‌

Here \[server\_address\] is the server address for either Mainnet or Betanet \(testnet\) and \[address\] is the Harmony wallet address.‌

**Query balance on Mainnet**

```text
$ LD_LIBRARY_PATH=lib ./hmy balance --node="https://api.s0.t.hmny.io" [address] 
```

‌

#### Query balance on Betanet \(testnet\) <a id="query-balance-on-betanet-testnet"></a>

```text
$ LD_LIBRARY_PATH=lib ./hmy balance --node="https://api.s0.b.hmny.io" [address] 
```

‌

An example session is shown below. Please note that **sudo** permission is not required to query balance as it doesn't require USB operation.



### 

### Token transfer using Ledger Nano S

To send token from Ledger Nano S to another wallet account,  we need Ledger Nano S hardware to sign the transaction with private key inside Ledger Nano S hardware. The CLI command **transfer --ledger**  should be called with sudo permission: 

```d
$ sudo LD_LIBRARY_PATH=lib ./hmy transfer --ledger --node=[server_addr] \
  --chain-id=[mainnet|testnet] --from [from_addr] --to [to_addr] --amount [value] \
  --from-shard [shard_id] --to-shard [shard_id] 
```

\[from\_addr\] is the wallet address for Ledger Nano S. Please note that \[from\_addr\] must match with Ledger Nano S's address, otherwise the transaction will fail.    
\[to\_addr\] is the receiver's wallet addresses.  
\[value\] is the amount of ONE tokens to transfer.  
\[shard\_id\] is a numeric value for shard ID,  the value depends on Mainnet \(0,1,2,3\) or Betanet\(testnet\) \(0,1\). 

An example transfer is shown below: 

![](../../../.gitbook/assets/image.png)

Please note that you will need to unlock Ledger Nano S, and confirm the transaction parameters on Ledger Nano S.

 The LED display on Nano S is shown as below :‌

Click the right button to start signing the transaction

![](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LlYdMT-Wp5uYwcF_tMW%2F-Lp1RBqYpGIEBEHFW8oF%2F-Lp1fC7Z1fvYt5C5Rjal%2F1.jpg?alt=media&token=82958d36-4e76-4f8a-96b0-242b5facaea8)

Check and confirm the transfer to address is correct.

![](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LlYdMT-Wp5uYwcF_tMW%2F-Lo6dy17b06JV4uSf0x9%2F-Lo6eqqLsb2bDwiMQ2rI%2F3.jpg?alt=media&token=bc38b856-e854-4c5d-97c9-a4e4b7dd3430)

Check and confirm the amount is correct.

![](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LlYdMT-Wp5uYwcF_tMW%2F-Lo6dy17b06JV4uSf0x9%2F-Lo6esS-QaHgW53hL09S%2F4.jpg?alt=media&token=ee9e5941-3b23-4d23-8395-4313c7bf2986)

Check and confirm the source shard ID is correct.

![](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LlYdMT-Wp5uYwcF_tMW%2F-Lo6dy17b06JV4uSf0x9%2F-Lo6ewoJRmrEgmFneCVn%2F5.jpg?alt=media&token=691a919a-c841-4d41-bfe9-a3d658ab2e9e)

Check and confirm the destination shard ID is correct.

![](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LlYdMT-Wp5uYwcF_tMW%2F-Lo6dy17b06JV4uSf0x9%2F-Lo6eyZo-Z2Dia94jFx3%2F6.jpg?alt=media&token=1da33a34-7a21-4572-8b36-f93e90563a73)

Detailed process is shown in video below:

{% embed url="https://youtu.be/feRpGW1seQI" %}





