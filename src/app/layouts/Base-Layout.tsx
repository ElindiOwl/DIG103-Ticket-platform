import { Wrapper } from 'shared/ui';

import { Footer, Header, Main } from './components';

const BaseLayout = () => {

	return (
		<Wrapper
			children={<Main/>}
			footer={<Footer/>}
			header={<Header/>}
		/>
	);
};

export default BaseLayout;