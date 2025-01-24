const iArgv = process.argv.splice(2)

const obj = {
  'a': 1,
  '@': 2
}

const arr = [
  'your abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz',
  'my abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz'
]

switch (iArgv[0]) {
  case 'a':
    console.log(1)
    console.log(arr)
    break

  default:
    break
}

console.log(obj)
