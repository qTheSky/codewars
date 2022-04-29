function abbrevName(name){
    let letters = name.match(/\b(\w)/g)
      let resul = letters.join(".").toUpperCase()
      return resul
    }