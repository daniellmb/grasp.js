/**
 * @file
 *
 * ### Responsibilities
 * - unit test grasp.js
 *
 * Scaffolded with generator-microjs v0.1.2
 *
 * @author Daniel Lamb <dlamb.open.source@gmail.com>
 */
'use strict';

/*global graspjs*/
describe('grasp.js', function () {
  beforeEach(function () {
    // add spies
  });

  it('should have a working test harness', function () {
    // arrange
    // act
    // assert
    expect(true).not.toBe(false);
  });

  it('should exist', function () {
    // arrange
    // act
    // assert
    expect(typeof graspjs).toBe('function');
  });

  it('should return nothing', function () {
    // arrange
    // act
    var result = graspjs();
    // assert
    expect(result).toBeUndefined();
  });

});