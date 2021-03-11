module.exports = function check(str, bracketsConfig) {
  let oldStr = ''

  let found = true

  do{
    oldStr = str

    bracketsConfig.forEach(item => {
      const repl = item[0] + item[1]
      str = str.replace(repl,'')
    });

    if(str==oldStr){
      found = false
    } else {
      found = true
    }
    if(str.length==0){found= false}
  } while (found)

  if (str.length == 0){return true}
  return false
}
