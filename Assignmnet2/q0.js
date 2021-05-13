
function person(fname,lname,age,skills,dateOfbirth,address,married,profession)
{
  this.fname=fname;
  this.lname=lname;
  this.age=age;
  this.skills=skills;
  this.dateOfbirth=dateOfbirth;
  this.address=address;
  this.married=married;
  this.profession=profession;
}
var p1=new person("nikhil","goud","20-9-1999",{city:"hyderabad",pincode:"521185"},"false","software Engineer")
 
print=function()
{
  console.log(p1);
}
();