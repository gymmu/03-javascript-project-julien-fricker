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
  if (currentElement === " " && nextElement === " ") {}
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

export function aufgabe05 (args) {
  const input = args
  const result = []

let countE = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === " "){
    //ignoriert alle Leerzeichen
    }  else if (currentElement === ".") {
    //ignoriert alle Punkte
    } else if (currentElement.toUpperCase() === currentElement){
    //wenn Grossbuchstaben erkannt werden, soll true herausgegeben werden
      return true
    }

  
  }
  return false
    //Wenn das eingegebene die obere funktion nicht erfüllt, dann soll "false" zurückgegeben werden
}

export function aufgabe06 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
  }
  return result.join("")
}

export function aufgabe07 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
    if(input[0].toLowerCase() ==="u") {
      if ( input[i+1] ==="n")
      if (input[i+2] ==="d")
      return true
    }//wenn u am satzanfang ist und n und d folgen, soll true herausgegeben werden.
  } 
return false
//ansonsten wird false herausgegeben.
}

export function aufgabe08 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
    if(currentElement === "e") {
      result.push("3")
    }
    else {
      result.push(currentElement)
  }
  }
  return result.join("")
}





export function aufgabe09(args) {
  const input = args

let len = 0

  for (let i = 0; i < input.length; i++) {
  len++ 
  }//zähle die Buchstabenelemente

  if (len === 6) {
    return true
    //gib "true" zurück wenn die buchstabenanzahl genau 6 beträgt
  }
  return false
}

export function aufgabe10 (args) {
  const input = args

if (input.length !== 7) return false
if (input[0]  !== "#") return false
  
for (let i = 1; i < input.length; i++) {
  const currentElement = input[i]
  const ascii = currentElement.charCodeAt(0)

  if (48 <= ascii && ascii <= 57) {
//ascii code aller Zahlen von 0-9
  } else if (65 <= ascii && ascii <= 70) {
//ascii code aller Grossbuchstaben von A-F
  }else if (97 <= ascii && ascii <= 102) {
//ascii code aller kleinbuchstaben von a-f
  }
else {return false
}
}
  return true
}





export function aufgabe11 (args) {
  const input = args
  const result = []

if(input.length > 1){
  return null
}

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
return currentElement.charCodeAt(0)

  }
  return null
}

export function aufgabe12 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if(currentElement === "e")
    return i
  }
  return -1
}

export function aufgabe13 (args) {
  const input = args
  const result = []
  for (let i = input.length - 1; i >=0; i--) {
    const currentElement = input[i]
    if(currentElement === "e"){
    return i
    }
  }
  return -1
}

export function aufgabe14 (args) {
  const input = args
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      count++
    }
  }
 if (count === input.length) return (2)
 else return (-1)
}

export function aufgabe15 (args) {
  const input = args
  const result = []

  if (input.lastIndexOf(' ') == input.length - 1) {
      for (let i = 0; i < input.length - 1; i++) {
        const currentElement = input[i]
        result.push(currentElement)
      }
  } else {
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
  
      if (currentElement !== " ") {
        result.push(currentElement)
      } else {
        return result.join("")
      }
    }

  }

  return result.join("")
}







export function aufgabe24 (args) {
  const input = args
  const result = []

  if (input.lenght === 1) return input

  const firstElement = input[0]
  const lastElement = input[ input.lenght - 1 ]

  result.push(lastElement)
for (let i = 1; i < input.length - 1; i++) {
  const currentElement = input[i]
  result.push(currentElement)
}
  result.push(firstElement)

  return result.join("")
}

export function bubbleSort (args) {

const text = args
const list = text.split("") // Damit wandeln wir den Text in eine Liste um, das brauchen wir wenn wir Elemente vertauschen möchten.
for (let i = 0; i < list.length - 1; i++) {
  const currentElement = list[i]
  const nextElement = list[i + 1]
  if (currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
    // Reihenfolge stimmt nicht, Elemente müssen getauscht werden.
    const tmp = list[i + 1]
    list[i + 1] = list[i]
    list[i] = tmp
    i = -1 // starte von vorne wenn etwas vertauscht wurde.
  }
}
const result = list.join("")
return result

}


