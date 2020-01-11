import React from 'react';

class Tabs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedPane: 0
        }
    }

    handleClick(i) {
        return (e) => {
            this.setState({ selectedPane: i });
        }
    }

    render() {

        const slide = this.props.selection[this.state.selectedPane];

        const header = this.props.selection.map((slide, i) => {
            const title = slide.title;
            const attr = i === this.state.selectedPane ? "active" : " ";

            return (
                <li className={ attr } key={ i } onClick={ this.handleClick(i) } >
                    { title }
                </li>
            )
        })

        return(
            <div>
                <ul>
                    <article>
                        { header }
                    </article>
                </ul>
                { slide.content }
            </div>
        )
    }
}

export default Tabs;