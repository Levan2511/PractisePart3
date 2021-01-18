function validatePIN (pin) {
  if (pin.length !== 4 || pin.length !== 6) {
    return false;
  }
  
  for (let i = 0; i < pin.length; i++) {
    if (pin[i] === '-' || pin[i] === '.' || isNaN(+pin[i]) ){
      return false;
    } else return true;
  }
}