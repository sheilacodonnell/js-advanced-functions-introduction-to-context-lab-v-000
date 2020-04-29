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
  return record.timeInEvents.push(dateStamp)
}