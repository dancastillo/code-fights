function reverseParentheses(s) {
	    if (s.includes('(')){
		            return reverseParentheses(reverseStr(s));
		        } else {     
				        return s;
				    }
}

function reverseStr(str){
	    var regexp = /\(([^()]*)\)/i;
	    var subStr = regexp.exec(str)[1];
	    subStr = subStr.split('').reverse().join('');
	    return str.replace(regexp, subStr)
}
