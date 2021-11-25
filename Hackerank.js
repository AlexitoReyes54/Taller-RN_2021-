let arr = [1,3,5,7,9]
let max = 0
let min = 0
let res = ""

arr.sort();

arr.forEach((n,i) =>{
    if (i != 0) {
        max += n
    }
})

arr.forEach((n,i) =>{
    if (i != arr.length -1) {
        min += n
    }
})

res += min
res += " "
res += max

console.log(res);
