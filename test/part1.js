const path = require('path');
const expect = require('chai').expect;
const sinon = require('sinon');

let {
  factorial,
  sum,
  isEven,
  sumBelow,
  range,
  exponent,
  powerOfTwo,
  reverse,
  palindrome,
  multiply,
  compareStr,
  createArray,
  reverseArr,
  buildList,
  countOccurrence,
  rMap,
  nthFibo,
  capitalizeWords,
  capitalizeFirst,
  letterTally,
  compress,
  minimizeZeroes,
  alternateSign,
  numToText,
} = require(path.join(__dirname, '..', './src/recursion.js'))

'use strict';

describe('Exercises in Recursion in Recursion in Recursion in...', function() {

  describe('1. Factorial', function() {

    it('should return a number', function() {
      expect(typeof(factorial(5))).to.equal('number');
    });

    it('should return factorial for non-negative integers', function() {
      expect(factorial(0)).to.equal(1);
      expect(factorial(1)).to.equal(1);
      expect(factorial(4)).to.equal(24);
      expect(factorial(5)).to.equal(120);
    });

    it('should return null for negative integers', function() {
      expect(factorial(-5)).to.equal(null);
    });

    it('should use recursion by calling self', function () {
      var originalFactorial = factorial;
      factorial = sinon.spy(factorial);
      factorial(4);
      expect(factorial.callCount).to.be.above(1);
      factorial = originalFactorial;
    });

  });



  describe('2. Sum of Integers', function() {

    it('should return a number', function() {
      expect(typeof(sum([1,2,3,4,5,6]))).to.eql('number');
    });

    it('should return the sum of an array of non-negative integers', function() {
      expect(sum([1,2,3,4,5,6])).to.eql(21);
      expect(sum([12,34,56,78])).to.eql(180);
      expect(sum([3,0,34,7,18])).to.eql(62);
    });

    it('should return the sum of an array of negative integers', function() {
      expect(sum([-1,-2,-3,-4,-5,-6])).to.eql(-21);
      expect(sum([-12,-34,-56,-78])).to.eql(-180);
      expect(sum([-3,-0,-34,-7,-18])).to.eql(-62);
    });

    it('should return the sum of an array of mixed non-negative and negative integers', function() {
      expect(sum([1,-2,3,-4,5,-6])).to.eql(-3);
      expect(sum([-12,34,-56,78])).to.eql(44);
      expect(sum([3,0,-34,-7,18])).to.eql(-20);
    });

    it('should return 0 for empty array', function() {
      expect(sum([])).to.eql(0);
    });

    it('should accept an array with a single integer', function() {
      expect(sum([4])).to.eql(4);
      expect(sum([0])).to.eql(0);
      expect(sum([-37])).to.eql(-37);
    });

    it('should not mutate the input array', function() {
      var input = [1,2,3,4,5];
      var result = sum(input);
      expect(input).to.eql([1,2,3,4,5]);
    });

    it('should use recursion by calling self', function () {
      var originalSum = sum;
      sum = sinon.spy(sum);
      sum([1,2,3,4,5,6]);
      expect(sum.callCount).to.be.above(1);
      sum = originalSum;
    });

  });




  describe('4. Check if Even', function() {

    it('should return a boolean', function() {
      expect(typeof(isEven(5))).to.equal('boolean');
      expect(typeof(isEven(8))).to.equal('boolean');
      expect(typeof(isEven(-4))).to.equal('boolean');
    });

    it("should not use modulo", function() {
      expect(isEven.toString()).to.not.contain('%');
    });

    it('should return true for even numbers', function() {
      expect(isEven(118)).to.equal(true);
      expect(isEven(10)).to.equal(true);
      expect(isEven(0)).to.equal(true);
      expect(isEven(-34)).to.equal(true);
    });

    it('should return false for odd numbers', function() {
      expect(isEven(117)).to.equal(false);
      expect(isEven(9)).to.equal(false);
      expect(isEven(1)).to.equal(false);
      expect(isEven(-33)).to.equal(false);
    });

    it('should work with negative integers', function() {
      expect(isEven(-14)).to.equal(true);
      expect(isEven(-81)).to.equal(false);
    });

    it('should use recursion by calling self', function () {
      var originalIsEven = isEven;
      isEven = sinon.spy(isEven);
      isEven(118);
      expect(isEven.callCount).to.be.above(1);
      isEven = originalIsEven;
    });

  });



  describe('5. Sum Below', function() {

    it('should return a number', function() {
      expect(typeof(sumBelow(10))).to.eql('number');
    });

    it('should return the sum of non-negative integers below given integer', function() {
      expect(sumBelow(0)).to.eql(0);
      expect(sumBelow(1)).to.eql(0);
      expect(sumBelow(2)).to.eql(1);
      expect(sumBelow(7)).to.eql(21);
      expect(sumBelow(21)).to.eql(210);
      expect(sumBelow(92)).to.eql(4186);
    });

    it('should return the sum of an array of negative integers', function() {
      expect(sumBelow(-1)).to.eql(0);
      expect(sumBelow(-2)).to.eql(-1);
      expect(sumBelow(-6)).to.eql(-15);
      expect(sumBelow(-21)).to.eql(-210);
      expect(sumBelow(-92)).to.eql(-4186);
    });

    it('should use recursion by calling self', function () {
      var originalSumBelow = sumBelow;
      sumBelow = sinon.spy(sumBelow);
      sumBelow(10);
      expect(sumBelow.callCount).to.be.above(1);
      sumBelow = originalSumBelow;
    });

  });



  describe('6. Integer Range', function() {

    it('should return an array', function() {
      expect(Array.isArray(range(2, 7))).to.equal(true);
    });

    it('should return the integers between two numbers', function() {
      expect(range(3,8)).to.eql([4,5,6,7]);
      expect(range(127,131)).to.eql([128,129,130]);
    });

    it('should return empty array if no integers in range', function() {
      expect(range(5,5)).to.eql([]);
      expect(range(2,3)).to.eql([]);
    });

    it('should accept negative integers', function() {
      expect(range(-9,-4)).to.eql([-8,-7,-6,-5]);
      expect(range(-3,2)).to.eql([-2,-1,0,1]);
      expect(range(-3,-2)).to.eql([]);
      expect(range(-2,-2)).to.eql([]);
    });

    it('should accept starting integer that\'s larger than ending', function() {
      expect(range(7,2)).to.eql([6,5,4,3]);
      expect(range(3,-3)).to.eql([2,1,0,-1,-2]);
      expect(range(-9,-4)).to.eql([-8,-7,-6,-5]);
    });

    it('should use recursion by calling self', function () {
      var originalRange = range;
      range = sinon.spy(range);
      range(3,8);
      expect(range.callCount).to.be.above(1);
      range = originalRange;
    });

  });



  describe('7. Compute Exponent', function() {

    it('should return a number', function() {
      expect(typeof(exponent(4,3))).to.eql('number');
    });

    it("should not use complex math", function() {
      expect(exponent.toString()).to.not.contain('Math');
    });

    it('should compute exponent of non-negative integers', function() {
      expect(exponent(3,4)).to.equal(81);
      expect(exponent(12,5)).to.equal(248832);
      expect(exponent(7,2)).to.equal(49);
    });

    it('returns 1 when exponent is 0', function() {
      expect(exponent(8,0)).to.equal(1);
      expect(exponent(244,0)).to.equal(1);
    });

    it('returns base when exponent is 1', function() {
      expect(exponent(9,1)).to.equal(9);
      expect(exponent(2300,1)).to.equal(2300);
    });

    // it('BONUS: should accept negative integer for base', function() {
    //   expect(exponent(-3,4)).to.equal(-81);
    //   expect(exponent(-12,5)).to.equal(-248832);
    //   expect(exponent(-7,2)).to.equal(-49);
    //   expect(exponent(-7,4)).to.equal(-2401);
    // });

    it('should accept negative integer for exponent', function() {
      expect(exponent(4,-2)).to.equal(0.0625);
      expect(exponent(5,-4)).to.equal(0.0016);
      expect(exponent(2,-5)).to.equal(0.03125);
    });

    it('should use recursion by calling self', function () {
      var originalExponent = exponent;
      exponent = sinon.spy(exponent);
      exponent(3,4);
      expect(exponent.callCount).to.be.above(1);
      exponent = originalExponent;
    });

  });



  describe('8. Power of Two', function() {

    it('should return a boolean', function() {
      expect(typeof(powerOfTwo(10))).to.equal('boolean');
      expect(typeof(powerOfTwo(16))).to.equal('boolean');
    });

    it('should return true for powers of two', function() {
      expect(powerOfTwo(0)).to.equal(false);
      expect(powerOfTwo(1)).to.equal(true);
      expect(powerOfTwo(2)).to.equal(true);
      expect(powerOfTwo(10)).to.equal(false);
      expect(powerOfTwo(128)).to.equal(true);
      expect(powerOfTwo(256)).to.equal(true);
    });

    it('should use recursion by calling self', function () {
      var originalPowerOfTwo = powerOfTwo;
      powerOfTwo = sinon.spy(powerOfTwo);
      powerOfTwo(32);
      expect(powerOfTwo.callCount).to.be.above(1);
      powerOfTwo = originalPowerOfTwo;
    });

  });



  describe('9. Reverse String', function() {

    it('should return a string', function() {
      expect(typeof(reverse('orangutan'))).to.equal('string');
    });

    it('should return a string in reverse', function() {
      var poem = 'Roses are red, violets are blue, all my base are belong to you.';

      expect(reverse('Racecar')).to.equal('racecaR');
      expect(reverse(poem)).to.equal('.uoy ot gnoleb era esab ym lla ,eulb era steloiv ,der era sesoR');
    });

    it('should not mutate the input string', function() {
      var input = 'orangutan';
      var result = reverse(input);
      expect(input).to.eql('orangutan');
    });

    it('should use recursion by calling self', function () {
      var originalReverse = reverse;
      reverse = sinon.spy(reverse);
      reverse('orangutan');
      expect(reverse.callCount).to.be.above(1);
      reverse = originalReverse;
    });

  });



  describe('10. Palindrome', function() {

    it('should return a boolean', function() {
      expect(typeof(palindrome('rotor'))).to.equal('boolean');
      expect(typeof(palindrome('motor'))).to.equal('boolean');
    });

    it('should return true for palindromes', function() {
      expect(palindrome('rotor')).to.eql(true);
      expect(palindrome('racecar')).to.eql(true);
      expect(palindrome('saippuakivikauppias')).to.eql(true);
    });

    it('should return false for non-palindromes', function() {
      expect(palindrome('motor')).to.eql(false);
      expect(palindrome('orangutan')).to.eql(false);
      expect(palindrome('antidisestablishmentarianism')).to.eql(false);
    });

    it('should ignore spaces and capital letters', function() {
      expect(palindrome('Rotor')).to.eql(true);
      expect(palindrome('race caR')).to.eql(true);
      expect(palindrome('sAip puaki v iKaup Pias')).to.eql(true);
    });

    it('should use recursion by calling self', function () {
      var originalPalindrome = palindrome;
      palindrome = sinon.spy(palindrome);
      palindrome('saippuakivikauppias');
      expect(palindrome.callCount).to.be.above(1);
      palindrome = originalPalindrome;
    });

  });





  describe('12. Multiply', function() {

    it('should return a number', function() {
      expect(typeof(multiply(5,2))).to.equal('number');
      expect(typeof(multiply(8,4))).to.equal('number');
    });

    it("should not use complex math", function() {
      expect(multiply.toString()).to.not.contain('*');
      expect(multiply.toString()).to.not.contain('/');
      expect(multiply.toString()).to.not.contain('%');
      expect(multiply.toString()).to.not.contain('Math');
    });

    it('should return the product of two integers', function() {
      expect(multiply(2, 1)).to.equal(2 * 1);
      expect(multiply(17, 5)).to.equal(17 * 5);
      expect(multiply(78, 453)).to.equal(78 * 453);
      expect(multiply(-79, 82)).to.equal(-79 * 82);
      expect(multiply(-275, -502)).to.equal(-275 * -502);
      expect(multiply(0, 32)).to.equal(0 * 32);
      expect(multiply(0, 0)).to.equal(0 * 0);
    });

    it('should use recursion by calling self', function () {
      var originalMultiply = multiply;
      multiply = sinon.spy(multiply);
      multiply(8,4);
      expect(multiply.callCount).to.be.above(1);
      multiply = originalMultiply;
    });

  });





  describe('15. Compare Strings', function() {

    it('should return a boolean', function() {
      expect(typeof(compareStr('house', 'houses'))).to.equal('boolean');
      expect(typeof(compareStr('', ''))).to.equal('boolean');
      expect(typeof(compareStr('tomato', 'tomato'))).to.equal('boolean');
    });

    it('should return true for identical strings', function() {
      expect(compareStr('house', 'houses')).to.eql(false);
      expect(compareStr('', '')).to.eql(true);
      expect(compareStr('tomato', 'tomato')).to.eql(true);
      expect(compareStr('', 'pop')).to.eql(false);
      expect(compareStr('foot', '')).to.eql(false);
      expect(compareStr('big dog', 'big dog')).to.eql(true);
    });

    it('should use recursion by calling self', function () {
      var originalCompareStr = compareStr;
      compareStr = sinon.spy(compareStr);
      compareStr('house', 'houses');
      expect(compareStr.callCount).to.be.above(1);
      compareStr = originalCompareStr;
    });

  });



  describe('16. Create array from string', function() {

    it('should return an array', function() {
      expect(Array.isArray(createArray('hello'))).to.equal(true);
    });

    it('should return an array where each index is a letter of the string', function() {
      expect(createArray('hello')).to.eql(['h','e','l','l','o']);
      expect(createArray('this is not a pipe')).to.eql(['t','h','i','s',' ','i','s',' ','n','o','t',' ','a',' ','p','i','p','e']);
      expect(createArray('hologram')).to.eql(['h','o','l','o','g','r','a','m']);
      expect(createArray('i')).to.eql(['i']);
    });

    it('should use recursion by calling self', function () {
      var originalCreateArray = createArray;
      createArray = sinon.spy(createArray);
      createArray('hello');
      expect(createArray.callCount).to.be.above(1);
      createArray = originalCreateArray;
    });

  });



  describe('17. Reverse an array', function() {

    it('should return an array', function() {
      expect(Array.isArray(reverseArr([5,4,3,2,1]))).to.equal(true);
    });

    it('should return array in reversed order', function() {
      expect(reverseArr([1,2,3,4,5])).to.eql([5,4,3,2,1]);
      expect(reverseArr([5,4,3,2,1])).to.eql([1,2,3,4,5]);
      expect(reverseArr([2,4,6,8])).to.eql([8,6,4,2]);
      expect(reverseArr([8,6,4,2])).to.eql([2,4,6,8]);
    });

    it('should use recursion by calling self', function () {
      var originalReverseArr = reverseArr;
      reverseArr = sinon.spy(reverseArr);
      reverseArr([5,4,3,2,1]);
      expect(reverseArr.callCount).to.be.above(1);
      reverseArr = originalReverseArr;
    });

  });



  describe('18. Build an array with a given value and length', function() {

    it('should return an array', function() {
      expect(Array.isArray(buildList(0,5))).to.equal(true);
    });

    it('should return array of given length with given value at each index', function() {
      expect(buildList(0, 5)).to.eql([0,0,0,0,0]);
      expect(buildList('banana', 3)).to.eql(['banana','banana','banana']);
      expect(buildList(NaN, 4)).to.eql([NaN, NaN, NaN, NaN]);
      expect(buildList(undefined, 1)).to.eql([undefined]);
      expect(buildList([], 2)).to.eql([[],[]]);
      expect(buildList({}, 4)).to.eql([{},{},{},{}]);
      expect(buildList(true, 3)).to.eql([true,true,true]);
      expect(buildList(5+5, 3)).to.eql([10,10,10]);
    });

    it('should use recursion by calling self', function () {
      var originalBuildList = buildList;
      buildList = sinon.spy(buildList);
      buildList(2,7);
      expect(buildList.callCount).to.be.above(1);
      buildList = originalBuildList;
    });

  });



  describe('19. Count value in array', function() {

    it('should return a number', function() {
      expect(typeof(countOccurrence([2,7,4,4,1,4], 4))).to.equal('number');
      expect(typeof(countOccurrence([2,'banana',4,4,1,'banana'], 'banana'))).to.equal('number');
    });

    it('should return the number of occurrences of the value', function() {
      expect(countOccurrence([2,7,4,4,1,4], 4)).to.eql(3);
      expect(countOccurrence([2,'banana',4,4,1,'banana'], 'banana')).to.eql(2);
      expect(countOccurrence([undefined,7,undefined,4,1,4], undefined)).to.eql(2);
      expect(countOccurrence(['',7,null,0,'0',false], 0)).to.eql(1);
      expect(countOccurrence(['',7,null,0,'0',false], false)).to.eql(1);
      expect(countOccurrence(['',7,null,0,'0',false], null)).to.eql(1);
      expect(countOccurrence(['',7,null,0,'0',false], '')).to.eql(1);
      // expect(countOccurrence(['',7,null,0,NaN,'0',false], NaN)).to.eql(1);
    });

    it('should use recursion by calling self', function () {
      var originalCountOccurrence = countOccurrence;
      countOccurrence = sinon.spy(countOccurrence);
      countOccurrence([2,7,4,4,1,4], 4);
      expect(countOccurrence.callCount).to.be.above(1);
      countOccurrence = originalCountOccurrence;
    });

  });



  describe('20. Recursive Map', function() {

    var timesTwo = function(n) { return n * 2; };
    var input3 = [1,2,3,4,5];

    it('should return an array', function() {
      expect(Array.isArray(rMap([1,2,3], timesTwo))).to.equal(true);
    });

    checkForNativeMethods(function() {
      rMap([1,2,3,4], timesTwo);
    });

    it('should return new array without mutating the input array', function() {
      var input = [1,2,3,4,5];
      var result = rMap(input, function(num) { /* poop */ });
      expect(input).to.eql([1,2,3,4,5]);
      expect(result).to.not.equal(input);
    });

    it('should apply a function to every value in an array', function() {
      var doubledNumbers = rMap([1,2,3], timesTwo);
      expect(doubledNumbers).to.eql([2,4,6]);
    });

    it('should use recursion by calling self', function () {
      var originalrMap = rMap;
      rMap = sinon.spy(rMap);
      rMap([1,2,3,4], timesTwo);
      expect(rMap.callCount).to.be.above(1);
      rMap = originalrMap;
    });

  });



  describe('25. Return nth Fibonacci', function() {

    it('should return a number', function() {
      expect(typeof(nthFibo(5))).to.equal('number');
    });

    it('should return the nth Fibonacci number', function() {
      expect(nthFibo(0)).to.eql(0);
      expect(nthFibo(1)).to.eql(1);
      expect(nthFibo(2)).to.eql(1);
      expect(nthFibo(3)).to.eql(2);
      expect(nthFibo(4)).to.eql(3);
      expect(nthFibo(5)).to.eql(5);
      expect(nthFibo(12)).to.eql(144);
    });

    it('should return null for negative integers', function() {
      expect(nthFibo(-5)).to.equal(null);
      expect(nthFibo(-7)).to.equal(null);
    });

    it('should use recursion by calling self', function () {
      var originalNthFibo = nthFibo;
      nthFibo = sinon.spy(nthFibo);
      nthFibo(5);
      expect(nthFibo.callCount).to.be.above(1);
      nthFibo = originalNthFibo;
    });

  });



  describe('26. Capitalize words in array', function() {

    it('should return an array', function() {
      expect(Array.isArray(capitalizeWords(['i','am','learning','recursion']))).to.equal(true);
    });

    it('should capitalize all words in array', function() {
      expect(capitalizeWords(['i','am','learning','recursion'])).to.eql(['I', 'AM', 'LEARNING', 'RECURSION']);
      expect(capitalizeWords(["ceci","n'est","pas","une","pipe"])).to.eql(["CECI", "N'EST", "PAS", "UNE", "PIPE"]);
    });

    it('should use recursion by calling self', function () {
      var originalCapitalizeWords = capitalizeWords;
      capitalizeWords = sinon.spy(capitalizeWords);
      capitalizeWords(["ceci","n'est","pas","une","pipe"]);
      expect(capitalizeWords.callCount).to.be.above(1);
      capitalizeWords = originalCapitalizeWords;
    });

  });



  describe('27. Capitalize first letter of words in array', function() {

    it('should return an array', function() {
      expect(Array.isArray(capitalizeFirst(['i','am','learning','recursion']))).to.equal(true);
    });

    it('should capitalize first letter of each word in array', function() {
      expect(capitalizeFirst(['i','am','learning','recursion'])).to.eql(['I', 'Am', 'Learning', 'Recursion']);
      expect(capitalizeFirst(["ceci","n'est","pas","une","pipe"])).to.eql(["Ceci", "N'est", "Pas", "Une", "Pipe"]);
    });

    it('should use recursion by calling self', function () {
      var originalCapitalizeFirst = capitalizeFirst;
      capitalizeFirst = sinon.spy(capitalizeFirst);
      capitalizeFirst(["ceci","n'est","pas","une","pipe"]);
      expect(capitalizeFirst.callCount).to.be.above(1);
      capitalizeFirst = originalCapitalizeFirst;
    });

  });





  describe('30. Tally letters in string', function() {

    it('should return an object', function() {
      expect(typeof(letterTally('orangutan'))).to.equal('object');
    });

    it('should return object containing tallies of unique letters', function() {
      var output = letterTally('potato');

      expect(output.p).to.equal(1);
      expect(output.o).to.equal(2);
      expect(output.t).to.equal(2);
      expect(output.a).to.equal(1);
    });

    it('should return object containing the number of keys corresponding to unique letters', function () {
      var output = letterTally('mississippi');
      var countKeys = Object.keys(output).length;
      expect(countKeys).to.equal(4);
    });

    it('should use recursion by calling self', function () {
      var originalLetterTally = letterTally;
      letterTally = sinon.spy(letterTally);
      letterTally('invasion');
      expect(letterTally.callCount).to.be.above(1);
      letterTally = originalLetterTally;
    });

  });



  describe('31. Eliminate consecutive duplicates', function() {
    var input1 = [1,2,2,3,4,4,5,5,5];
    var input2 = [1,2,2,3,4,4,2,5,5,5,4,4];

    it('should return an array', function() {
      expect(Array.isArray(compress(input1))).to.equal(true);
    });

    it('should remove consecutive duplicates', function() {
      expect(compress(input1)).to.eql([1,2,3,4,5]);
      expect(compress(input2)).to.eql([1,2,3,4,2,5,4]);
    });

    it('should use recursion by calling self', function () {
      var originalCompress = compress;
      compress = sinon.spy(compress);
      compress(input2);
      expect(compress.callCount).to.be.above(1);
      compress = originalCompress;
    });

  });




  describe('33. Minimize zeroes', function() {
    var input1 = [2,0,0,0,1,4];
    var input2 = [2,0,0,0,1,0,0,4];

    it('should return an array', function() {
      expect(Array.isArray(minimizeZeroes(input1))).to.equal(true);
    });

    it('should remove excess zeroes', function() {
      expect(minimizeZeroes(input1)).to.eql([2,0,1,4]);
      expect(minimizeZeroes(input2)).to.eql([2,0,1,0,4]);
    });

    it('should use recursion by calling self', function () {
      var originalMinZeroes = minimizeZeroes;
      minimizeZeroes = sinon.spy(minimizeZeroes);
      minimizeZeroes(input1);
      expect(minimizeZeroes.callCount).to.be.above(1);
      minimizeZeroes = originalMinZeroes;
    });

  });



  describe('34. Alternate sign', function() {
    var input1 = [2,7,8,3,1,4];
    var input2 = [-2,-7,8,3,-1,4];

    it('should return an array', function() {
      expect(Array.isArray(alternateSign(input1))).to.equal(true);
    });

    it('should remove excess zeroes', function() {
      expect(alternateSign(input1)).to.eql([2,-7,8,-3,1,-4]);
      expect(alternateSign(input2)).to.eql([2,-7,8,-3,1,-4]);
    });

    it('should use recursion by calling self', function () {
      var originalAltSign = alternateSign;
      alternateSign = sinon.spy(alternateSign);
      alternateSign(input1);
      expect(alternateSign.callCount).to.be.above(1);
      alternateSign = originalAltSign;
    });

  });



  xdescribe('35. Convert numbers to text', function() {

    it('should return a string', function() {
      expect(typeof(numToText("I have 5 dogs and 6 ponies"))).to.equal('string');
    });

    it('should convert single digits to their word equivalent', function() {
      expect(numToText("I have 5 dogs and 6 ponies")).to.eql("I have five dogs and six ponies");
      expect(numToText("It takes 3 men to screw in 1 light bulb")).to.eql("It takes three men to screw in one light bulb");
    });

    it('should use recursion by calling self', function () {
      var originalNumToText = numToText;
      numToText = sinon.spy(numToText);
      numToText("I have 5 dogs and 6 ponies");
      expect(numToText.callCount).to.be.above(1);
      numToText = originalNumToText;
    });

  });
});

function checkForNativeMethods(runFunction) {
  it('should not use the native version of map', function() {
    // These spies are set up in testSupport.js
    runFunction();
    expect(Array.prototype.map.called).to.equal(false);
  });
}

