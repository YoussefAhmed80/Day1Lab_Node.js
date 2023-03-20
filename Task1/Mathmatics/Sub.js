function sub(n1,n2){
    if(!isNaN(n1) && !isNaN(n2))
    {
        return Math.abs(n1-n2);
    }
    return "Please Enter Numbers";
}
module.exports=sub;