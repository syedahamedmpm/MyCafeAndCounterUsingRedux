import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { incCount,decCount,resetCount } from "../actions/counterActions";

class Counter extends React.Component{
    constructor(props){
        super(props)
        this.incCount = this.incCount.bind(this);
        this.decCount = this.decCount.bind(this);
        this.resetCount = this.resetCount.bind(this);
    }
    incCount = (e) => {
        console.log("incCount")
        e.preventDefault()
        this.props.incCount(this.state)
    }
    decCount = (e) => {
        console.log("decCount")
        e.preventDefault()
        this.props.decCount(this.state)
    }
    resetCount= (e)=>{
        e.preventDefault()
        this.props.resetCount(this.state)
    }
    render(){
        return(
            <div>
                
                <h1>The Count is {this.props.counters}</h1>
                <button className="btn btn-primary" onClick={this.incCount} >+</button>
                <button className="btn btn-primary" onClick={this.decCount}>-</button>
                <button className="btn btn-primary" onClick={this.resetCount}>Reset</button>
            </div>
        )
    }
}
Counter.propTypes = {
    incCount: PropTypes.func.isRequired,
    decCount: PropTypes.func.isRequired,
    resetCount:PropTypes.func.isRequired
}
const mapStateToProps = (state) =>({
    counters: state.counters
})
export default connect(
    mapStateToProps,
    { incCount,decCount,resetCount }
) (Counter);