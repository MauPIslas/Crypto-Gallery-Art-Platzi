function genProperties(hash){
  let valid = validKeccak256(hash)
  if (valid) {
    let number = hash.replace(/\D/g, "");
    let colorScheme = number[0];
    let half = Math.round( number.length /2);
    let invert = number.slice(-1);
    let dots= number[half];
    invert = moduleOf(invert)
    dots = moduleOf(dots)

    let result =  { colorScheme: colorScheme, invert: invert, dots: dots }
    console.log(result)
    return result

  }else{
    let message = "La entrada no fue válida"
    console.log(message)
    return {message:"La entrada no fue válida"}
  }

}

function validKeccak256(input){
  return /\b[A-Fa-f0-9]{64}\b/.test(input)
}

function moduleOf(input) {
  return (input % 2).toString();
}

genProperties('82084bf2fba02476726feb2cab2d8216eab14bc6bdd8bfb2c8161267032ecd22');


