import React from "react";

const Weather = props =>  (

    // NOTE TO SELF: In render block you cannot use comment the traditional way
    
            <div className="weather__info">

            {/* Since JSX does not like if/ else statement, we utilized the && method below 
                left hand side of && represents condition - Right hand side is action shoudld left hand side === true */}
            {props.city && <p className="weather__key"> Location: 
                <span className="weather__value"> { props.city }</span>
                </p>
            }


            {props.country && <p className="weather__key"> Country: 
               <span className="weather__value"> { props.country } </span>
               </p>
            }
            {props.temperature && <p className="weather__key"> Temperature: 
                <span className="weather__value"> { props.temperature } </span>
                 </p>
        } 
            {props.humidity && <p className="weather__key"> Humidity:  
                <span className="weather__value"> { props.humidity } </span>
                </p>
            }
            {props.condition && <p className="weather__key"> Condition: 
                <span className="weather__value"> { props.description } </span>
                </p>
            }
            {props.error && <p className="weather__key"> {props.error}</p>}
            </div>
        ); 

export default Weather
