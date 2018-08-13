'use strict';

function isomorphic (str1, str2) {
	
    let len1 = str1.length;
    
    if (len1 != str2.length) {
        console.log('Both strings have different lenghts');
    	return false;
    }
    
    let chMap = {};
    
    for (let i = 0; i < len1; i++) {
    	
        if (!chMap[str1[i]]) {   	
            chMap[str1[i]] = str2[i];
     
        } else if (chMap[str1[i]] !== str2[i]) {
        	console.log(`Both strings differ in mapping at index ${i}`);
            return false;
        }
    }
    return true;
}

console.log(isomorphic('foo','bar')); // false
console.log(isomorphic('foo','baa')); // true