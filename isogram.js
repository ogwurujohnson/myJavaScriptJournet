function isIsogram(str) {
    //...
    var strArr = str;
    for (var i = 0; i < strArr.length; i++) {
        for (var j = 0; j < strArr.length; j++) {
            if(i!=j){
              if (strArr[i] == strArr[j]) {
                  return false
              }
            }
        }
    }
    return true;
    }
    var check = isIsogram('flick');
    console.log(check);