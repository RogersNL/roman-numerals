import { Number } from '../src/scripts';

describe('Number', function() {

  it('to check roman numeral', function() {
     var myNumber = new Number(10);
     console.log(myNumber);
    expect(myNumber.converter()).toEqual("X");
  });
});
