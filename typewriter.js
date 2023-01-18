const sentence = "hello there from lighthouse labs";

//Set inital increment 
let delay = 50

for (const char of sentence) {
  setTimeout(() => {
    
    process.stdout.write(char + '\n')

  }, delay)
  
  delay = delay + 50
}


 