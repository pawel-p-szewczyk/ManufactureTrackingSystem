import * as React from 'react';
import routes from '../routes';
import { Footer } from './common/Footer';
import { Header } from './common/Header';

export default class App extends React.Component<{}, {}, {}> {
    public render() {
        return (
            <div>
                <Header />
                {routes}
                <Footer />
            </div>
        );
    }
}