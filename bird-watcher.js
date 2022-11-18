/*
    TASK 1
        -Determine the total number of birds that you counted so far.
Let us start analyzing the data by getting a high-level view. Find out how many birds you counted in total 
since you started your logs.
Implement a function totalBirdCount that accepts an array that contains the bird count per day. 
It should return the total number of birds that you counted.

    TASK 2
        -Calculate the number of visiting birds in a specific week.
Now that you got a general feel for your bird count numbers, you want to make a more fine-grained analysis.
Implement a function birdsInWeek that accepts an array of bird counts per day and a week number. 
It returns the total number of birds that you counted in that specific week. You can assume weeks are always 
tracked completely.

    TASK 3
        -Fix a counting mistake.
You realized that all the time you were trying to keep track of the birds, there was one hiding in a far corner of 
the garden. You figured out that this bird always spent every second day in your garden. You do not know exactly 
where it was in between those days but definitely not in your garden. Your bird watcher intuition also tells you 
that the bird was in your garden on the first day that you tracked in your list.
Given this new information, write a function fixBirdCountLog that takes an array of birds counted per day as an argument. 
It should correct the counting mistake and return the modified array.

*/


/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
 export function totalBirdCount(birdsPerDay) {
    let soma = 0;
    for (var i = 0; i < birdsPerDay.length; i++) {
      soma += birdsPerDay[i];
      }
    return soma;
  }
  
  /**
   * Calculates the total number of birds seen in a specific week.
   *
   * @param {number[]} birdsPerDay
   * @param {number} week
   * @returns {number} birds counted in the given week
   */
  export function birdsInWeek(birdsPerDay, week) {
    let soma = 0;
    for (var i = week*7-1; i >= week*7-7; i--) {
      soma += birdsPerDay[i];
      }
    return soma;
  }
  
  /**
   * Fixes the counting mistake by increasing the bird count
   * by one for every second day.
   *
   * @param {number[]} birdsPerDay
   * @returns {number[]} corrected bird count data
   */
  export function fixBirdCountLog(birdsPerDay) {
    for(var i = 0; i < birdsPerDay.length; i += 2){
      birdsPerDay[i] += 1; 
    }
    return birdsPerDay;
  }
  