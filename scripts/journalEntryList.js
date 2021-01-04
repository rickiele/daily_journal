/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { getEntries, useJournalEntries } from './JournalDataProvider.js'
import { JournalEntryComponent } from './JournalEntry.js'

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector(".journalEntry")
const eventHub = document.querySelector(".container")

export const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    const entries = useJournalEntries()

    for (const entry of entries) {
        /*
            Invoke the component that returns an
            HTML representation of a single entry
        */
       const journalHTMLRepresentations = JournalEntryComponent(entry)

        entryLog.innerHTML += journalHTMLRepresentations
    }
}

eventHub.addEventListener("journalEntryRecorded", customEvent => {
    EntryListComponent()
})


export const EntriesList = () => {
    getEntries()
        .then(() => {
            const allEntries = useJournalEntries()
            render(allEntries)
        })
}
