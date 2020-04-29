function createEmployeeRecord(record) {
  return {
    firstName: record[0],
    familyName: record[1],
    title: record[2],
    payPerHour: record[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

function createEmployeeRecords(records) {
  return records.map(record => createEmployeeRecord(record) )
}

function createTimeInEvent(record, dateStamp) {
  let dateAndHour = dateStamp.split(" ")
  record.timeInEvents.push({
    type: "TimeIn",
    date: dateAndHour[0],
    hour: parseInt(dateAndHour[1])
  })
  return record
}

function createTimeOutEvent(record, dateStamp) {
  let dateAndHour = dateStamp.split(" ")
  record.timeOutEvents.push({
    type: "TimeOut",
    date: dateAndHour[0],
    hour: parseInt(dateAndHour[1])
  })
  return record
}

function hoursWorkedOnDate(employee, date) {
  let outHour = employee.find(employee.timeOutEvents.date == date)
  let inHour = employee.find(employee.timeInEvents.date == date)
  return outHour - inHour
}
