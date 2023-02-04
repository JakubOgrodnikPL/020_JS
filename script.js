const num = [1,5,13,26,48]
function times(x){
    return x*5
}
num2 = num.map(times)
console.log(num2)
num2.forEach(element => {
   if(element%2==0){
    console.log(`Liczba parzysta: ${element}`)
   } 
   else{
    console.log(`Liczba nieparzysta: ${element}`)
   }
});