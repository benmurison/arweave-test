const Irys = require('@irys/sdk');
require('dotenv').config()
 
const getIrys = async () => {
	const url = "https://node2.irys.xyz";
	const token = "ethereum";
 
	const irys = new Irys({
		url, // URL of the node you want to connect to
		token, // Token used for payment
		key: process.env.ETH_PRIVATE_KEY, // Private key
		// config: { providerUrl }, // Optional provider URL, only required when using Devnet
	});
	console.log(`wallet address = ${irys.address}`);
	return irys;
};
 
const checkBalance = async () => {
	const irys = await getIrys();
 
	// Get loaded balance in atomic units
	const atomicBalance = await irys.getLoadedBalance();
	// Convert balance to standard units
	const convertedBalance = irys.utils.fromAtomic(atomicBalance);
	return convertedBalance;
};
 
const checkAndPrintBalance = async () => {
	const balance = await checkBalance();
	const threshold = 0.0006; // $1 of eth @ $1500 eth
 
	if (Math.abs(balance) <= threshold) {
		console.log(`Balance ${balance} is getting too low, please fund.`);
	} else {
		console.log(`Balance ${balance} funding not yet needed.`);
	}
};
 
// Call the function immediately
checkAndPrintBalance();
 
// Then repeat every 30 minutes
// setInterval(checkAndPrintBalance, 30 * 60 * 1000);