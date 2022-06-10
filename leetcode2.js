/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var uniqueOccurrences = function(ar) {
    let d = new Map()
    for(let i = 0; i < ar.length; i++) {
        d.set(ar[i],(d.get(ar[i]) || 0) + 1)
     }
     let ms = []
     for (let num of d.values()) {ms.push(num)}
     ms.sort((a, b) => { return a - b})
     let flag = true 
     for(let i = 0; i < ms.length-1; i++) {
            if (ms[i] === ms[i+1]){
               flag = false 
               break
           }
     }
     return flag
    
};