import connectedDB from '@/config/database';
import Property from '@/models/Property';

// GET /api/properties/:id
export const GET = async (req, { params }) => {
	try {
		await connectedDB();

		const property = await Property.findById(params.id);

		if (!property)
			return new Response('Property Not Found', { status: 404 });

		return new Response(JSON.stringify(property), { status: 200 });
	} catch (error) {
		console.log(error);
		return new Response('SomeThing Went Wrong', { status: 500 });
	}
};
