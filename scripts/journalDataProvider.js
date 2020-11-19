/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "11/16/2020",
        concept: "Group Project",
        entry: "We had a full day to collaborate with our teammates for our Hello World group project.",
        mood: "Happy"
    },
    {
        id: 2,
        date: "11/17/2020",
        concept: "JavaScript | Beginnings",
        entry: "Did a demo of our project to the class. Now, we are diving into JavaScript.",
        mood: "Happy"
    },
    {
        id: 3,
        date: "11/18/2020",
        concept: "JavaScript | Modules and Daily Journal ",
        entry: "It's a full lab day to go over the concepts on your own and to do the Daily Journal exercise.",
        mood: "Confused"
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    ) 
    return sortedByDate
}