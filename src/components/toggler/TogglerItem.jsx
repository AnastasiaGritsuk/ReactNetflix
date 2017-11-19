import React from 'react';

export default class TogglerItem extends React.Component {
    constructor (props) {
        super(props);

        this.setSortOption = this.setSortOption.bind(this);
    }

    setSortOption () {
        this.props.onChange(this.props.option.value);
    };

    render () {
        var style = 'toggler-item';
        if (this.props.option.value === this.props.selectedValue) {
            style += ' active';
        }
        return (
            <button className={style} onClick={this.setSortOption}>{this.props.option.title}</button>
        );
    }
}
