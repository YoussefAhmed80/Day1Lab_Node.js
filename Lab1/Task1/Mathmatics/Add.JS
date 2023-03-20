function Plus(n1,n2){
    if(!isNaN(n1) && !isNaN(n2)){
        return n1+n2;
    }
    return "Please Enter Numbers";       
}
module.exports=Plus;