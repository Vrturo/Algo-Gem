var _ = require('underscore');

function sayHello() {
  console.log('Hello, World');
}

_.times(5, sayHello);


const {expect} = require('chai');

/**
 You are the support team for an international man of mystery. The only entrance to
Dr. Evil's lair is a series of long hallways with lights scattered along the lengths.
The IMOM can avoid detection if he can traverse the length of the hallway without being
hit by the circular light radiated from any of the lights. The data of each light's
position and light radius has been transmitted back to you. Quickly determine if the
IMOM can enter the lair undetected and foil Dr. Evil's sinister & flamboyant plot.
 ^
 |
 Y ------------------------------------------------------
 |      ^             /'''''\
 |      |            (   x light
 |  hall_width        \     /
 |      |              `````              /'''''\
 |      |                                (   x light
 |      |                                 \     /
 |-X----------------------------------------------------->
 distance between points p1 & p2 is `d = Math.sqrt((p2.x - p1.x)**2 + (p2.y - p1.y)**2)`
 hall_two: http://i.imgur.com/kHOtT7z.png
 hall_three: http://i.imgur.com/i2oKJk2.png
*/

// Define any classes/dependencies here


/**
 * @param lights is an array of hashes with shape { x: #, y: #, radius: # }
 *        describing a light's position and reach
 * @param hall_width is the width of the infinitely long hallway (y-axis w.r.t. the points)
 *
 * do any setup/conversion of data you desire and return an object that implements a #traversable function
*/

// bottom line of 0, width would be y

function parse(lights, hallWidth) {
  var blocked,
      intersected;

  for( var i = 0; i < lights.length-1; i++ ){

    Math.sqrt((light[i+1].x - lights[i].x)**2 + (lights[i+1].y - lights[i].y)**2) <= lights[i].radius +     lights[i+1].radius ? intersected = true : intersected = false;
    // intersected
    // if( intersected === false ) return true;
  }
  // d = Math.sqrt((p2.x - p1.x)**2 + (p2.y - p1.y)**2)

}

const lightConfigurations = {
  hallOne: [
    { x: 20, y: 10, radius: 12 },
    { x: 40, y: 40, radius: 11 }
  ],
  hallTwo: [
    { x: 20, y: 10, radius: 12 },
    { x: 20, y: 23, radius: 2 },
    { x: 34, y:  6, radius: 8 },
    { x: 30, y: 30, radius: 5 },
    { x: 40, y: 40, radius: 11 }
  ],
  hallThree: [
    { x: 20, y: 10, radius: 12 },
    { x: 34, y:  6, radius: 8 },
    { x: 30, y: 30, radius: 12 },
    { x: 40, y: 40, radius: 11 }
  ]
};

describe('infiltration', function() {
  let lights;

  function subject() {
    return parse(lights, 50);
  }

  context('without lights', function() {
    beforeEach(function() {
      lights = [];
    });

    it('is traversable', function() {
      expect(subject().traversable()).to.be.true;
    });
  });

  context('with lights that do not overlap', function() {
    beforeEach(function() {
      lights = lightConfigurations.hallOne;
    });

    it('is traversable', function() {
      expect(subject().traversable()).to.be.true;
    });
  });

  context('with some lights that overlap', function() {
    beforeEach(function() {
      lights = lightConfigurations.hallTwo;
    });

    it('is traversable', function() {
      expect(subject().traversable()).to.be.true;
    });
  });

  context('when there is no path', function() {
    beforeEach(function() {
      lights = lightConfigurations.hallThree;
    });

    it('is traversable', function() {
      expect(subject().traversable()).to.be.false;
    });
  });
});
