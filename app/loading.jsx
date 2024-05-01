'use client';
import ClipLoader from 'react-spinners/ClipLoader';

const override = {
	display: 'block',
	margin: '100px auto',
};

const loading = () => {
	return (
		<ClipLoader
			color='#3b82fc'
			loading={loading}
			cssOverride={override}
			size={150}
			aria-label='Loading Spinner'
			data-testid='loader'
		/>
	);
};

export default loading;
