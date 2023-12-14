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

export function aufgabe04 (args) {
  const input = args
  const result = []

  const cleanText = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
  if(32 === ascii) {
    cleanText.push(currentElement)
  }else if(65 <= ascii && ascii <= 90) {
    cleanText.push(currentElement)
  }else if(97 <= ascii && ascii <= 122) {
    cleanText.push(currentElement)
  }
  }
  
  const tmp = cleanText.join("")
  const tmpText = []

  for (let i = 0; i < tmp.length; i++) {
    const currentElement = tmp[i]
    const nextElement = tmp [i + 1] 
  if (currentElement === "" && nextElement === " ") {}
  //ignoriert mehrere Leerzeichen hintereinander

  else {
    tmpText.push(currentElement)
  }
  }

  const clean = tmpText.join("")

  let words = 0
  for (let i = 0; i < clean.length; i++) {
    const currentElement = clean[i]
    if (currentElement === " ") {
      words++
    }
  }
  return words + 1

}
