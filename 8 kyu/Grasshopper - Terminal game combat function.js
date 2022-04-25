function combat(health, damage) {
    i = health - damage
    if (i<=0){
      return 0
    }
    return i
  }