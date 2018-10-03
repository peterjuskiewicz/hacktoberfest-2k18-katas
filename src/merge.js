export const merge = (...args) => {

  if(args.length === 0){
    return null;
  }
  if(args.length === 1){
    return args[0];
  }
  if(args.length === 2){
    let object1 = args[0];
    let extended = args[1];
    for(let prop in args[0]){
        if(object1.hasOwnProperty(prop) && extended.hasOwnProperty(prop)){
            extended[prop] = [object1[prop], extended[prop]];
        }
        else if(object1.hasOwnProperty(prop)){
            extended[prop] = object1[prop];
        }
    }
    return extended;
  }
};