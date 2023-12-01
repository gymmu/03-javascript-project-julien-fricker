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
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "-"){}
//sortiert alle - aus 
     else if (currentElement === "+") {}
    //sortiert alle + aus
    else {
    result.push(currentElement)
  }
}

const clearedString = result.join("")
//sagt, dass die Buchstabenelemente zusammengehören
const tmp = clearedString.split(" ")
//sagt, das die clearedString (gesäuberte Liste) durch Leerzeichen getrennt wird
print(tmp)


return tmp.length
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
  
for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
  const ascii = currentElement.charCodeAt (0)

  if (48 <= ascii && ascii <= 57) {
//ascii code aller Grossbuchstaben von A
  } else if (65 <= ascii && ascii <= 70) {

  }else if (97 <= ascii && ascii <= 102) {

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