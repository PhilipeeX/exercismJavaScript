/*  
-TASK 1
Retrieve a card from a stack

-TASK 2
Exchange a card in the stack

-TASK 3
Insert a card at the top of the stack

-TASK 4
Remove a card from the stack

-TASK 5
Remove the top card from the stack

-TASK 6
Insert a card at the bottom of the stack

-TASK 7
Remove a card from the bottom of the stack

-TASK 8
Check the size of the stack
*/






/**
 * Retrieve card from cards array at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number} the card
 */
 export function getItem(cards, position) {
    return cards[position];
  }
  
  /**
   * Exchange card with replacementCard at the 0-based position
   *
   * @param {number[]} cards
   * @param {number} position
   * @param {number} replacementCard
   *
   * @returns {number[]} the cards with the change applied
   */
  export function setItem(cards, position, replacementCard) {
    cards[position] = replacementCard
    return cards;
  }
  
  /**
   * Insert newCard at the end of the cards array
   *
   * @param {number[]} cards
   * @param {number} newCard
   *
   * @returns {number[]} the cards with the newCard applied
   */
  export function insertItemAtTop(cards, newCard) {
    throw new Error('Implement the insertItemAtTop function');
  }
  
  /**
   * Remove the card at the 0-based position
   *
   * @param {number[]} cards
   * @param {number} position
   *
   * @returns {number[]} the cards without the removed card
   */
  export function removeItem(cards, position) {
    throw new Error('Implement the removeItem function');
  }
  
  /**
   * Remove card from the end of the cards array
   *
   * @param {number[]} cards
   *
   * @returns {number[]} the cards without the removed card
   */
  export function removeItemFromTop(cards) {
    throw new Error('Implement the removeItemFromTop function');
  }
  
  /**
   * Insert newCard at beginning of the cards array
   *
   * @param {number[]} cards
   * @param {number} newCard
   *
   * @returns {number[]} the cards including the new card
   */
  export function insertItemAtBottom(cards, newCard) {
    throw new Error('Implement the insertItemAtBottom function');
  }
  
  /**
   * Remove card from the beginning of the cards
   *
   * @param {number[]} cards
   *
   * @returns {number[]} the cards without the removed card
   */
  export function removeItemAtBottom(cards) {
    throw new Error('Implement the removeItemAtBottom function');
  }
  
  /**
   * Compare the number of cards with the given stackSize
   *
   * @param {number[]} cards
   * @param {number} stackSize
   *
   * @returns {boolean} true if there are exactly stackSize number of cards, false otherwise
   */
  export function checkSizeOfStack(cards, stackSize) {
    throw new Error('Implement the checkSizeOfStack function');
  }
  