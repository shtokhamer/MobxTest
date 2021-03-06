import React from 'react';
import { inject, observer } from "mobx-react";
//import PropTypes from 'prop-types';


let timerId;

@inject('store') // decorator pulling from Provider
@observer
class Dice extends React.Component {
  // constructor(props, context) {
  //   super(props, context);
  // }

   componentDidMount() {
     let { store } = this.props;

     timerId = setInterval(() => {
       //console.log('Timed roll');
       store.rollDice();
     }, 1000);
   }

  //  componentWillUnmount() {
  //    clearTimeout(timerId);
  //  };

  render() {
    let {store} = this.props;
    let toggleOnOffTitle = store.shouldRole ? "ON" : "OFF";
    //<input value={'Roll Dice: ' + toggleOnOffTitle}  type="button" onClick={store.toggleRollDice} />
    return (
      <div>
        <h1>{store.diceNumber}</h1>                
        <button onClick={store.toggleRollDice}>
          {'Roll Dice: ' + toggleOnOffTitle}
        </button>
      </div>
    )
  }

}

// Dice.propTypes = {
//   //store: PropTypes.object
// };

export default Dice;