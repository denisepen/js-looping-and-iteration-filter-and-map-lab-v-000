// Code your solution here:
const driver = [
  {name: "bob", revenue: 12.2},
  {name: "jan", revenue: 205}
]

function driversWithRevenueOver(driver, revenue){
let revDrivers =   driver.filter(function(drive){return drive.revenue > revenue})
return revDrivers
}

function driverNamesWithRevenueOver(driver, revenue){
  let revDrivers =   driver.filter(function(drive){return drive.revenue > revenue})
  return driveNames =  revDrivers.map(function(drive){ return drive.name})
}

// let varObj = {name: "bob"}
function exactMatch(driver, new){
   newObj = Object.assign({}, new)
return exact = driver.filter(function(drive){
  return drive.revenue == newerObj.revenue})
}
