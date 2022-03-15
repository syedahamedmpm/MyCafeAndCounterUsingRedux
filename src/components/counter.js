import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

class Counter extends React.Component{
    incCount = (e) => {
        e.preventDefault()
        this.props.incCount(this.state)
    }
    decCount = (e) => {
        e.preventDefault()
        this.props.decCount(this.state)
    }
    render(){
        return(
            <div>
                
                <p>The Count is {this.props.counters}</p>
                <button className="btn btn-primary" onClick={this.incCount} >+</button>
                <button className="btn btn-primary" onClick={this.decCount}>-</button>
            </div>
        )
    }
}
Counter.propTypes = {
    count : PropTypes.number.isRequired,
    incCount: PropTypes.func.isRequired,
    decCount: PropTypes.func.isRequired
}
const mapStateToProps = (state) =>({
    counters: state.counters
})
export default connect(
    mapStateToProps,
    null
) (Counter);