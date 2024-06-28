


//https://leetcode.com/problems/valid-anagram/

isAnagram(s, t) {
    if(s.length != t.length) return false;
    const sMap = new Map();
    for(let char of s){
        sMap.set(char , (sMap.get(char)||0)+1);
    }

    for(let tchar of t){
        if(!sMap.has(tchar)){
            return false;
        }
        if(sMap.has(tchar)){
            sMap.set(tchar,sMap.get(tchar)-1)
        }
    }

    for(let sCount of sMap.values()){
        if(sCount !== 0) return false
    }

    return true;
}