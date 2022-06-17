/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let max = 0
    let ctr = 0
    for(let i = 1; i < s.length; i++) {
        if (s[i-1] === s[i]) {
            ctr++
            if(ctr > max) {
                max = ctr
            }
        }else {
            ctr = 1
        }
    }
    if (max === 0) {
        return 1
    }
    if (max === 1) {
        return max+1
    }else {
        return max
    }

};