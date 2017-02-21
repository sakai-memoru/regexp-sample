const XRegExp = require('xregexp');
const S = require('string');

// incidnent No regexp
const regPatternQa = 'qa' + '(\\d){8}' + '-' + '(\\w){6}'+'\\s' ;
const regPatternPd = 'pd' + '(\\d){8}' + '-' + '(\\w){6}'+'\\s' ;

/**
 * match incident no for Faq Auto response
 * @param text {string} matching text
 */
var matchQaIncidentNo = (text) =>{
  const regex = XRegExp(regPatternQa);
  var str = XRegExp.match(text,regex);
  if(str){
    return S(str).trim().s;
  }else {
    return '';
  }
};

/**
 * match incident no for person directory
 * @param text {string} matching text
 */
var matchPdIncidentNo = (text) =>{
  const regex = XRegExp(regPatternPd);
  var str = XRegExp.match(text,regex)
  if(str){
    return S(str).trim().s;
  }else {
    return '';
  }
};

module.exports.matchQaIncidentNo = matchQaIncidentNo;
module.exports.matchPdIncidentNo = matchPdIncidentNo;
// debug -------------------------------
// -------------------------------------
const str = 'sakai mitsuru qa20170213-ss12ss senda koto';
let retStr = matchQaIncidentNo(str);
console.log('>>' + retStr + "<<");
//console.log(S('hello ').trim().s);
