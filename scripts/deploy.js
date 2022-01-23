const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log('Deploying contracts with the account: ' + deployer.address);

  // Deploy First
    const First = await ethers.getContractFactory('FirstContract');
    const first = await First.deploy();

  // Deploy Second
    const Second = await ethers.getContractFactory('SecondContract');
    const second = await Second.deploy(first.address);

   console.log( "First: " + first.address );
   console.log( "Second: " + second.address ); 

}

main()
    .then(() => process.exit())
    .catch(error => {
        console.error(error);
        process.exit(1);
})