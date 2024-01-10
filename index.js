function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }
  
  // Function to return an array of the last two drivers
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }
  
  // Array containing the selectingDrivers functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  function selectDifferentDrivers(drivers, driverSelector) {
    return driverSelector(drivers);
  }
  // Function to create a fare multiplier
  function createFareMultiplier(multiplier) {
    return function (fare) {
      return fare * multiplier;
    };
  }
  
  // Function to double fares
  function fareDoubler(fare) {
    return createFareMultiplier(2)(fare);
  }
  
  // Function to triple fares
  function fareTripler(fare) {
    return createFareMultiplier(3)(fare);
  }
  
  // Function to select different drivers based on the provided function
  function selectDifferentDrivers(arrayOfDrivers, selectingFunction) {
    return selectingFunction(arrayOfDrivers);
  }
  
  module.exports = {
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
    selectingDrivers,
    createFareMultiplier,
    fareDoubler,
    fareTripler,
    selectDifferentDrivers,
  };