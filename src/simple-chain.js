const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    let i=0;
    if (typeof position != 'number' || position<0 || position>this.chain.length)
    {
      this.chain.length=0;
      throw new Error;
    }
    i=position-1;
    this.chain.splice(i, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let finishChain=this.chain.join('~~');
    this.chain.length=0;
    return finishChain;
  }
};

module.exports = chainMaker;
