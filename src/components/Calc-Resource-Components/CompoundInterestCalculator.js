import React, { useState, useEffect } from "react";
import { Form, FormInput, FormGroup, Button, FormCheckbox } from "shards-react";
import NumberFormat from "react-number-format";

const CompoundInterestCalculator = () => {
  const [currentValue, setCurrentValue] = useState(null);
  const [timeFrame, setTimeFrame] = useState(true);
  const [compoundMultiple, setCompoundMultiple] = useState(12);
  const [amountAdded, setAmountAdded] = useState(null);
  const [numYears, setNumYears] = useState(null);
  const [percentGain, setPercentGain] = useState(null);
  const [futureValue, setFutureValue] = useState("");

  // useEffect(() => {
  //   console.log(timeFrame);
  // }, [])

  const handleToggle = () => {
    controlsEnabled = (controlsEnabled)? false : true;
    setTimeFrame(!timeFrame);
    console.log(timeFrame);
  };

  const compoundInterest = (p, t, r, n, a) => {
    const principalCompoundInterest = p * (Math.pow((1 + (r / n)), (n * t)));
    const futureSeriesValue = a * ((Math.pow((1+(r / n)), (n * t)) - 1) / (r / n)) * (1 + (r / n));
    setFutureValue(principalCompoundInterest + futureSeriesValue);
  };

  const calulateValue = (evt) => {
    evt.preventDefault();
        if (timeFrame === false) {
      setCompoundMultiple(1)
    } else {
      setCompoundMultiple(12)
    }
    compoundInterest(currentValue, numYears, (percentGain/100), compoundMultiple, amountAdded);
  };

  return (
    <div id="compInterestCalcPage">
      <div id="headingContainer">
        <h1 id="toolH1">
          Compound <br />
          Interest <br />
          Calculator
        </h1>
        <p id="calcDescription">
          Use this calculator to experiment
          <br />
          with the utility of compound interest.
          <br />
          Allowing your money to work for you
          <br />
          is a powerful tool.
        </p>
      </div>
      <div id="calculatorBody">
        <Form onSubmit={calulateValue}>
          <FormGroup>
            <label htmlFor="#currentValue">Current Value</label>
            <input
              className="calcInputField"
              id="currentValue"
              placeholder="$100.00"
              value={currentValue}
              onChange={(e) => {
                setCurrentValue(e.target.value);
                console.log(currentValue);
              }}
            />
          </FormGroup>
          <FormGroup>
            <div id="amountAddedLabel">
              <label htmlFor="#amountAdded">Amount Added</label>
              <div id="toggleBlock">
                <p id="yearLabel">year</p>
                <FormCheckbox
                  toggle
                  small
                  style={{ color: "#1b94ff" }}
                  checked={timeFrame}
                  onChange={handleToggle}
                  id="yearMonthToggle"
                ></FormCheckbox>
                <p>month</p>
              </div>
            </div>
            <input
              className="calcInputField"
              id="amountAdded"
              placeholder="$10,000.00"
              value={amountAdded}
              onChange={(e) => {
                setAmountAdded(e.target.value);
                console.log(amountAdded);
              }}
            />
          </FormGroup>
          <div id="calcColumnSplit">
            <FormGroup id="yearsBlock">
              <label htmlFor="#yearsToGrow">Years to Grow</label>
              <input
                className="calcInputField"
                id="yearsToGrow"
                placeholder="0"
                value={numYears}
                onChange={(e) => {
                  setNumYears(e.target.value);
                  console.log(numYears);
                }}
              />
            </FormGroup>
            <FormGroup id="percentBlock">
              <label htmlFor="#percentGain">Percent Gain</label>
              <input
                className="calcInputField"
                id="percentGain"
                placeholder="0.0 %"
                value={percentGain}
                onChange={(e) => {
                  setPercentGain(e.target.value);
                  console.log(percentGain);
                }}
              />
            </FormGroup>
          </div>
        </Form>
        <Button id="calcButton" onClick={calulateValue}>
          CALCULATE
        </Button>
        <FormGroup>
          <label htmlFor="#futureValue">Future Value</label>
          <NumberFormat id="futureValueDiv" value={futureValue} thousandSeparator={true} prefix={'$'} decimalScale={2}/>
        </FormGroup>
      </div>
    </div>
  );
};

export default CompoundInterestCalculator;
