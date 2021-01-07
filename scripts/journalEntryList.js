/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries, getEntries } from "./journalDataProvider.js"
import { JournalEntryComponent } from "./journalEntry.js"
import { useMoods, getMoods } from './moodProvider.js'

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector("#entryLog")
const eventHub = document.querySelector(".journal")


/* RECORD JOURNAL ENTRY BUTTON - EVENT DISPATCH */
eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "journalEntryRecordBtn") {
        const customEvent = new CustomEvent("journalEntryRecorded")
        eventHub.dispatchEvent(customEvent)
    }
})

/* RECORD JOURNAL ENTRY BUTTON - EVENT LISTENER */
eventHub.addEventListener("journalEntryRecorded", customEvent => {
    EntryListComponent()
})

/* DELETE BUTTON - EVENT DISPATCH */
// eventHub.addEventListener("click", clickEvent) => {
//     if (clickEvent.target.id === "entry__deleteButton") {
//         const customEvent = new CustomEvent("journalEntryDelete")
//         eventHub.dispatchEvent(customEvent)
//     }
// }

// /* DELETE BUTTON - EVENT LISTENER */
// eventHub.addEventListener("journalEntryDelete", customEvent => {
// })



let journalEntryCards = []
let allMoods = []

export const EntryListComponent = () => {
    // getEntries()
    // .then(getMoods)
    // .then( () => {
    //     allMoods = useMoods()
    //     let entries = useJournalEntries()

    //     for (const entry of entries) {
    //         const matchedMoods = allMoods.find( (mood) => mood.id === entry.moodId)
    //         entry.mood = matchedMoods.label
    //          journalEntryCards.push(JournalEntryComponent(entry))
            
    //         }
    //         entryLog.innerHTML += journalEntryCards.join("")
    // })



    // Use the journal entry data from the data provider component
        getEntries().then( () => {
            let entries = useJournalEntries()
            for (const entry of entries) {
                journalEntryCards.push(JournalEntryComponent(entry))
            }
            entryLog.innerHTML += journalEntryCards.join("")
        }) 
}
