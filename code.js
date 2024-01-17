class HashMap {
  constructor() {
    this.hashTable = new Array(10);
    this.size = 0;
  }

  //Turn string into an integer for indexing
  hash(string) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < string.length; i++) {
      hashCode = primeNumber * hashCode + string.charCodeAt(i);
    }
    return hashCode % this.hashTable.length;
  }

  //Get index and insert value at index of hash table
  set(key, value) {
    const index = this.hash(key);

    if (this.hashTable[index]) {
      for (let i = 0; i < this.hashTable[index].length; i++) {
        if (this.hashTable[index][i][0] === key) {
          this.hashTable[index][i][1] = value;
          return;
        }
      }
      this.hashTable[index].push([key, value]);
    } else {
      this.hashTable[index] = [];
      this.hashTable[index].push([key, value]);
    }
    this.size++;
  }

  //gets the value of key
  get(key) {
    const index = this.hash(key);

    if (this.hashTable[index]) {
      for (let i = 0; i < this.hashTable[index].length; i++) {
        if (this.hashTable[index][i][0] === key) {
          return this.hashTable[index][i][1];
        }
      }
    }
    return null;
  }

  //removes entry from hash table
  remove(key) {
    const index = this.hash(key);

    if (this.hashTable[index]) {
      for (let i = 0; i < this.hashTable[index].length; i++) {
        if (this.hashTable[index][i][0] === key) {
          this.hashTable[index].splice(i, 1);
          this.size--;
          return true;
        }
      }
    } else {
      return false;
    }
  }

  //checks hash table for entry
  has(key) {
    const index = this.hash(key);

    if (this.hashTable[index]) {
      for (let i = 0; i < this.hashTable[index].length; i++) {
        if (this.hashTable[index][i][0] === key) {
          return true;
        }
      }
    }
    return false;
  }

  //gives the number of key-value pairs
  length() {
    return this.size;
  }

  //resets the entire table
  clear() {
    this.hashTable = new Array(10);
    this.size = 0;
  }

  //generates list of all keys in hash table
  keys() {
    let keyArray = [];

    for (let i = 0; i < this.hashTable.length; i++) {
      if (this.hashTable[i]) {
        for (let j = 0; j < this.hashTable[i].length; j++) {
          if (this.hashTable[i][j]) {
            keyArray.push(this.hashTable[i][j][0]);
          }
        }
      }
    }
    return keyArray;
  }

  //generates list of values
  values() {
    let valueArray = [];

    for (let i = 0; i < this.hashTable.length; i++) {
      if (this.hashTable[i]) {
        for (let j = 0; j < this.hashTable[i].length; j++) {
          if (this.hashTable[i][j]) {
            valueArray.push(this.hashTable[i][j][1]);
          }
        }
      }
    }
    return valueArray;
  }

  //generates list of key-value pairs
  entries() {
    let entriesArray = [];

    for (let i = 0; i < this.hashTable.length; i++) {
      if (this.hashTable[i]) {
        for (let j = 0; j < this.hashTable[i].length; j++) {
          if (this.hashTable[i][j]) {
            entriesArray.push([
              this.hashTable[i][j][0],
              this.hashTable[i][j][1],
            ]);
          }
        }
      }
    }
    return entriesArray;
  }
}
