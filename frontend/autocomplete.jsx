import React from 'react';

class AutoComplete extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputVal: ""
        }

        this.handleAuto = this.handleAuto.bind(this);
        this.handleText = this.handleText.bind(this);
    }

    handleText() {
        return (e) => {
            this.setState({ inputVal: e.target.value }, () => console.log(this.state.inputVal))
        }
    }

    handleAuto(name) {
        return (e) => {
            this.setState({ inputVal: name }, () => console.log(this.state.inputVal) )
        }
    }

    render() {
        const names = this.props.names;
        console.log(this.state.inputVal);

        const filtered = names.filter((name, i) => {
            if (this.state.inputVal === "") {
                return name;
            } else if (name.toLowerCase().includes(this.state.inputVal.toLowerCase())) {
                return name;
            }
        })

        const wrapped = filtered.map((word, i) => {
            return (
                <li key={i} onClick={ this.handleAuto(word) }>
                    { word }
                </li>
            )
        })

        return (
            <div>
                <input type="text" onChange={ this.handleText() } value={ this.state.inputVal } />
                <ul>
                    { wrapped }
                </ul>
            </div>
        )
    }
}

export default AutoComplete;