export default function coinCounter(amount) {
  const remaining = Math.round(amount*100);
  function recursiveCounter(remaining,quarters, dimes, nickels, pennies){
    if (remaining/25>=1){
      return recursiveCounter(remaining-25,quarters+1,dimes, nickels, pennies);
    }
    else if (remaining/10>=1){
      return recursiveCounter(remaining-10,quarters,dimes+1, nickels, pennies);
    }
    else if (remaining/5>=1){
      return recursiveCounter(remaining-5,quarters,dimes, nickels+1, pennies);
    }
    else {
      return `${quarters} quarters, ${dimes} dimes, ${nickels} nickels, ${remaining} pennies.`
    }
  }
  if(isNaN(amount)){
    return "Error: You must enter a number";
  }
  return recursiveCounter(remaining,0,0,0,0);
} 