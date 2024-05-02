'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { fetchProperty } from '@/Utils/request';
import PropertyHeaderImage from '@/components/PropertyHeaderImage';
import PropertyGoBack from '@/components/PropertyGoBack';
import PropertyInfo from '@/components/PropertyInfo';
import Spinner from '@/components/Spinner';

const propertyPage = () => {
	const { id } = useParams();
	const [property, setProperty] = useState(null);
	const [loading, setLoading] = useState(true);

	const getProperty = async () => {
		if (!id) return null;

		try {
			const property = await fetchProperty(id);
			setProperty(property);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (property === null) {
			getProperty();
		}
	}, [id, property]);

	if (!property && !loading) {
		return <h1>Property Not Found</h1>;
	}

	return (
		<>
			{loading && <Spinner />}
			{!loading && property && (
				<>
					<PropertyHeaderImage image={property.images[0]} />
					<PropertyGoBack />
					<PropertyInfo property={property} />
				</>
			)}
		</>
	);
};

export default propertyPage;
