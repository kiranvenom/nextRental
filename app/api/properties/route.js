import connectedDB from '@/config/database';

export const GET = async (req) => {
	try {
		await connectedDB();
		return new Response(JSON.stringify({ message: 'hi' }), { status: 200 });
	} catch (error) {
		console.log(error);
		return new Response('SomeThing Went Wrong', { status: 500 });
	}
};
