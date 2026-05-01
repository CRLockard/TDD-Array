/**
 * @param {T[]} array - an array of elements of type T
 * @returns {T} the first element of the array
 *
 * @example
 * getFirst([1,2,3]); // 1
 * @example
 * getFirst(["a", "b", "c"]); // "a"
 * @example
 * getFirst([true,false,true]); // true
 */
export function getFirst(array) {
  return array[0];
}

/**
 * @param {T[]} array - an array of elements of type T
 * @returns {T} the last element of the array
 *
 * @example
 * getLast([1,2,3]); // 3
 * @example
 * getLast(["a", "b", "c"]); // "c"
 * @example
 * getLast([true,false,true]); // true
 */
export function getLast(array) {
  return array[array.length - 1];
}

/**
 * @param {T[]} array - an array of elements of type T
 * @returns {T[]} an array containing the first and last elements of the given array
 * @returns {T[]} an empty array if the input is empty
 * @returns {T[]} the same array if the input only contains one element
 *
 * @example
 * getFirstLast([1,2,3]); // [1,3]
 * @example
 * getFirstLast([]); // []
 * @example
 * getFirstLast([42]); // [42]
 */
export function getFirstLast(array) {
  let newArray = [];
  for (let i = 0; i <= 0; i++) {
    if (array.length === 0) {
      return newArray;
    } else if (array.length === 1) {
      newArray.unshift(array[i]);
    } else {
      newArray.unshift(array[i]);
      newArray.push(array[array.length - 1]);
    }
  }
  return newArray;
  // TODO
}

/**
 * @param {string} str1 - the first string
 * @param {string} str2 - the second string
 * @returns {boolean} whether the first letters of both strings are the same
 * @returns {boolean} false if either string is empty
 *
 * @example
 * sharesFirstLetter("apple", "apricot"); // true
 * @example
 * sharesFirstLetter("banana", "berry"); // true
 * @example
 * sharesFirstLetter("cat", "dog"); // false
 */
export function sharesFirstLetter(str1, str2) {
  let firstCharacterStringOne = str1[0];
  let firstCharacterStringTwo = str2[0];

  if (str1.length === 0 && str2.length === 0) {
    return false;
  } else if (firstCharacterStringOne === firstCharacterStringTwo) {
    return true;
  } else {
    return false;
  }

  // TODO
}

/**
 * @param {number[]} numbers - an array of numbers
 * @returns {number[]} a new array with each number multiplied by 5
 *
 * @example
 * quintuple([1,2,3]); // [5,10,15]
 * @example
 * quintuple([0,4]); // [0,20]
 * @example
 * quintuple([]); // []
 */
export function quintuple(numbers) {
  let newArray = [];
  for (let i = 0; i <= numbers.length - 1; i++) {
    newArray.push(numbers[i] * 5);
  }
  return newArray;
}

/**
 * There is a general rule for making nouns plural in English:
 * Add "s" to the end of the word, unless the word already ends with "s",
 * in which case add "es" instead.
 *
 * Hint: Look up `endsWith` on MDN!
 *
 * @param {string[]} - an array of singular nouns
 * @returns {string[]} an array of the plural forms of those nouns
 *
 * @example
 * pluralize(["cat", "dog"]); // ["cats", "dogs"]
 * @example
 * pluralize(["bus", "glass"]); // ["buses", "glasses"]
 * @example
 * pluralize([]); // []
 */
export function pluralize(words) {
  let pluralArray = [];
  for (let i = 0; i <= words.length - 1; i++)
    if (!words[i].endsWith("s")) {
      let word = "";
      word = words[i];
      word += "s";
      pluralArray.push(word);
    } else if (words[i].endsWith("s")) {
      let word = "";
      word = words[i];
      word += "e";
      word += "s";
      pluralArray.push(word);
    }
  return pluralArray;
}

/**
 * @param {boolean[]} attendance - an array representing student attendance
 * - true = student is present
 * - false = student is absent
 * @returns {number} the number of students present
 *
 * @example
 * countAttendance([true, false, true]); // 2
 * @example
 * countAttendance([false, false]); // 0
 * @example
 * countAttendance([]); // 0
 */
export function countAttendance(attendance) {
  let presentStudent = 0;
  if (attendance.length === 0) {
    return 0;
  } else if (attendance.length > 0) {
    for (let i = 0; i <= attendance.length - 1; i++) {
      if (attendance[i] === true) {
        presentStudent++;
      }
    }
  }
  return presentStudent;
}

/**
 * @param {string[]} sentence - an array of words
 * @returns {string} the first longest word in the sentence
 * @returns {null} null if the sentence is empty
 *
 * @example
 * getLongestWord(["sphinx", "of", "black", "quartz"]); // "sphinx"
 * @example
 * getLongestWord([]); // null
 * @example
 * getLongestWord(["a", "ab", "abc"]); // "abc"
 */
export function getLongestWord(sentence) {
  let longestWord = "";
  if (sentence.length === 0) {
    return null;
  } else {
    for (let i = 0; i <= sentence.length - 1; i++)
      if (sentence[i].length > longestWord.length) {
        longestWord = sentence[i];
      }
  }
  return longestWord;
}

/**
 * @param {string[]} playlist - an array of song titles
 * @param {string} song - the name of a song to find
 * @returns {number} the index of the song in the playlist
 * @returns {number} -1 if the song is not found
 *
 * @example
 * findSong(["Midnight Drive", "Golden Skies", "Neon Dreams"], "Golden Skies"); // 1
 * @example
 * findSong(["Midnight Drive", "Golden Skies", "Neon Dreams"], "Afternoon Drink"); // -1
 * @example
 * findSong([], "Midnight Drive"); // -1
 */
export function findSong(playlist, song) {
  let isSongInPlaylist = 0;
  if (playlist.length === 0) {
    return -1;
  } else {
    for (let i = 0; i <= playlist.length - 1; i++) {
      if (playlist[i] === song) {
        isSongInPlaylist = i;
        return isSongInPlaylist;
      } else if (playlist[i] !== song) {
        isSongInPlaylist = -1;
      }
    }
    return isSongInPlaylist;
  }
}
/**
 * @param {string[][]} map - a 2D array in which each element is a string that
 *  represents something in the area, such as "tree", "pigeon", "lamp", or "guard"
 * @returns {number[]} the [x,y] coordinates of the "spy"
 * @returns {null} null if the spy is not found
 *
 * @example
 * findSpy([["tree","spy"],["lamp","guard"]]); // [0,1]
 * @example
 * findSpy([["tree","lamp"],["spy","guard"]]); // [1,0]
 * @example
 * findSpy([["tree","lamp"],["pigeon","guard"]]); // null
 */
export function findSpy(map) {
  // TODO
}
