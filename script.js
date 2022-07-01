const form = document.getElementById('some-form')


form.addEventListener('submit', e => {
 e.preventDefault()
 const values = Array.from(document.querySelectorAll("#some-form input")).reduce((acc, input)=>({...acc,[input.id]: input.value}), {});
console.log("Os valores do FORM", values)


 let mockadoDadosDoForm ={
 "A1": "1",
 "B2": "4",
 "C3": "3",
 "D4": "5",
 "A5": "4",
 "B6": "1",
 "C7": "2",
 "D8": "3",
 
 }
arrayA= []
arrayB = []
arrayC = []
arrayD = []

// ----- Pego o valor do formulário e separo o que é o que 
 for(const key in mockadoDadosDoForm){
    console.log(`${key} : ${mockadoDadosDoForm[key]}` )
    if(key[0] == 'A'){
       arrayA.push(parseInt(mockadoDadosDoForm[key]))
    }
    if(key[0] == 'B'){
        arrayB.push(parseInt(mockadoDadosDoForm[key]))
     }
     if(key[0] == 'C'){
        arrayC.push(parseInt(mockadoDadosDoForm[key]))
     }
     if(key[0] == 'D'){
        arrayD.push(parseInt(mockadoDadosDoForm[key]))
     }

 }
console.log("essa array ta zuada", arrayA)

// ----- Somar os valores dentro de cada array
 const sumA = arrayA.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);

  const sumB = arrayB.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);
  const sumC = arrayC.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);
  const sumD = arrayD.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);

  console.log(sumA, sumB, sumC, sumD)
  
  // ----- Identifico qual valor é maior q que grupo é
if(sumA >= sumB){
   return "grupo A é maior "
}else{
   return "grupo B é maior"
}

if(sumC >= sumD){
   return "grupo A é maior "
}else{
   return "grupo B é maior"
}







})
