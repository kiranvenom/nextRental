import connectedDB from '@/config/database';
import Property from '@/models/Property';

// GET /api/properties
export const GET = async (req) => {
	try {
		await connectedDB();

		const properties = await Property.find({});

		return new Response(JSON.stringify(properties), { status: 200 });
	} catch (error) {
		console.log(error);
		return new Response('SomeThing Went Wrong', { status: 500 });
	}
};
