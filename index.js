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
  record.timeInEvents.push({
    type: "TimeIn",
    date: dateStamp.split(" ")[0],
    hour: parseInt(dateStamp.split(" ")[1])
  })
  
  return record
}