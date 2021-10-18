# lsp-factory.js

> **⚠ WARNING: WIP **  
> not yet usable at all

Helper Library to allow simple deployments of LSP3UniversalProfiles and LSP4DigitalCertificates

# Install 

```bash
npm install  @lukso/lsp-factory.js
```

# Setup

```javascript
import { LSPFactory } from "@lukso/lsp-factory.js";
import { ethers } from "ethers";

const provider = new ethers.providers.JsonRpcProvider(
    "https://rpc.l14.lukso.network"
  );

  const signer = new ethers.Wallet(
    '0x...', // Controller Account Private Key
    provider
  );

  const lspFactory = new LSPFactory(signer, provider);
```
# Usage

### Deploying an LSP3 Account

```javascript
// Deploy LSP3 Account
const myUPAccount = await lspFactory.LSP3UniversalProfile.deploy({
    controllerAddresses: [web3.eth.accounts.wallet[0].address],
    lsp3Profile: {
      json: {
        LSP3Profile: {
          name: "My Universal Profile",
          description: "My cool Universal Profile",
          profileImage: [
            {
              width: 500,
              height: 500,
              hashFunction: "keccak256(bytes)",
              hash: "0x...", // bytes32 hex string of the image hash
              url: "ipfs://QmPLqMFHxiUgYAom3Zg4SiwoxDaFcZpHXpCmiDzxrtjSGp",
            },
          ],
          backgroundImage: [
            {
              width: 500,
              height: 500,
              hashFunction: "keccak256(bytes)",
              hash: "0x...", // bytes32 hex string of the image hash
              url: "ipfs://QmPLqMFHxiUgYAom3Zg4SiwoxDaFcZpHXpCmiDzxrtjSGp",
            },
          ],
          tags: ['Fashion', 'Design'],
          links: ['www.my-website.com'],
        },
      },
      url: "",
    },
  });
};
```

### Using Deployment events 

The `subscribe` method can be used to for real-time frontend updates.

```javascript
const profileDeploymentEvents = [];

const myUPAccount = await lspFactory.LSP3UniversalProfile.deploy({
    ...
}).subscribe({
  next: (deploymentEvent: DeploymentEvent) => {
    profileDeploymentEvents.push(deploymentEvent);
  },
  error: (error) => {
    console.error(error);
  },
  complete: () => {
    console.log(profileDeploymentEvents);
  },
});
```


# Types / Typechain

To update the types generated by [Typechain](https://github.com/ethereum-ts/TypeChain) run the following `npm` command.

```bash
npm run generate-types
```

In the [package.json](package.json) file under `scripts` there is a `post-install` hook, which also runs `generate-types` every time you install a package.
