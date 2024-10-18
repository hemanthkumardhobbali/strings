var str1="       hemu";
var str2="siri         ";
var str1trim=str1.trimStart();
var str2trim=str2.trimEnd();
console.log(str1trim)
console.log(str2trim)

var concat=str1trim.concat(str2trim);
console.log(concat)

var com_uppercase=concat.toUpperCase();
console.log(com_uppercase)




var extract=com_uppercase.slice(3,5);
console.log(extract)

var index_value=extract.indexOf("A");
console.log(index_value)

var lower_case=extract.toLowerCase();
console.log(lower_case)





var char="A"
var concat_all=char.concat(lower_case)
console.log(concat_all)

var upper_case=concat_all.toUpperCase();
console.log(upper_case)

var last_extrct=upper_case.slice(-2,-1)
console.log(last_extrct)




var first_str="anil";
var sec_str="hemanth"
console.log(first_str)
console.log(sec_str)

var extract_first=first_str.slice(0,3);
console.log(extract_first)

var extract_sec=sec_str.slice(-3)
console.log(extract_sec)

var concat_together=extract_first.concat(extract_sec)
console.log(concat_together)

var uppercase_all=concat_together.toUpperCase();
console.log(uppercase_all)





var str3="       siri        ";
console.log(str3)

var trim=str3.trim();
console.log(trim)

var first_char=trim.charAt(0);
var last_char=trim.charAt(3);
var first_uppercase=first_char.toUpperCase();
var last_uppercase=last_char.toUpperCase();
console.log(first_uppercase)
console.log(last_uppercase)

var specific_extract=trim.slice(1,3);
console.log(specific_extract)

var str4="hemu";
console.log(str4)

var concat_str=specific_extract.concat(str4);
console.log(concat_str)





var index="hello there , how are you";
console.log(index)

var index_of=index.indexOf('are');
console.log(index_of)



