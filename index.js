// Strip Comments

// function solution(text, markers) {
//   return text
//     .split("\n")
//     .map(line => {
//       for (const marker of markers) {
//         const index = line.indexOf(marker);

//         if (index !== -1) {
//           line = line.slice(0, index);
//         }
//       }

//       return line.trimEnd();
//     })
//     .join("\n");
// }

// Weight for weight

// function orderWeight(strng) {
//   return strng
//     .trim()
//     .split(/\s+/)
//     .sort((a, b) => {
//       const weightA = a.split("").reduce((sum, digit) => sum + Number(digit), 0);
//       const weightB = b.split("").reduce((sum, digit) => sum + Number(digit), 0);

//       if (weightA !== weightB) {
//         return weightA - weightB;
//       }

//       return a.localeCompare(b);
//     })
//     .join(" ");
// }

// Sum by Factors

// function sumOfDivided(lst) {
//   const primes = new Set();

//   // Find all prime factors
//   lst.forEach(num => {
//     let n = Math.abs(num);

//     for (let i = 2; i <= Math.sqrt(n); i++) {
//       if (n % i === 0) {
//         primes.add(i);

//         while (n % i === 0) {
//           n /= i;
//         }
//       }
//     }

//     if (n > 1) {
//       primes.add(n);
//     }
//   });

//   // Sort primes and calculate their sums
//   return [...primes]
//     .sort((a, b) => a - b)
//     .map(prime => [
//       prime,
//       lst
//         .filter(num => num % prime === 0)
//         .reduce((sum, num) => sum + num, 0)
//     ]);
// }

// Recover a secret string from random triplets

// function recoverSecret(triplets) {
//   const letters = [...new Set (triplets.flat())];
  
//   const graph = {};
  
//   letters.forEach(letter => {
//     graph[letter] = new Set();
//   });
  
//   triplets.forEach(([a, b, c]) => {
//     graph[a].add(b);
//     graph[a].add(c);
//     graph[b].add(c);
//   });
//   const result =[];
  
//   while(letters.length > 0) {
//     const next = letters.find(letter =>
//       letters.every(other => !graph[other].has(letter))
//     );
//     result.push(next);
    
//     letters.splice(letters.indexOf(next), 1);
                  
//     letters.forEach(letter => {
//       graph[letter].delete(next);
//     });
//   }
  
//   return result.join("");
// }

// int32 to Ipv4
// function int32ToIp(int32) {
//   return [
//     int32 >>> 24,
//     (int32 >>> 16) & 255,
//     (int32 >>> 8) & 255,
//     int32 & 255
//   ].join(".");
// }

// First non-repeating character
// function firstNonRepeatingLetter(s) {
//   const lower = s.toLowerCase();
  
//   for(let i = 0; i < s.length; i++) {
//     if (lower.indexOf(lower[i]) === lower.lastIndexOf(lower[i])) {
//       return s[i];
//     }
// }
//   return "";
// }

// Greed is Good

// function score(dice) {
//   const counts = [0, 0, 0, 0, 0, 0];
//   let total = 0;

//   dice.forEach(die => {
//     counts[die - 1]++;
//   });

//   for (let i = 0; i < counts.length; i++) {
//     const number = i + 1;
//     const count = counts[i];

//     if (count >= 3) {
//       if (number === 1) {
//         total += 1000;
//       } else {
//         total += number * 100;
//       }
//     }

//     if (number === 1) {
//       total += (count % 3) * 100;
//     }

//     if (number === 5) {
//       total += (count % 3) * 50;
//     }
//   }

//   return total;
// }

// ROT13

// function rot13(message) {
//   return message
//     .split("")
//     .map(char => {
//       const code = char.charCodeAt(0);

//       if (code >= 65 && code <= 90) {
//         return String.fromCharCode((code - 65 + 13) % 26 + 65);
//       }

//       if (code >= 97 && code <= 122) {
//         return String.fromCharCode((code - 97 + 13) % 26 + 97);
//       }

//       return char;
//     })
//     .join("");
// }


// function findOdd(A) {
//   return A.reduce((result, num) => result ^ num, 0);
// }

// Sum of Digits/Digital Root

// function digitalRoot(n) {
//   while (n >= 10) {
//     n = n
//       .toString()
//       .split("")
//       .reduce((sum, digit) => sum + Number(digit), 0);
//   }

//   return n;
// }

// Bit Counting

// function countBits(n) {
//   // Program Me
//     return n. toString(2).split("1").length - 1;
// }

// The Supermarket Queue

// function queueTime(customers, n) {
//   const tills = new Array(n).fill(0);

//   for (let customer of customers) {
//     const shortestTill = tills.indexOf(Math.min(...tills));

//     tills[shortestTill] += customer;
//   }

//   return Math.max(...tills);
// }

// Playing with digits

// function digPow(n, p){
//   const digits = n.toString() .split("");
  
//   const sum = digits.reduce((total, digit, index) => {
//     return total + Math.pow(Number(digit), p + index);
//   }, 0);
  
//   if (sum % n === 0) {
//     return sum / n;
//   }
//   return -1;
// }

// Simple Pig Latin

// function pigIt(str){
//   return str
//   .split(" ")
//   .map(word => {
//     if(word === "!" || word ==="?") {
//       return word 
//     }
//     return word.slice(1) + word[0] + "ay";
//   })
  
//   .join(" ")
      
//   //Code here
// }

// Mumbling

// function accum(s) {
//   return s
//     .split("")
//     .map((letter, index) => letter.toUpperCase() + letter.toLowerCase().repeat(index))
//     .join("-");
// }

// Validate a PIN code


// Your order,please

// function order(words) {
//   if (words === "") {
//     return "";
//   }

//   return words
//     .split(" ")
//     .sort((a, b) => {
//       const numberA = a.match(/\d/)[0];
//       const numberB = b.match(/\d/)[0];

//       return numberA - numberB;
//     })
//     .join(" ");
// }

// Friend or Foe?
// function friend(friends){
//   return friends.filter(name => name.length === 4)
//   //your code here
// }

// console.log(["Ryan", "Kieran", "Jason", "John"])
// console.log(friend(["Peter", "Stephen", "Joe"]));

// Credit Card Mask

// return masked string
// function maskify(cc) {
//   if(cc.length <= 4) {
//     return cc;
//   }
// const lastFour = cc.slice(-4);
// const masked = '#'.repeat(cc.length - 4);
  
//   return masked + lastFour;
// }

// // return masked string
// function maskify(cc) {
//   if(cc.length <= 4) {
//     return cc;
//   }
// const lastFour = cc.slice(-4);
// const masked = '#'.repeat(cc.length - 4);
  
//   return masked + lastFour;
// }

// console.log(maskify("4556364607935616"));
// console.log(maskify("64607935616"));
// console.log(maskify("1"));
// console.log(maskify(""));

// Decode the Morse code

// function decodeMorse(morseCode) {
//     return morseCode
//         .trim()
//         .split("   ")
//         .map(word => word
//             .split(" ")
//             .map(letter => MORSE_CODE[letter])
//             .join("")
//         )
//         .join(" ");
// }