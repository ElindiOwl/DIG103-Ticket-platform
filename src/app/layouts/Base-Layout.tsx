import { Outlet } from 'react-router';
import { Wrapper } from 'shared/ui';

const BaseLayout = () => {

	return (
		<Wrapper
			children={<Outlet/>}
			footer={<div>Footer</div>}
			header={<div>Header</div>}
		/>
	);
};

export default BaseLayout;