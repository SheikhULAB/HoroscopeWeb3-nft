const hre = require("hardhat"); 

async function main() {  

    const horoscopeNFT = await hre.ethers.getContractFactory("horoscopeNFT");
    const hscp = await horoscopeNFT.deploy();   
    await hscp.deployed();
	
	//since we are testing, you should mention your own Eth wallet address
    const myAddress="0x386cC7801C7c6817b2511fDD7671b473dA7d929c";
    console.log("horoscopeNFT deployed to:", hscp.address);   

    let txn = await hscp.mintNFT(myAddress, 'virgo');
    await txn.wait();

 } 

main()
    .then(() => process.exit(0))  
    .catch((error) => {    
    console.error(error);
    process.exit(1); 
 });

//  0xc958d8A007a969F9C4C4AbF31FEa2dd3fD7800cd