/*
-TASK 1
Get the first letter of a sentence

-TASK 2
Capitalize a word

-TASK 3
Get the last letter of a sentence

-TASK 4
Be polite
*/


/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the front door.
 *
 * @param {string} line
 * @returns {string}
 */
 export function frontDoorResponse(line) {
    return line[0];
  }
  
  /**
   * Format the password for the front-door, given the response
   * letters.
   *
   * @param {string} word the letters you responded with before
   * @returns {string} the front door password
   */
  export function frontDoorPassword(word) {
    word = word[0] + word.slice(1,word.lenght).toLowerCase();
    return word;
  }
  
  /**
   * Respond with the correct character, given the line of the
   * poem, if this were said at the back door.
   *
   * @param {string} line
   * @returns {string}
   */
  export function backDoorResponse(line) {
    line = line.trim();
    return line.slice(-1);
  }
  
  /**
   * Format the password for the back door, given the response
   * letters.
   *
   * @param {string} word the letters you responded with before
   * @returns {string} the back door password
   */
  export function backDoorPassword(word) {
    word = word[0].toUpperCase() + word.slice(1);
    return word + ', please';
  }