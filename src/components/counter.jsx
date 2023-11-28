import React, { Component } from 'react'

class Counter extends Component {

    componentDidUpdate(prevProps, prevState) {
        console.log('Previous Props: ', prevProps);
        console.log('Previous State: ', prevState);
    }

    componentWillUnmount() {
        console.log('Component - Unmounted');
    }

    render() {
        console.log('Counter - Renderred');

        const { counter, onIncrement, onDecrement, onDelete } = this.props
        return (
            <div>
                <span
                    className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                    onClick={() => onIncrement(counter)}
                    className="btn btn-secondary btn-sm">Increment</button>
                <button
                    onClick={() => onDecrement(counter)}
                    className="btn btn-warning btn-sm m-2">Decrement</button>
                <button
                    onClick={() => onDelete(counter.id)}
                    className="btn btn-danger btn-sm m-2">Delete</button>
            </div >
        );
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += (this.props.counter.value === 0) ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return (value === 0) ? 'Zero' : value;
    }
}

export default Counter;