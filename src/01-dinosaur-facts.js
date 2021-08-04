/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleDinosaurData` variable below to gain access to tickets data. This data is pulled from the `data/dinosaurs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all dinosaurs.
*/
const exampleDinosaurData = require("../data/dinosaurs");
// Do not change the line above.

/**
 * getTallestDinosaur()
 * ---------------------
 * Returns an object with the tallest dinosaur from the list. Converts from meters to feet.
 *
 * NOTE: To convert from meters to feet, multiply the meters by `3.281`.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @returns {Object} An object where the key is the name of the dinosaur and the value is the height of the dinosaur in feet.
 *
 * EXAMPLE:
 *  getTallestDinosaur(dinosaurs);
 *  //> { Brachiosaurus: 98.43 }
 */
function getTallestDinosaur(dinosaurs) {
  const tallest = {};
  if (dinosaurs.length === 0) {
    return {};
  }
  let currentDino = dinosaurs[0];
  for (let i = 0; i < dinosaurs.length; i++) {
    if (dinosaurs[i].lengthInMeters > currentDino.lengthInMeters) {
      currentDino = dinosaurs[i];
    }
  }
  tallest[currentDino.name] = currentDino.lengthInMeters * 3.281;
  return tallest;
}

/**
 * getDinosaurDescription()
 * ---------------------
 * Returns a formatted description of a dinosaur. If the dinosaur cannot be found, returns an error message.
 *
 * NOTE: Carefully view the test output and example below to see how the returned string should be formatted.
 *
 * NOTE: The `\n` represents a new line in text.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {string} id - The unique identifier for the dinosaur.
 * @returns {string} A detailed description of the dinosaur.
 *
 * EXAMPLE:
 *  getDinosaurDescription(dinosaurs, "U9vuZmgKwUr");
 *  //> "Xenoceratops (ZEE-no-SEH-ruh-tops)\nXenoceratops had horns and a bony frill with elaborate ornamentation of projections, knobs, and spikes. It lived in the Early Cretaceous period, over 77.5 million years ago."
 *
 *  getDinosaurDescription(dinosaurs, "incorrect-id");
 *  //> "A dinosaur with an ID of 'incorrect-id' cannot be found."
 */
function getDinosaurDescription(dinosaurs, id) {
  // output: to return "name:", ("pronunciation"); info, and mya
  //output: use if statement to check if id exists, return string, else if id does not exist result equals error message
  //input:

  let emptyString = "";
  if (id !== dinosaurs.dinosaurId) {
    emptyString = "A dinosaur with an ID of 'incorrect-id' cannot be found.";
  }

  for (let i = 0; i < dinosaurs.length; i++) {
    const dinosaur = dinosaurs[i];
    if (dinosaur.dinosaurId === id) {
      emptyString = `${dinosaur.name} (${dinosaur.pronunciation})\n${
        dinosaur.info
      } It lived in the ${dinosaur.period} period, over ${
        dinosaur.mya[dinosaur.mya.length - 1]
      } million years ago.`;
    }
  }
  return emptyString;
}

/**
 * getDinosaursAliveMya()
 * ---------------------
 * Returns an array of dinosaurs who were alive at the given `mya` (i.e. "millions of years ago") value. If a `key` is provided, returns the value of that key for each dinosaur alive at that time. Otherwise, returns the ID.
 *
 * If the dinosaur only has a single value for `mya`, allows for the `mya` value to be equal to the given value or one less. For example, if a dinosaur has a `mya` value of `[29]`, the dinosaur's information will be returned if `29` is entered or `28` is entered.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {number} mya - "Millions of years ago."
 * @param {string} key - An optional parameter. If included, for dinosaurs that lived during the `mya` value given, will return the value of the supplied key. Otherwise, returns the ID.
 * @returns {*[]} An array of values, which depend on the key given. The array should only include data of dinosaurs who lived during the given time period.
 *
 * EXAMPLE:
 *  getDinosaursAliveMya(dinosaurs, 150);
 *  //> ["YLtkN9R37", "GGvO1X9Zeh", "BFjjLjea-O", "V53DvdhV2A"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65);
 *  //> ["WHQcpcOj0G"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "name");
 *  //> ["Dracorex"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "unknown-key");
 *  //> ["WHQcpcOj0G"]
 */
function getDinosaursAliveMya(dinosaurs, mya, key) {
  //input: if the `mya` key is an array of one number, should allow for 1 MYA less than the amount
  //       if the third argument is set, should replace the IDs with the value of the given key
  //       should include dinosaurs with only one mya year
  //       if the third argument is set, but to a key that doesn't return a value, should return the IDs
  //output: should return the IDs of all dinosaurs that were alive approximately at the given time
  //        should include dinosaurs with only one `mya` year
  //        should return an empty array if the year does not match any
  //Define your default value
  //   let dinoId = [];

  //   //Define your loop

  let dino = [];
  for (const i of dinosaurs) {
    let max = i.mya[0];
    let min = i.mya[1];

    if (i.mya.length === 1) {
      if (max === mya || max - 1 === mya) {
        if (key in i) {
          dino.push(i[key]);
        } else {
          dino.push(i.dinosaurId);
        }
      }
    } else {
      if (mya < +max && mya > +min) {
        if (key in i) {
          dino.push(i[key]);
        } else {
          dino.push(i.dinosaurId);
        }
      }
    }
  }
return dino;
}


//   for (let i = 0; i < dinosaurs.length; i++) {
//     const dinosaur = dinosaurs[i];
//     if (dinosaur.includes(key) === mya && dinosaur.includes(key)) {
//        dinoId.push(dinosaur[key])

//   }
// }
// return dino
// }

module.exports = {
  getTallestDinosaur,
  getDinosaurDescription,
  getDinosaursAliveMya,
};
