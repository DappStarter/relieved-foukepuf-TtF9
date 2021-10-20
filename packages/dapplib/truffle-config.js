require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom slab green rare remain social install forest foster twelve'; 
let testAccounts = [
"0x9c44fb7c7f48082ffcccfb8093ffbb32f85d3946ff59a4f7b0a38b42ccf9e812",
"0x884c1a737d20f88fb73bfc3fc40e6f37937e7d2ba087075fe2d1697706daa747",
"0x07ee3ce416bd4fb656e6253900039a685b9c75cfbcd4b4bd8e67651afd757690",
"0xfafb741755047bc3adef0119c0e9edf7a64e62c1f372af73716e8a1b46662315",
"0xe73bd7d2454c558eb66f87617b665c25400376a9c23fea6031108bec9fb7d61a",
"0xe5b5848a85f36d66b9b485efe81b8e2fd9d45e35d7217466569425d2088359e6",
"0xc5aaac7bb92266c57209d95da0d6af4c1a1eb8e61e1d493c483f93c4ed5cc0a1",
"0x807b30b916e13f67a329518a8e9dca31cfc675e5bdf0ecd42dd1543d712d44fd",
"0xe7ba187ec9a5936ec330a9e81577d1b32c6cee6959756efa44e20c1a5a90a334",
"0xec1aa10ee4cfb95e5576f3bfa8a5eb88fcb456b24ec16a4e5a9bc98df65fdd05"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


