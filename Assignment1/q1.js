
/*
var list=[1,3,4,5,"asha","ak"];
document.write(list.reverse());

function inArray(needle,haystack)
{
    var count=haystack.length;
    for(var i=0;i<count;i++)
    {
        if(haystack[i]===needle){return true;}
    }
    return false;
}
var as=inArray(10,20);

var list=[1,2,3,4,5];
var a=list[0];
for(i=0;i<list.length;i++)
{
    if(list[i]%2==0)
    {
        document.write(list[i]+'<br>');
    }
}

 var list=[1,2,3,4];
 var element=0;
 var a=0;
 for(i=0;i<=list.length;i++)
 {
     if(element==list[i])
     {
         
         a++;
     }
     
 }
 if(a>0)
 {
     document.write("element is found");
 }

function checkPalindrome(str) {

    
    const len = string.length;

    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}


const string = prompt('Enter a string: ');

const value = checkPalindrome(string);

console.log(value);

function asha(squares){
for(i=1;i<squares;i++)
{
    
     var mul=i*i;
    document.write(mul+'<br>');
}
}
asha(12);

var str1=['a','b','c']
var str2=[1,2,3];
var res=str1.concat(str2);
document.write(res);

let a = [5,10,15];
let b = ['A', 'B', 'C'];

var newList = function(a,b)
{
  let l = a.length+b.length;
  let r = [];
  let j=0,k=0;
  for(let i=0; i<l;i++) {
    if(i%2==0) {
      r[i]=a[j++];
    } else {
      r[i]=b[k++];
    }
  }
  return r;
}

console.log(newList(a,b));

var a=[1,3,6];
var b=[7,2,0];

var c=a.concat(b);
document.write(c.sort());

const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1


   

