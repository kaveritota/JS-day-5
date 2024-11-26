//1. write a for loop to print the numbers from 1 to 20
console.log("%c Numbers from 1 to 20:","color:red;font-size:20px;");
for(var i=1;i<=20;i++){
    console.log(i);
}
console.log("-------------------------------------------------------------------------------------")
//2. squares of the numbers from 1 to 10
console.log("%c Squares of the numbers from 1 to 10:","color:blue;font-size:20px;");
for(var i=1;i<=10;i++){
    console.log(i*i);
}
console.log("-------------------------------------------------------------------------------------")
// 3.first 10 multiples of 5
console.log("%c First 10 multiples of 5:","color:red;font-size:20px");
for(var i=1;i<=10;i++){
    console.log("5","*",i,"=",i*5);
}
console.log("-------------------------------------------------------------------------------------")
//4. no's from 20-1 in reverse order
console.log("%c No's from 20 to 1 in reverse order:","color:orange;font-size:20px;");
for(var i=20;i>=1;i--){
    console.log(i);
}
console.log("-------------------------------------------------------------------------------------")
// 5.first 10 even no's in reverse order
console.log(" %c First 10 even no's in reverse order:","color:green;font-size:20px");
for(var i=20;i>=2;i-=2){
    console.log(i);
}
console.log("-------------------------------------------------------------------------------------")
//6. print each element of the array i/p:[10,20,30,40,50]
var arr=[10,20,30,40,50]
console.log("%c each element of the array:","color:blue;font-size:20px;");
for(var i=0;i<=(arr.length-1);i++){
    console.log(arr[i]);
}
console.log("-------------------------------------------------------------------------------------")
//7.print the index of each element with  it's value i/p['apple','banana','cherry']
var arr1=['apple','banana','cherry']
for(var i=0;i<=(arr1.length-1);i++){
    console.log("index",i,":",(arr1[i]));
}

