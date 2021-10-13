require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside skull drift regret office congress gesture light army gaze'; 
let testAccounts = [
"0x0490c63d23bffe4c57ea4322d0da59a44044bfdc290a6bf53dc9689a610bede3",
"0xcbf92f54be57866aba2333436c4481e4bb4a5d0ef8878c023b9bb157b65fe2a0",
"0x0e97e29d4f0d7b7f945b7567bdb0ce17e3bafc8785de5767e8e0649c35e4a262",
"0x826b742da7ccd12f78bca0e940533a0c0e4a1eda6b2d47e3e25ef99dd03ff456",
"0xb69300635e2d16d1ebec68e0a7bae28049e4237207c9675fa985bbd85763b3ad",
"0x7bbc3c06165f8bebf366e625daec413a89050a483126620569651a2c3f106e3d",
"0x56ef4a26c2c1cffbe99003763765b0bf25c8821c936b8caf991baa61b91e4a35",
"0x1e7f10c349897ce0eb596fb42230cd3a3a82d253607f1febea8cec7817e59104",
"0x0df4668b6305e417ad0455b16482849bcd0ceb395e1f450894bb17647430265f",
"0xc7d0eb6b105060f8e50a91968e41c47a60a41f1df6b36acde54bed576ace4f8e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

