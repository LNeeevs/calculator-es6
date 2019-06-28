import { expect } from 'chai';
import { sum, sub, div, mut } from '../src/App';

describe('Main', () => {

  beforeEach(() => {
    console.log(`Do a thing...`);
  });
  
  it('Should the function return the sum of A & B, equals 10', () => {
    expect(sum(5, 5)).to.be.equal(10);
  });

  it('Should the function return the subtration of A & B, equals 50', () => {
    expect(sub(150, 100)).to.be.equal(50);
  });

  it('Should the function returns the division of A & B, equals 100', () => {
    expect(div(500, 5)).to.be.equal(100);
  });

  it('Should the function return the multiplication of A & B, equals 500', () => {
    expect(mut(5, 100)).to.be.equals(500);
  });

});