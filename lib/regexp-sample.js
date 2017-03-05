const XRegExp = require('xregexp');
const S = require('string');

// incidnent No regexp
const regPatternQa = 'qa' + '(\\d){8}' + '-' + '(\\w){6}'+'\\s' ;
const regPatternPd = 'pd' + '(\\d){8}' + '-' + '(\\w){6}'+'\\s' ;
const regPatternMailSplit = '-- original message' ;

/**
 * match incident no for Faq Auto response
 *  format sample is 'qa20170212-xxxxxx'
 * @param text {string} matching text
 * @return matching strings {stiring}
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
 *  format sample is 'pd20170212-xxxxxx'
 * @param text {string} target text
 * @return matching strings {stiring}
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

/**
 * extract replied mail message
 * @param text {string} target text
 * @return extracting strings {stiring}
 */
var extractRepliedMessage = (text,regex) =>{
  //const regex = XRegExp(regPatternMailSplit);
  var ary = XRegExp.split(text,regex);
  //console.log(ary);
  return ary[0];
};

/**
 * extract replied mail message
 * @param text {string} target text
 * @return extracting strings {stiring}
 */
var testRepliedMessage = (text,regex) =>{
  return XRegExp.split(text,regex);
};

module.exports.matchQaIncidentNo = matchQaIncidentNo;
module.exports.matchPdIncidentNo = matchPdIncidentNo;
module.exports.extractRepliedMessage = extractRepliedMessage;
// debug -------------------------------
// -------------------------------------
let str = 'sakai mitsuru qa20170213-ss12ss senda koto';
let retStr = matchQaIncidentNo(str);
// console.log('>>' + retStr + "<<");
//console.log(S('hello ').trim().s);

str = 'sakai memoru -- original message -- senda koto';
retStr = extractRepliedMessage(str,regPatternMailSplit);
console.log(retStr);
