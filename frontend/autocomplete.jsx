import React from 'react';

class AutoComplete extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputVal: ""
        }

        this.handleAuto = this.handleAuto.bind(this);
    }

    handleText() {
        return (e) => {
            this.setState({ inputVal: e.target.value }, () => console.log(this.state.inputVal))
        }
    }

    handleAuto(name) {
        debugger
        return (e) => {
            this.setState({ inputVal: name }, () => console.log(this.state.inputVal) )
        }
    }

    render() {
        const names = this.props.names;
        console.log(this.state.inputVal);

        const result = names.filter((name, i) => {
            if (this.state.inputVal === "") {
                return (
                    <li key={i} onClick={ () => this.handleAuto(name) }> {name}</li>
                )
            } else if (name.toLowerCase().includes(this.state.inputVal.toLowerCase())) {
                return (
                    <li key={i} onClick={ () => this.handleAuto(name) } > { name }</li>
                )
            }
        })

        return (
            <div>
                HELLO
                <input type="text" onChange={ this.handleText() } value={ this.state.inputVal } />
                <ul>
                    { result }
                </ul>
            </div>
        )
    }
}

export default AutoComplete;