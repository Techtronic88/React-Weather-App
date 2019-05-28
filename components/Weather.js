import React from "react";

const Weather = ({city, country, temperature, humidity, condition, description, error}) =>  (
            
            <div className="weather__info">

            {/* Since JSX does not like if/ else statement, we utilized the && method below */}
            {city && <p className="weather__key"> Location: 
                <span className="weather__value"> {city}</span>
                </p>
            }


            {country && <p className="weather__key"> Country: 
               <span className="weather__value"> {country} </span>
               </p>
            }
            {temperature && <p className="weather__key"> Temperature: 
                <span className="weather__value"> {temperature } </span>
                 </p>
        } 
            {humidity && <p className="weather__key"> Humidity:  
                <span className="weather__value"> {humidity} </span>
                </p>
            }
            {condition && <p className="weather__key"> Condition: 
                <span className="weather__value"> {description} </span>
                </p>
            }
            {error && <p className="weather__key"> {error}</p>}
            </div>
        ); 

export default Weather
