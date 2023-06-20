class GiftExchange {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

    pairs(names) {
    if (names.length % 2 !== 0) {
      return "Please enter an even number of names.";
    } else {
      let pairs = [];
      for (let i = 0; i < names.length; i += 2) {
        let random = Math.floor(Math.random() * names.length);
        // pair the names randomly
        pairs.push([names[i], names[random]]);
      }
      return pairs;
    }
  }

  traditional(names) {
    // shuffle the names array
    let currentIdx = names.length - 1;

    while (currentIdx > 0) {
      // pick an element
      const randomIdx = Math.floor(Math.random() * currentIdx);
      // swap it with current name
      const temp = names[currentIdx];
      names[currentIdx] = names[randomIdx];
      names[randomIdx] = temp;

      currentIdx -= 1;
    }

    // create ordered pairings
    const pairings = [];

    for (let i = 0; i < names.length; i++) {
      const giver = names[i];
      const receiver = i === names.length - 1 ? names[0] : names[i + 1];
      pairings.push(`${giver} is giving a gift to ${receiver}`);
    }

    return pairings;
  }
}

module.exports = GiftExchange;
