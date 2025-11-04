import { Page } from 'pages/main';

export const meta = () => {
	return [
		{ title: 'Net Tickets Club' },
		{ content: 'DIG103 - ticket platform', name: 'description' },
	];
};

const Main = () => {
	return (
		<>
			<Page/>
		</>
	);
};

export default Main;