import React from "react";
import { Form, FormInput, FormGroup, Button, FormCheckbox } from "shards-react";

const CompoundInterestCalculator = () => {
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
        <Form>
          <FormGroup>
            <label htmlFor="#currentValue">Current Value</label>
            <FormInput
              className="calcInputField"
              id="currentValue"
              placeholder="$100.00"
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
                  checked={true}
                  id="yearMonthToggle"
                ></FormCheckbox>
                <p>month</p>
              </div>
            </div>
            <FormInput
              className="calcInputField"
              id="amountAdded"
              placeholder="$10,000.00"
            />
          </FormGroup>
          <div id="calcColumnSplit">
            <FormGroup id="yearsBlock">
              <label htmlFor="#yearsToGrow">Years to Grow</label>
              <FormInput
                className="calcInputField"
                id="yearsToGrow"
                placeholder="0"
              />
            </FormGroup>
            <FormGroup id="percentBlock">
              <label htmlFor="#percentGain">Percent Gain</label>
              <FormInput
                className="calcInputField"
                id="percentGain"
                placeholder="0.0 %"
              />
            </FormGroup>
          </div>
        </Form>
        <Button id="calcButton">CALCULATE</Button>
        <FormGroup>
          <label htmlFor="#futureValue">Future Value</label>
          <div id="futureValueDiv"></div>
        </FormGroup>
      </div>
    </div>
  );
};

export default CompoundInterestCalculator;
