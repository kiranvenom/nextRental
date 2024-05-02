import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

const PropertyGoBack = () => {
	return (
		<section>
			<div className='container m-auto py-6 px-6'>
				<Link
					href='/properties'
					className='text-blue-500 hover:text-blue-600 flex items-center w-[fit-content]'>
					<div className='flex items-center gap-4'>
						<FaArrowLeft />
						<h4>Back to Properties</h4>
					</div>
				</Link>
			</div>
		</section>
	);
};

export default PropertyGoBack;
