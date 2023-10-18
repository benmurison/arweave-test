require('dotenv').config()
const Irys = require('@irys/sdk');

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

const fundNode = async () => {
	const irys = await getIrys();
	try {
		const fundTx = await irys.fund(irys.utils.toAtomic(0.001));
		console.log(`Successfully funded ${irys.utils.fromAtomic(fundTx.quantity)} ${irys.token}`);
	} catch (e) {
		console.log("Error uploading data ", e);
	}
};

async function main(){
    await fundNode();
}

main()