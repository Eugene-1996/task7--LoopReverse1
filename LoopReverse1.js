function fixTheMeerkat(arr) {
    let str = []
    for(let i = arr.length-1; i>=0; i--){
        str.push(arr[i])
    }
    return str
   }

   console.log(fixTheMeerkat(["tail", "body", "head"]))