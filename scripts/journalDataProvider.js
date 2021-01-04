/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

const eventHub = document.querySelector(".container")

let journal = []

export const useJournalEntries = () => {
    journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    ) 
    return journal.slice()
}

export const getEntries = () => {
    return fetch("http://localhost:8088/entries") // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(parsedEntries => {
            journal = parsedEntries
        })
}

const dispatchStateChangeEvent = () => {
    const journalStateChangedEvent = new CustomEvent("journalStateChanged")

    eventHub.dispatchEvent(journalStateChangedEvent)
}

export const saveJournalEntries = newEntry => {
    let stringifiedObj = JSON.stringify(newEntry)
    debugger
    return fetch('http://localhost:8088/entries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: stringifiedObj
    })
    .then(getEntries)
    .then(dispatchStateChangeEvent)
  }