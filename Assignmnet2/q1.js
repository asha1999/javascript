let square=function(x){
    return(x*x);
}
let double=function(x)
{
    return(x*2);
}
let apply=function(f1,f2)
{
    return f2(f1);
}
let compose=function(arr,val){
     return arr.reduce(apply,val)
}

 let squareDouble=(val)=>compose([square,double],val)
 let squareDouble1=(val)=>compose([double,square],val)

 document.write(squareDouble(5));
 document.write(squareDouble(10));
 document.write(squareDouble1(5));
 document.write(squareDouble1(10));
 

