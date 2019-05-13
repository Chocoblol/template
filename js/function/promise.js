'use strict';

// cancelable promise

class Cancelable extends Promise {
  constructor(executer) {
    super((resolve, reject) => {
      executer( val => {
        if (this.canceled) return;
        resolve(val);
      }, err => {
        if (this.canceled) return;
        reject(err);
      })
    });
    this.canceled = false;
  };

  cancel() {
    this.canceled = true;
  };
};
