import React from 'react';
import Clock from './frontend/clock';
import Tabs from './frontend/tabs';
import AutoComplete from './frontend/autocomplete';

class Root extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const selection = [
            { title: "one", content: "This is first content" },
            { title: "two", content: "This is second content" },
            { title: "third", content: "This is third content" }
        ]

        const names = [ "Kelly", "Justin", "Yuci", "Kevin", "Peter", "Stephanie", "John"];

        return (
            <div>
                <Clock />
                <Tabs selection={ selection } />
                <AutoComplete names={ names } />
                <h1>Congratulations, you did it!</h1>
            </div>
        )
    }
}

export default Root;
