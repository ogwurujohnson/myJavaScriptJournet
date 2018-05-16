function isIsogram(word) {

    var entered = word;
    if (typeof (entered) === undefined) {
      return false
    }
    if (entered === '') {
      return false
    }
  
    var passed = true;
  
    wordest = escape(entered).toLowerCase();
  
    var counts = {};
  
    for (var i = 0; i <= wordest.length; i++) {
      var letter = wordest.toString().charAt(i)
  
      if (counts[letter]) {
        counts[letter] += 1
      }
      else {
        counts[letter] = 1
      }
  
      if (counts[letter] > 1) {
        return passed = false
      }
    }
  
    return passed
  };
  
  isIsogram("Altruistic");