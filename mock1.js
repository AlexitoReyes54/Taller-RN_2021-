var arr = [0,1,2 ,4, 6,5,3]
var sum 
arr.forEach((n) => {
    sum =+ n;
})
for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
}
index = Math.floor(sum  / arr.length)
console.log(index);