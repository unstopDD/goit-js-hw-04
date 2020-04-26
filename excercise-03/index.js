'use strict';

function findBestEmployee(employees) {
  const numOfTasks = Object.values(employees);
  const employee = Object.keys(employees);
  let maxTasks = 0;
  let bestEmployee;

  // eslint-disable-next-line
  for (const numOfTask of numOfTasks) {
    if (numOfTask > maxTasks) {
      maxTasks = numOfTask;
      bestEmployee = numOfTasks.indexOf(numOfTask);
    }
  }

  return employee[bestEmployee];
}
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
