var isValid = function(s) {
  let stack = []

  if(s.length %2 !== 0) return false

  for(let i=0; i<s.length;i++) {
      let j = s[i]

      if(j === '(' || j=== '[' ||j=== '{') {
          stack.push(j)
      } else {
          let top = stack[stack.length - 1]

          if((j === ')' && top === '(') || (j=== ']' &&top==='[')||( j=== '}'&&top==='{')) {
              stack.pop()
          } else {
              return false
          }
      }
  }

  return stack.length === 0
};


isValid('()')