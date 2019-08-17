export function firstLetterCase(str) {
  return (str.charAt(0).toUpperCase() + str.slice(1));
}

export function splitTypeArray(arr) {
  return arr.join(" and ");
}


// To use these functions, import into each component as needed.
  // import {firstLetterCase} from '../../modules/helpers'

// And then invoke the function
  // {firstLetterCase(this.state.name)}