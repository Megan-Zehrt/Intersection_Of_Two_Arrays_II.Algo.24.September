// 350. Intersection of Two Arrays II



// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.









/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {

    let map = new Map()
    let results = []

    for(let i = 0; i < nums1.length; i++){

        if(map.has(nums1[i])){
            let count = map.get(nums1[i])
            map.set(nums1[i], count+1)
        }else{
            map.set(nums1[i], 1)
        }
    }

    for(let num of nums2){

        if(map.has(num) && map.get(num) > 0){

            results.push(num)
            let counter = map.get(num)
            map.set(num, counter-1)
        }
    }

    return results
    
};