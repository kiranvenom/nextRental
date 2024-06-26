import PropertyCard from '@/components/PropertyCard';
import { fetchProperties } from '@/Utils/request';

const propertiesPage = async () => {
	const properties = await fetchProperties();

	properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

	return (
		<section className='px-4 py-6'>
			<div className='container-xl lg:container m-auto px-4 py-6'>
				{properties.legth === 0 ? (
					<h1>No Properties</h1>
				) : (
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
						{properties.map((propertie) => {
							return (
								<PropertyCard
									key={propertie.id}
									property={propertie}
								/>
							);
						})}
					</div>
				)}
			</div>
		</section>
	);
};

export default propertiesPage;
