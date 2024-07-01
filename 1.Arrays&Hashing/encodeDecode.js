// https://neetcode.io/problems/string-encode-and-decode




    var encode = (strs) => {
        let res = '';

        for(let s of strs){
            res += `${s.length}#${s}`;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    var decode = (str) =>{
        let res =[];
        let i=0;
        while(i < str.length){
            let j = i ;

            while(str[j]!= '#'){
                j++
            }
            // console.log(str)
            console.log(i)
            console.log(j)
            // console.log(str.substring(1,2))
            // console.log(parseInt(str.substring(i,j),10))
            let length = parseInt(str.substring(i,j),10)
            i = j+1;
            j = i + length;
            res.push(str.substring(i,j));
            i = j;
        }
        return res;
    }


    // console.log(encode(["neet","code","love","you"]));
    const encoded = encode(["neet","code","love","you"]);
    console.log(decode(encoded));
