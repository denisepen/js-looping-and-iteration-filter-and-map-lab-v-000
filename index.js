// Code your solution here:
driver = [
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
function exactMatch(driver, {name: "bob"}){
let exact = driver.filter(function(drive){
  return drive.name == "bob" })
return exact
}
