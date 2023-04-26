
const hre = require("hardhat");

const main = async ()=> {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const unlockTime = currentTimestampInSeconds + 60;

  // const lockedAmount = hre.ethers.utils.parseEther("0.001");

  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();

  await transactions.deployed();

  console.log(
    "Transactions Deployed to:", transactions.address
  );
}

const runMain=async ()=>{
  try {
    await main();
    process.exit(0);
    
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
runMain();

// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });
