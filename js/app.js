// function theBiggestSearchKeys() {
//     //your code here
//     var tmp = [''],
//         tmpstr="";
//     for (var i = 0; i < arguments.length; i++) {
//         if (tmp[0].length < arguments[i].length) {
//             tmp = [arguments[i]];
//         } else if (tmp[0].length == arguments[i].length)
//             tmp.push(arguments[i]);
//     }
//     console.log(tmp)
//     tmp.sort();
//     for (var i = 0; i < tmp.length; i++)
//         tmpstr += "'" + tmp[i] + "',";
//     tmpstr = '"' + tmpstr.substr(0, tmpstr.length - 1) + 　'"';
//     console.log(tmpstr)
//     return tmpstr;
// }
function theBiggestSearchKeys(...keywords) {

    if (!keywords.length) return `''`;
    const maxLen = keywords.reduce((a, b) => Math.max(a, b.length), 0);
    return keywords.filter(x => x.length === maxLen).sort().map(x => `'${x}'`).join(', ');
}
theBiggestSearchKeys("key1", "key22", "key333");
a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11 * 11, 121 * 121,  144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];

function comp(array1, array2) {
   if(array1==null||array2==null )
   return array1==array2 ? true : false; 
   var a = array1.map(x=>x*x).sort().join(","), b = array2.sort().join(",");  
    return a==b ? true:false; 
}
console.log(comp(a1, a2));

function validBraces(braces){
  //TODO 
  let tmp = braces;  
  
}
console.log(validBraces( "[(])" ))

var input = [ 4, 3, 9, 7, 2, 1 ];
function squareOrSquareRoot(array) {
   var b = array.map(x=>Math.sqrt(x)==Math.floor(Math.sqrt(x))?Math.sqrt(x):Math.pow(x,2));
   console.log(b);
  return b;  
}
squareOrSquareRoot(input)