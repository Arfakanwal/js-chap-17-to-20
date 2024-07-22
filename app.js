//multidimentional  array
document.write("MULTI DIMENSIONAL ARRAY"+"<br/>"+"<br/>")
var mulDimenArr=[[1,2,3,],["a,b,c,d "],["A,B,C,D "+"<br/>"+"<br/>"]];
document.write(mulDimenArr)
//matrix
document.write("MATRIX"+"<br/>"+"<br/>")
var matrix = [0, 1, 2, 3 +"<br/>" + 1, 0, 1, 2 +"<br/>" +2, 1, 0 ,1 +"<br/>"+"<br/>"];
document.write(matrix);
//counting
document.write("COUNTING"+"<br/>")
for(var i =1; i<=10;i++){
    document.write(i)
    document.write("<br/>")
}
//TABLE
/* var table = prompt("Enter a number for Table");
var lenghtOfTable = prompt("Enter lenght of Table");
var userLenght = ("");
for(var i = 1; i<=lenghtOfTable.length; i++){
document.write(userLenght)
} */
//fruits
document.write("<br/>"+"Q#5")
var fruits = ["<br/>"+"apple"+"<br/>"+"banana"+"<br/>"+"mango"+"<br/>"+"orange"+"<br/>"+"strawberry"+"<br/>"];
document.write(fruits+"<br/>")
for(var i=0; i<=fruits.length; i++){

}
document.write("Element at index 0 is apple" +"<br/>");
document.write("Element at index 1 is banana"  +"<br/>");
document.write("Element at index 2 is mango"  +"<br/>");
document.write("Element at index 3 is orange"  +"<br/>");
document.write("Element at index 4 is strawberry" +"<br/>");
//counting series
document.write("<br/>"+"Counting:"+"<br/>"+"<br/>");
document.write("1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15"+"<br/>");
document.write("<br/>"+"Reverse counting:"+"<br/>"+"<br/>");
document.write("10 , 9 , 8 , 7 , 6 , 5 , 4 , 3 , 2 , 1 ,"+"<br/>");
document.write("<br/>"+"Even:"+"<br/>"+"<br/>");
document.write("0 , 2 , 4 , 6 , 8 , 10 , 12 , 14 , 16 , 18 , 20"+"<br/>");
document.write("<br/>"+"Odd:"+"<br/>"+"<br/>");
document.write("1 , 3 , 5 , 7 , 9 , 11 , 13 ,  15 , 17 , 19"+"<br/>");
document.write("<br/>"+"Series:"+"<br/>"+"<br/>");
document.write("2k , 4k , 6k , 8k , 10k , 12k , 14k , 16k , 18k , 20k"+"<br/>"+"<br/>");
//Q#8
document.write("Largest Number:"+"<br/>"+"<br/>")
var numbers = [24, 53, 78, 91, 12];
document.write(numbers+"<br/>"+"<br/>")
var largestNumber = numbers[0];
for(var i = 1; i < numbers.length; i++){
    if(numbers[i] > largestNumber){
        largestNumber=numbers[i]
    }
}
document.write("The largest number in the array is: " ,largestNumber+"<br/>"+"<br/>");

//Q#9 smalest number
var $a=[24, 53, 78, 91,12];
var smallestNumber = $a[0];
for(var i =1; i<$a.length; i++){
    if($a[i]<smallestNumber){
        smallestNumber = $a[i];
    }
}
document.write("The smallest number in the array is: ",smallestNumber+"<br/>"+"<br/>");
//Q#10 multiple range
var multiplesOf5 =[];
for(var i = 1; i<100; i++){
    if(i % 5===0){
        multiplesOf5.push(i);
    }
}
var result = multiplesOf5.join(',');
document.write(result);



 