inputTitle.addEventListener('keydown',
    (event) =>{
      getKeccak256(event)
    }
)

function getKeccak256(input){
  if(input){
    let hash = keccak256(input.target.value).toString('hex')
    genProperties(hash)
  }
  
}

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

    invert = Number(invert)
    dots = Number(dots)
 
    let result =  { colorScheme: colorScheme, invert: invert, dots: dots }
    console.log(result)
    properties = result;
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




// var properties = { colorScheme: 9, invert: false , dots: false }

// function downloadIt(){
//   var link = document.createElement('a');
//   link.download = 'imagePixel.png';
//   link.href = result.toDataURL()
//   link.click();
// }

// var darkColor;
// var redColor;
// var blueColor;
// var lightColor;

// let myURL="https://images.unsplash.com/photo-1541410702738-f87a5449e456?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80"
// let pal;
// var x = result.getContext("2d");

// var hidden = document.createElement('canvas');
// var hiddenX = hidden.getContext('2d');


// let colors = { /*dark/trim1/trim2/light/stroke*/
//   "politico": ["#03253e","#ea1c26","#5092a0","#f9de8d","#03253e"],
//   "vapor":["#2c3552","#b252a1","#66a1d2","#dcd5d5","#2c0452"],
//   "Warhol":["#2606e7", "#f72e00","#fcfd02","#3cf7fc"],
//   "CheGuevara":["#060606", "#b61d1d","#a39b90", "#6c1617", "#050102"],
//   "camo":["#28292d","#bbaf73","#507a4a","#66563c","#292a2e",],
//   "five": ["#28292d","#6632a8","#c90ec0 ","#ffabfb","#292a2e",],
//   "six": ["#28292d","#0f8583","#c1eb2a","#80ad9e","#292a2e",],
//   "seven":["#28292d","#f0793e","#f54969","#8de3af","#292a2e",],
//   'eight': ["#28292d","#156ec2","#17a6bf","#abc9b9","#292a2e",],
//   'nine': ["#28292d","#adc7b9","#569da8","#899de0","#292a2e",]
// }
// image.addEventListener('change', main(3,.8, properties.invert,properties.dots , .5, properties.colorScheme))


// function callMain () {
//   main(3,.8, properties.invert,properties.dots, 15,properties.colorScheme)
// }

// function main(size, imageScale ,invert, dots, lineWidth, colorPallete) {
//   paletteChange(colorPallete)
//   x.clearRect(0, 0, result.width, result.height);
//   x.clearRect(0,0,0,0)
//   var img = new Image();
//   img.crossOrigin = "Anonymous";
//   img.src = image.files[0] ? URL.createObjectURL(image.files[0]) : myURL;
//   console.log(img.naturalHeight, img.naturalWidth)
//   img.onload = function () {
   
//     hidden.width = img.naturalWidth
//     hidden.height = img.naturalHeight
//     hidden.getContext('2d').clearRect(0,0,hidden.width,hidden.height)
//     hiddenX.clearRect(0,0,hidden.width,hidden.height)
//     hiddenX.drawImage(img, 0, 0);    
//     result.width = img.naturalWidth * Math.max(1,imageScale)
//     result.height = img.naturalHeight * Math.max(1, imageScale)
//     buildGrid(img, size, imageScale, invert, dots,lineWidth);
//   };
  

// }
// function paletteChange(palette){
//   let arrayPallete= ['politico',
//   'vapor',
//   'Warhol',
//   'CheGuevara',
//   'camo',
//   'five',
//   'six',
//   'seven',
//   'eight',
//   'nine'

// ]
//   console.log(palette, arrayPallete[palette])
//   pal = colors[arrayPallete[palette]];
//  darkColor = pal[0];
//  redColor = pal[1];
//  blueColor = pal[2];
//  lightColor = pal[3];
//  }


// function buildGrid(img,imageSize ,imageScale,invert,dots) {  
//   console.log(img,imageSize ,imageScale,invert,dots)
//   console.log(img.naturalHeight, img.naturalWidth)
//   let size = imageSize;
//   let adjSize = Math.max(1,Math.floor(size * imageScale))
//   const ROWS = Math.floor(img.naturalHeight / size);
//   const COLS = Math.floor(img.naturalWidth / size); 


//   console.log(ROWS,COLS, img.naturalHeight, img.naturalWidth  ,img)

//   result.width = (COLS * adjSize) ;
//   result.height = ROWS *adjSize ;


//   for(let pass=0;pass<1;pass++) {
//       for (let i = 0; i < ROWS * COLS; i++) {

//       let row = Math.floor(i / COLS);
//       let col = i % COLS;
//       let buffer = hiddenX.getImageData(col * size, row * size, size, size);

//       let blockSize = 4
//       let rgb = { "r": 0, "g": 0, "b": 0 };
//       let count = 0;let j = -4;
//       while ((j += (blockSize)) < buffer.data.length) {
//         ++count;
//         rgb.r += buffer.data[j];
//         rgb.g += buffer.data[j + 1];
//         rgb.b += buffer.data[j + 2];
//       }

//       let aveBright = (rgb.r / count + rgb.g / count + rgb.b / count) / 3;
//       let isBright = aveBright > (256-90) // FIXED BRIGHT VALUE TO 90
//       let isDark = aveBright < 80 // FIXED DARK VALUE TO 80
//       let useRed = aveBright > 256 * .5 // FIXED colorMix TO .5
//       if(invert) useRed = !useRed


//       let c1 = isDark ? darkColor : isBright ? lightColor : useRed ? redColor : blueColor;
      
//       x.fillStyle = c1        
      

      
//       let X = adjSize * col
//       let Y = adjSize * row
  

//       if(!dots){
//         x[pass==1?"strokeRect":"fillRect"](X,Y, adjSize, adjSize); 
//       } else {     
//         x.moveTo(X,Y)
//         x.beginPath()
//         x.arc(X,Y,adjSize/2,0,2*Math.PI)
//         x[pass==1?"stroke":"fill"]()
//       }
        
//     }//end for each pixel
//   }//end for pass
// }//end main



