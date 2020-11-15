const screenOperation = document.querySelector('.calc-operation');
const screenResult = document.querySelector('.calc-result');
const buttons = document.querySelector('.button-container');
const minimize = document.querySelector('#minimize');
const maximize = document.querySelector('#maximize-hidden');
const shape = document.querySelector('#calc-shape');

const writeOperation =  text =>{ 
    if (text == '.' && screenOperation.textContent == '0') screenOperation.textContent='0';   
    else if(screenOperation.textContent== '0') screenOperation.textContent='';
    else if (screenOperation.textContent.length > 30){
       screenResult.textContent = 'Error! you have exceed digit number'
       screenOperation.textContent = 'Error' 
    }   
    screenOperation.textContent += text;  
}
const writeResult = ()=>{
    if(screenOperation.textContent.indexOf('^')>=1){         
        solveExp();
        screenOperation.textContent+= "=";
    }
    else{
        screenResult.textContent = eval(screenOperation.textContent);
        screenOperation.textContent += ' = ';
        }
}
const resetScreen = ()=>{
    screenOperation.textContent = '0';
    screenResult.textContent = '0';
}
const writeSqrt = ()=>{
    let semiProcessedOperation = eval(screenOperation.textContent);
    let processed = Math.sqrt(parseFloat(semiProcessedOperation));
    let output = processed.toString();
    screenOperation.textContent = `√${semiProcessedOperation} =`
    screenResult.textContent = `${output}`;
}
const writeCubicrt = ()=>{
    let semiProcessedOperation = eval(screenOperation.textContent);
    let processed = Math.pow(parseFloat(semiProcessedOperation),(1/3));
    let output = processed.toString();
    screenOperation.textContent = `∛${semiProcessedOperation} =`
    screenResult.textContent = `${output}`;
}
const writeLn = ()=>{
    let semiProcessedOperation = eval(screenOperation.textContent);
    let processed = Math.log(parseFloat(semiProcessedOperation));
    let output = processed.toString();
    screenOperation.textContent = `Ln(${semiProcessedOperation}) =`
    screenResult.textContent = `${output}`;
}
const writeLog = ()=>{
    let semiProcessedOperation = eval(screenOperation.textContent);
    let processed = Math.log10(parseFloat(semiProcessedOperation));
    let output = processed.toString();
    screenOperation.textContent = `Log(${semiProcessedOperation}) =`
    screenResult.textContent = `${output}`;
}
const writePercent = ()=>{
    let semiProcessedOperation = eval(screenOperation.textContent);
    let processed = parseFloat(semiProcessedOperation)/100;
    let output = processed.toString();
    screenOperation.textContent = `${semiProcessedOperation}% =`
    screenResult.textContent = `${output}`;
}
const writeSin = ()=>{
    let semiProcessedOperation = eval(screenOperation.textContent);
    let processed = Math.sin(parseFloat(semiProcessedOperation)).toFixed(4);
    let output = processed.toString();
    screenOperation.textContent = `sin(${semiProcessedOperation}) =`
    screenResult.textContent = `${output}`;
}
const writeCos = ()=>{
    let semiProcessedOperation = eval(screenOperation.textContent);
    let processed = Math.cos(parseFloat(semiProcessedOperation)).toFixed(4);
    let output = processed.toString();
    screenOperation.textContent = `cos(${semiProcessedOperation}) =`
    screenResult.textContent = `${output}`;
}
const writeTg = ()=>{
    let semiProcessedOperation = eval(screenOperation.textContent);
    let processed = Math.tan(parseFloat(semiProcessedOperation)).toFixed(4);
    let output = processed.toString();
    screenOperation.textContent = `tg(${semiProcessedOperation}) =`
    screenResult.textContent = `${output}`;
}
const writeE = () =>{
    const constantE = Math.E.toFixed(4);
    let processed = constantE.toString();
    if(screenOperation.textContent == '0') screenOperation.textContent = `${processed}`
    else screenOperation.textContent += ` ${processed}`
}
const writePi = () =>{
    const constantPi = Math.PI.toFixed(4);
    let processed = constantPi.toString();
    if(screenOperation.textContent == '0') screenOperation.textContent = `${processed}`
    else screenOperation.textContent += ` ${processed}`
}
const writeExp = ()=>{    
    screenOperation.textContent += '^';       
}
const solveExp = ()=>{    
    const expPosition= screenOperation.textContent.indexOf('^');    
    const base = parseFloat(screenOperation.textContent.slice(0 , expPosition+1));    
    const exp = parseFloat(screenOperation.textContent.slice(expPosition+1,screenOperation.textContent.length+1));
    console.log(expPosition,base,exp)
    let output = Math.pow(base, exp);
    screenResult.textContent= output;  
}

buttons.addEventListener('click', e=>{    
        if(e.target.textContent!= '' && e.target.className != 'button-container'){
            switch (e.target.textContent){
                case '=': writeResult();break;
                case 'CLR': resetScreen();break;
                case '.': writeOperation('.');break;
                case '√': writeSqrt();break;
                case '∛': writeCubicrt();break;
                case 'ln(x)': writeLn();break;
                case 'log(x)': writeLog();break;
                case '%': writePercent();break; 
                case 'sin(x)': writeSin();break;
                case 'cos(x)' : writeCos();break;
                case 'tg(x)': writeTg();break;
                case 'Π': writePi();break;
                case 'E': writeE();break;
                case 'exp': writeExp();break;
                default: writeOperation(e.target.textContent);break;
            }   
        }
       
})

minimize.addEventListener('click',()=>{    
    shape.style.opacity = '0';    
    maximize.style.visibility = 'visible';
    maximize.style.opacity= '1'
    
})
maximize.addEventListener('click',()=>{
    shape.style.opacity = '1';    
    maximize.style.visibility = 'hidden';
    maximize.style.opacity= '0';
})
