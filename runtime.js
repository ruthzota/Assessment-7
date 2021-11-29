const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);

//insert 1.88663428 s append 14.973013 ms


// How long does it take to double every number in a given 
// array? 




// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results



// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);



perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppendTinyArray = perf.stop();  // Stops timer and save time results

// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsertTinyArray = perf.stop();

console.log('Results for the tinyArray');
console.log("insert", resultsAppendTinyArray.preciseWords);
console.log("append", resultsInsertTinyArray.preciseWords);



perf.start();                     // Starts timer
doublerAppend(smallArray);
let resultsAppendSmallArray = perf.stop();  // Stops timer and save time results

// Try it with second function
perf.start();
doublerInsert(smallArray);
let resultsInsertSmallArray = perf.stop();

console.log('Results for the smallArray');
console.log("insert", resultsInsertSmallArray.preciseWords);
console.log("append", resultsAppendSmallArray.preciseWords);




perf.start();                     // Starts timer
doublerAppend(mediumArray);
let resultsAppendMediumArray = perf.stop();  // Stops timer and save time results

// Try it with second function
perf.start();
doublerInsert(mediumArray);
let resultsInsertMediumArray = perf.stop();

console.log('Results for the mediumArray');
console.log("insert", resultsInsertMediumArray.preciseWords);
console.log("append", resultsAppendMediumArray.preciseWords);



perf.start();                     // Starts timer
doublerAppend(largeArray);
let resultsAppendLargeArray = perf.stop();  // Stops timer and save time results

// Try it with second function
perf.start();
doublerInsert(largeArray);
let resultsInsertLargeArray = perf.stop();

console.log('Results for the largeArray');
console.log("insert", resultsInsertLargeArray.preciseWords);
console.log("append", resultsAppendLargeArray.preciseWords);

/* 
The smaller [i] is, the quicker the function runs. The 'insert' run quicker than 'append'.
*/