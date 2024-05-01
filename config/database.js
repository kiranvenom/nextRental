import mongoose from 'mongoose';

let connected = false;

const connectedDB = async () => {
	mongoose.set('strictQuery', true);

	if (connected) {
		console.log('MONGODB ALLREADY CONNECTED ....');
		return;
	}

	try {
		await mongoose.connect(process.env.MONGODB_URI);
		connected = true;
		console.log('MONGODB CONNECTED');
	} catch (error) {
		console.log(error);
	}
};

export default connectedDB;
