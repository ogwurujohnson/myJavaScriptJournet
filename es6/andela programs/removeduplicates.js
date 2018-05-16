function removeDuplicates(str) {
    var stg = str.split("");
    var nstr = [];
    var allowed = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var count = 0;
    for(var i = 0; i<stg.length;i++){
        if(allowed.indexOf(stg[i]) > -1){
            if(nstr.indexOf(stg[i])== -1){
                nstr.push(str[i])
            }
            else{
                count +=1;
            }
        }
    }
    return{uniques: nstr.sort().join(""),duplicates: count}

}