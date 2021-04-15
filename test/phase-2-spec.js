const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const { mirrorArray, hiddenCounter, myMap, avgValue } = require('../problems/phase-2')

//1. mirrorArray
describe('mirrorArray()', function () {
  it('should return a single array where the first half is the orginal array and the second half is a mirror of the first half', function () {
    //Arrange
    const array = [1, 2, 3];
    //Act
    const result = mirrorArray(array);
    const expected = [1, 2, 3, 3, 2, 1]
    //Assert
    expect(result).to.eql(expected)
  })
})

//2. hiddenCounter
describe('hiddenCounter()', function () {

  it('should return a function that will increment the counter when invoked', function () {
    //Arrange
    //Act
    const test = hiddenCounter();
    //Assert
    expect(test()).to.eql(1);
    expect(test()).to.eql(2);
  })
})

//3. myMap
describe('myMap', function () {
 it("should function like the built in Array#map", function () {
    //Arrange

    //Act

    //Assert
   expect.fail('Remove this expect.fail and replace it with your test');
  });

  it("should not call the built in Array#map", function () {
     //Arrange

    //Act

    //Assert
    expect.fail('Remove this expect.fail and replace it with your test');
  });
})

//4. avgValue
describe('avgValue', function () {
  it('should return the average of an array of numbers', function () {
     //Arrange

    //Act

    //Assert
    expect.fail('Remove this expect.fail and replace it with your test');

  })
})
