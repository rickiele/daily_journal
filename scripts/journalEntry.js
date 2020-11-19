/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">

            <div class="entry__journalDate"> ${entry.date}</div> 
            <div class="entry__journalConcept"> ${entry.concept}</div> 
            <div class="entry__journalText"> ${entry.entry}</div>   

            <div class="entry__buttonDiv">
                <button class="entry__editButton">Edit</button>
                <button class="entry__deleteButton">Delete</button>
             </div>
        </section>
    `
}