'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { fetchProperty } from '@/Utils/request';

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

	return <div>propertyPage</div>;
};

export default propertyPage;
