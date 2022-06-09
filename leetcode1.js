/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    let left = 0
    let ar = [] 
    let right = numbers.length - 1 
    while (left < right) {
        let cur_sum = numbers[left] + numbers[right]
        if (cur_sum === target) {
        ar.push(left+1, right+1)
        }
        if (cur_sum < target) {
            left++
        }else {
            right--
        }
    }
    
    return ar
};