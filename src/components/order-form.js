import React from "react";
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { addOrder } from '../actions/orderActions'

class OrderForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            order: '',
            amount: 1
        }
        this.addOrder = this.addOrder.bind(this);
    }
    handleChange = (e) => {
        const target = e.target
        const name = target.name
        const value = target.value
        this.setState({
           [name]:value
        })
    }
    addOrder = (e) => {
        e.preventDefault()
        this.props.addOrder(this.state)
        this.setState({
            order: '',
            amount: ''
        })
    }
    render() {
        return (
            <form onSubmit={this.addOrder}>
                <div className="form-group">
                    <label htmlFor="order">Order:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="order"
                        onChange={this.handleChange}
                        value={this.state.order}
                        placeholder="Order"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Amount:</label>
                    <input
                        className="form-control"
                        type="number"
                        name="amount"
                        onChange={this.handleChange}
                        value={this.state.amount}
                    />
                </div>
                <button className="btn btn-primary btn-block">Add</button>
            </form>
        )
    }
}
OrderForm.propTypes = {
    addOrder: PropTypes.func.isRequired
}
export default connect(
    null,
    { addOrder }
)(OrderForm);