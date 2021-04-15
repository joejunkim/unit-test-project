const chai = require("chai");
const { deeppink } = require("color-name");
const expect = chai.expect;
const { isFive, isOdd, myRange, fizzBuzz} = require("../problems/phase-1");
describe("isFive(num)", () => {
  it("should return true if the num is 5 otherwise false", () => {
    //Arrange
    let num = 5;
    //Act
    let result = isFive(num);
    let expected = 5;
    //Assert
    expect(result).to.equal(expected)

    //Arrange
    //Act
    //Assert

  });
});
describe("isOdd(number)", () => {
  it("should return true if number is odd", () => {
    //Arrange
    //Act
    const test = isOdd(5);
    const result = true;
    //Assert
    expect(test).to.equal(result);


  });
  it("should return false if the num is even", () => {
    const test = isOdd(4);
    const result = false;
    expect(test).to.equal(result);
    //Arrange
    //Act
    //Assert


  });
  it("should throw an error if num is not type of Number", () => {
    //Arrange
    const input = 'string'
    const input2 = []
    const input3 = {}
    //Act
    const test = () => isOdd(input)
    const test2 = () => isOdd(input2)
    const test3 = () => isOdd(input3)
    //Assert
    expect(test).to.throw(Error)
    expect(test2).to.throw(Error)
    expect(test3).to.throw(Error)
  });
});
describe("myRange(min, max, step)", () => {
  context("if step is not provided", () => {
    it("should return the correct array with default value step=1", () => {
      //Arrange
      const minInput = 1;
      const maxInput = 5;
      //Act
      const test = myRange(minInput, maxInput);
      const result = [1, 2, 3, 4, 5]
      // Assert
      expect(test).to.eql(result)

    });
  });
  context("if step is provided", () => {
    it("should return the correct array", () => {
      const minInput = 1;
      const maxInput = 5;
      const stepInput = 2;
      //Act
      const test = myRange(minInput, maxInput, stepInput);
      const result = [1, 3, 5]
      // Assert
      expect(test).to.eql(result)

    });
  });
  it("should throw an error if num is not type of Number", () => {
      const minInput = 'hi';
      const maxInput = 5;
      const stepInput = 2;
      //Act
      const test = () => myRange(minInput, maxInput, stepInput);
      // const result = [1, 3, 5]
      // Assert
      expect(test).to.throw(TypeError);


  });
});
describe('fizzBuzz(max)', ()=> {
  it('should throw a RangeError if max < 0', ()=> {
    //Arrange
    const max = -1
    //Act
    const test = () => fizzBuzz(max);
    //Assert
    expect(test).to.throw(Error);

  })
  it('should throw a TypeError if max is not a number', ()=> {
    //Arrange
    const maxInput = 'string';
    //Act
    const test = () => fizzBuzz(maxInput);
    //Assert
    expect(test).to.throw(TypeError);

  })
  it('should return an array from 0 to max (not inclusive) of numbers that are divisible by either 3 or 5 but not both', ()=> {
    //Arrange
    const setMax = 15;
    //Act
    const test = fizzBuzz(setMax);
    const result = [3, 5, 6, 9, 10, 12];
    //Assert
    expect(test).to.eql(result);

  })
})

// equal
  // check if the two values point to the same place in memory

// eql
// deep.equal
  // check if the two values have the same value

// example
  // let input1 = [1, 2, 3];
  // let input2 = [1, 2, 3];
  // let input3 = input2;

  // expect(input1).to.equal(input2); // FAIL
  // expect(input2).to.equal(input3); // OK
