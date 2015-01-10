###
@file

## Responsibilities
- unit test grasp.coffee

Scaffolded with generator-microjs v0.1.2

@author Daniel Lamb <dlamb.open.source@gmail.com>
###

describe 'grasp.coffee', ->
  beforeEach ->
    # add spies

  it 'should have a working test harness', ->
    # arrange
    # act
    # assert
    expect(true).not.toBe false

  it 'should exist', ->
    # arrange
    # act
    # assert
    expect(typeof graspjs).toBe 'function'

  it 'should return nothing', ->
    # arrange
    # act
    result = graspjs()
    # assert
    expect(result).toBeUndefined()