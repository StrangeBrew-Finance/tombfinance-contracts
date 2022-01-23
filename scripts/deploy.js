import { ethers, run } from 'hardhat';

import deployer from '../.secret';

// WFTM address 
const taxRate = '0';
const taxCollectorAddress = '0x3764eeBcFbEE9dA588213B48bff90D6da852C79E';


async function main() {
  await run('compile');
  const Tomb = await ethers.getContractFactory('Tomb');
  const Tomb = await Tomb.deploy(taxRate,taxCollectorAddress);

  console.log(`Tomb deployed to ${Tomb.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
