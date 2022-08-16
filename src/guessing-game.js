class GuessingGame {
    constructor() {
      this.guessing = null;
    }

    setRange(min, max) {
      this.min = min;
      this.max = max;
    }

    guess() {
      return this.guessing = this.min + Math.round((this.max - this.min) / 2);
    }

    lower() {
      this.max = this.guessing;
    }

    greater() {
      this.min = this.guessing;
    }
}

module.exports = GuessingGame;
