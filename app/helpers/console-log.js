import Ember from 'ember';

export function consoleLog(params/*, hash*/) {
  console.log(params);
}

export default Ember.Helper.helper(consoleLog);
