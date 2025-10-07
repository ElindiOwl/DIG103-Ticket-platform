import {Page} from 'pages/main';

export const meta = () => {
    return [
        {title: 'RRF template'},
        {content: 'Welcome to React Router!', name: 'description'},
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