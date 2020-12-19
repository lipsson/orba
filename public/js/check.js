//initial settings 
const oBracats = ['cat', 'CAT', 'cAt'];
const cBracats = ['tac', 'TAC', 'tAc'];
const numOfSubstring = 3;

//checking any open barcats
const ckeckingAnyOpenBracats = (inputValue, oBracats) => {

  for (let o in oBracats) {
    // console.log(oBracats[o]);
    if (inputValue.includes(oBracats[o])) return true;

  }

  return false;

};

//ckeck start and end of string 
const checkingStartAndEndString = (lastBracat, currentBracat) => {
  // console.log(lastBracat);
  // console.log(currentBracat);

  let indexOfOpen = oBracats.indexOf(lastBracat);
  let indexOfClose = cBracats.indexOf(currentBracat);

  // console.log(indexOfOpen !== indexOfClose);

  if (indexOfOpen !== indexOfClose) return false;
  return true;
  
};

//checking string
const check = inputValue => {
  if (inputValue == '') return true;
  if (ckeckingAnyOpenBracats(inputValue, oBracats)) {
    
    let lastBracat;
    const stack = [];

    for (let i = 0; i < inputValue.length; i += numOfSubstring) {
      
      let currentBracat = inputValue.substring(i, i + numOfSubstring);
      let oBracatExists = oBracats.includes(currentBracat);
      let cBracatExists = cBracats.includes(currentBracat);
      
      if (!oBracatExists && !cBracatExists) return false;

      if (oBracatExists) {
        stack.push(currentBracat);

      } else if (cBracatExists && stack.length !== 0) {
        
        lastBracat = stack.pop();        
        if (!checkingStartAndEndString(lastBracat, currentBracat)) return false;

      }
      else {
        return false;

      }
    }

    if (stack.length !== 0) return false;
    return true;

  }
  return false;

};
export { check };
