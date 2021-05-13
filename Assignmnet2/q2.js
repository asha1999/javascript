let square=function(x){
    return(x*x);
}
let double=function(x)
{
    return(x*2);
}
let squareDouble=(val)=>double(square(val))
let squareDouble1=(val)=>square(double(val))
document.write(squareDouble(5));
document.write(squareDouble(10));
document.write(squareDouble1(5));
document.write(squareDouble1(10));

