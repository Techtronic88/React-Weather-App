import React, { Component } from "react";

class Weather extends Component {

    // NOTE TO SELF: In render block you cannot use comment the traditional way
    render() {
        return (
            <div>

            {/* Since JSX does not like if/ else statement, we utilized the && method below 
                left hand side of && represents condition - Right hand side is action shoudld left hand side === true */}
            {this.props.city && <p> Location: { this.props.city }</p>}
            {this.props.country && <p> Country: { this.props.country } </p>}
            {this.props.temperature && <p> Temperature: { this.props.temperature } </p>} 
            {this.props.humidity && <p> Humidity:  { this.props.humidity }</p>}
            {this.props.condition && <p> Condition: { this.props.description }</p>}
            {this.props.error && <p> {this.props.error}</p>}
            </div>
        );
    }
}

export default Weather
