class User {
    constructor(id, name) {
      this.id = id;
      this.name = name;
  }
  getName() {
    return this.name; 
}

setName(name)  {
    this.name = name;
}

  }





module.exports = User;