const chai = require("chai");
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
      //Arrange

      //Act

      // Assert
      expect.fail('Remove this expect.fail and replace it with your test');

    });
  });
  it("should throw an error if num is not type of Number", () => {
    //Arrange

    //Act

    //Assert
    expect.fail('Remove this expect.fail and replace it with your test');

  });
});
describe('fizzBuzz(max)', ()=> {
  it('should throw a RangeError if max < 0', ()=> {
    //Arrange

    //Act

    //Assert
    expect.fail('Remove this expect.fail and replace it with your test');

  })
  it('should throw a TypeError if max is not a number', ()=> {
    //Arrange

    //Act

    //Assert
    expect.fail('Remove this expect.fail and replace it with your test');

  })
  it('should return an array from 0 to max (not inclusive) of numbers that are divisible by either 3 or 5 but not both', ()=> {
    //Arrange

    //Act

    //Assert
    expect.fail('Remove this expect.fail and replace it with your test');

  })
})
