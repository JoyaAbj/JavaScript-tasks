let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
 
 for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 3 === 0)
      if(numbers[i]%5===0){
      console.log(numbers[i] + ' Divi 3&5');
    } else {
        console.log (numbers [i] + 'Divi 3');
    } else if(numbers[i]%5===0){
        console.log (numbers[i] + 'Divi 5');
    } else {
        console.log (numbers[i])
    }
}