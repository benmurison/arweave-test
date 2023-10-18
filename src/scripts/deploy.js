// This script is intended to be run in a GitHub action, hence it has access to process.env from the repos secrets

const Irys = require('@irys/sdk');
// uncomment dot env import if running locally. It is not needed in a github action
// require('dotenv').config()
 
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
 
const uploadFolder = async () => {
	const irys = await getIrys();
 
	// Upload an entire folder
	const folderToUpload = "./build/"; // Path to website folder
	try {
		const response = await irys.uploadFolder("./" + folderToUpload, {
			indexFile: "index.html", // Your site's index file
			batchSize: 50, // Number of items to upload at once
			keepDeleted: false, // Whether to keep now deleted items from previous uploads
		}); // Returns the manifest ID
 
		console.log(`Website uploaded. Manifest ID ${response.id}`);
		console.log(`Live at https://node2.irys.xyz/${response.id}/#/`);

	} catch (e) {
		console.log("Error uploading file ", e);
	}
};

async function main(){
    await uploadFolder();
}

main()

