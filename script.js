export function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
  
  if (currentElement === "e") {
    result.push("") }
    else if (currentElement === "E") {
      result.push("")
    }

   else {
    result.push(currentElement)
  }
 
 } 
  return result.join("")
} 
  export function aufgabe02 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    let currentElement = input[i]
   
    //Falls es einen kleienen Buchstaben beinhaltet, soll dieser gross an die Liste angehängt werden.
currentElement=currentElement.toUpperCase ()
result.push (currentElement)
  }
  return result.join("")
}

export function aufgabe03 (args) {
  const input = args
  const result = []

let countE = 0

 for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
  
  if (currentElement === "e") {
//zähle dieses e
countE++
  }
  else if (currentElement === "E") {
//zähle auch dieses Element
countE++
  }
 }
  return countE
}