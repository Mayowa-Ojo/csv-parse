/** Import the file system module */
const fs = require('fs');

/**
 * @param {String} fileName
 */

class CsvParse {
  // constructor takes the filename as parameter
  constructor(fileName) {
    this.fileName = fileName;
    this.raw = [];
    this.data = '';
    this.result = []
  }

  // read the csv file and split the rows into an array using the line-breaks
  // store the result in the data array
  readFile() {
    try {
      const response = fs.readFileSync(this.fileName, 'utf8');
      this.raw.push(response);
      this.data = this.raw[0].split('\r\n');
    } catch(err) {
      return('Error: ', err.stack);
    }
  }

  // loop through the data array and select the cell in [row-i, col-i] using the index
  // store the result in the result array
  traverseFile() {
    for(let i = 0; i < this.data.length - 1; i++) {
      this.result.push(this.data[i].split(',')[i]);
    }
  }

  // getResult calls the methods to read and traverse the file then return the result in an array
  getResult() {
    this.readFile();
    this.traverseFile();
    return this.result;
  }
}

/** create an instance of the CsvParse class by passing the filename to the constructor
 *  and immediately call the getResult method
 */ 
    
const csv = new CsvParse('test.csv').getResult();
console.log(csv);