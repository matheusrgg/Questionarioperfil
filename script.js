// const form = document.getElementById('some-form')
const button = document.getElementById('buttonModalPerfil')


button.addEventListener('click', e => { 
e.preventDefault() 
const values = Array.from(document.querySelectorAll("#some-form input")).reduce((acc, input)=>({...acc,[input.id]: input.value}), {});
console.log("Os valores do FORM", values)


 let mockadoDadosDoForm ={
 "A1": "111",
 "B2": "4",
 "C3": "9",
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
 somadaPesquisa = {
     "ColunaA" :arrayA.reduce((accumulator, value) => { return accumulator + value;}, 0),
     "ColunaB" :arrayB.reduce((accumulator, value) => { return accumulator + value;}, 0),
     "ColunaC" :arrayC.reduce((accumulator, value) => {return accumulator + value;}, 0),
     "ColunaD" :arrayD.reduce((accumulator, value) => {return accumulator + value; }, 0)
 }


  console.log(somadaPesquisa)
//-----entender esse reduce-- coloquei coluna A e B e tá percorrendo tudo
  const mairroNumero= Object.keys(somadaPesquisa).reduce((ColunaA, ColunaB) => somadaPesquisa[ColunaA] > somadaPesquisa[ColunaB] ? ColunaA : ColunaB);

  console.log(mairroNumero)

// ---- mostrar um alert com o perfil encontrado

mensagem()
function mensagem(){
   var botao = document.getElementById("p")
   var text = document.createTextNode(`Seu perfil: ${mairroNumero}`)

   botao.appendChild(text)
   

}


})
