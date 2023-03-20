function calculateAge(birthDate) {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
    }
    
    return age;
  }
//   console.log(calculateAge("2000-2-5"));
function BirthDate(name,date) {
    var age = calculateAge(date);
    if(age<=7){
        return "please enter valid birthDate" + name;
    }
    return name + " Your Age is " + age;
}
module.exports = BirthDate;