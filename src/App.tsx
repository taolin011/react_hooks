import React, { FunctionComponent } from 'react';
import A from './components/A';
import B from './components/B';
interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    return (
        <div>
            <A />
            <B></B>
        </div>
    );
};

export default App;
