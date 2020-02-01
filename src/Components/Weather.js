import React, { Component } from "react";

const Weather = props => {
  return (
    <div className="info">
      {props.temp && (
        <p className="info-key">
          
          Tempreture :<span className="info-value"> {props.temp} </span>
        </p>
      )}
      {props.city && (
        <p className="info-key">
          
          City :<span className="info-value"> {props.city} </span>
        </p>
      )}
      {props.country && (
        <p className="info-key">
          
          country :<span className="info-value"> {props.country} </span>
        </p>
      )}
      {props.humidity && (
        <p className="info-key">
          
          humidity :<span className="info-value"> {props.humidity} </span>
        </p>
      )}
      {props.desc && (
        <p className="info-key">
          
          Description <span className="info-value"> {props.desc} </span>
        </p>
      )}

      {props.error && (
        <p className="info-key">
         
          <span className="info-value"> {props.error} </span>
        </p>
      )}
    </div>
  );
};

export default Weather;
