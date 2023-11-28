import React, { Component } from 'react'

class Counter extends Component {
    state = {
        value: this.props.value,
    }

    handleIncrement = () => {
        this.setState({ value: this.state.value + 1 })
    }

    handleDecrement = () => {
        this.setState({ value: this.state.value - 1 })
    }

    render() {
        return (
            <div>
                {this.props.children}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={this.handleDecrement} className="btn btn-warning btn-sm m-2">Decrement</button>
                <button onClick={() => this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += (this.state.value === 0) ? 'warning' : 'primary';
        return classes;
    }

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    formatCount() {
        const { value } = this.state;
        return (value === 0) ? 'Zero' : value;
    }
}

export default Counter;