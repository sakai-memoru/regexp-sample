const Module = require('..');

const expect = require('chai').expect;

describe('matchIncidentNo unit test',()=>{
  describe('#matchQaIncidentNo function',()=>{
    it('expect matching pattern return-strings to be expected',()=>{
      // Arrange
      const text = 'sakai mitsuru qa20170213-ss12ss senda koto';
      let expected = 'qa20170213-ss12ss';
      // Act
      let actual = Module.matchQaIncidentNo(text);
      // Assert
      expect(actual).to.equal(expected);
    });
    it('expect not-matching pattern return-strings to be expected',()=>{
      // Arrange
      const text = 'sakai mitsuru qa20170213-ss12ss1 senda koto';
      let expected = '';
      // Act
      let actual = Module.matchQaIncidentNo(text);
      // Assert
      expect(actual).to.equal(expected);
    });
  });
  describe('#matchPdIncidentNo function',()=>{
    it('expect matching pattern return-strings to be expected',()=>{
      // Arrange
      const text = 'sakai mitsuru pd20170213-1212ss senda koto';
      let expected = 'pd20170213-1212ss';
      // Act
      let actual = Module.matchPdIncidentNo(text);
      // Assert
      expect(actual).to.equal(expected);
    });
    it('expect not-matching pattern return-strings to be expected',()=>{
      // Arrange
      const text = 'sakai mitsuru qa20170213-ss12s1 senda koto';
      let expected = '';
      // Act
      let actual = Module.matchPdIncidentNo(text);
      // Assert
      expect(actual).to.equal(expected);
    });
  });

});
