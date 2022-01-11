var string = prompt('Enter A String')
var stringlength = string.length
var reversestring = ""
for(var i = stringlength-1;i>=0;i--){
    reversestring += string[i];
    console.log(reversestring)
    document.getElementById('text').innerHTML = 'Reverse of string you give is ' +reversestring;
}
