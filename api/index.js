var express = require('express');
var fs =  require("fs");
const { ppid } = require('process');
var app = express();
const Moralis = require("moralis").default;
const axios = require("axios")
// const { EvmChain } = require("@moralisweb3/common-evm-utils")

const moralisApi = "c8GRwXOdF3IPJsTLWHGfRVx7HI0XoQIyVsUn9hs5iUO3lnT321XXRGT91wVJjAx4"

const port = process.env.PORT || 80

///chain 
const chainId = "0x13881"

Moralis.start({
    apiKey: moralisApi,
    logLevel: 'error',
    formatEvmAddress: 'checksum',
    formatEvmChainId: 'decimal',
});

// app.use(express.static(__dirname + '/public'))

// app.get('/', function(req, res){
//     res.status(200).send(readHTML("/public/index.html"))
// });

app.get('/api/getAddressBalance/:address', async function(req, res){
    const addr = req.params.address
    console.log("Address: ", addr)
    const response = await Moralis.EvmApi.balance.getNativeBalance({
        address:addr,
        chain:chainId,
      });    
    res.status(200).send(response.toJSON())
});

app.get('/api/uploadToIPFS/:base58', async function(req, res){
    const abi = JSON.parse(atob(req.params.base58))
    const response = await Moralis.EvmApi.ipfs.uploadFolder({ abi });
    console.log(response)
    res.status(200).send(response.toJSON())
})

app.get("/api/getAccountNFT/:address", async function(req,res){
    const addr = req.params.address
    const response = await Moralis.EvmApi.nft.getWalletNFTs({
        address:addr,
        chain:chainId,
    });
    res.status(200).send(response.toJSON())
})

app.get("/api/allNft", async (req, res) => {
    try {
      const { query } = req;
  
      let NFTs;
  
      if (query.cursor) {
        NFTs = await Moralis.EvmApi.nft.getContractNFTs({
          address: query.address,
          chain: query.chain,
          cursor: query.cursor,
          limit: 20,
        });
      } else {
        NFTs = await Moralis.EvmApi.nft.getContractNFTs({
          address: query.address,
          chain: query.chain,
          limit: 20,
        });
      }
  
      const result = NFTs.raw;
  
      return res.status(200).json({ result });
    } catch (e) {
  
      console.log(e);
      console.log("something went wrong");
      return res.status(400).json();
  
    }
  });

app.get('*', function(req, res){
    res.status(404).send("404 api error.");
});

// function readHTML(end){
//     return fs.readFileSync(__dirname+end,{encoding:'utf8', flag:'r'});
// }
  
app.listen(port, () => {
    console.log(`Server running at port ${port}/`);
});

