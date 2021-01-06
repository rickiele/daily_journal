/* 

 */
import { saveJournalEntry } from '../journalDataProvider.js'

const contentTarget = document.querySelector(".form")
const eventHub = document.querySelector(".journal")

const render = () => {
    contentTarget.innerHTML = `
        <fieldset class="form__journalDate">
          <label for="journalDate"><h2>Date of Entry</h2></label>
          <input type="date" name="journalDate" id="journalDate">
        </fieldset>

        <fieldset class="form__conceptsCovered">
          <label for="conceptsCovered"><h2>Concepts Covered</h2></label>
          <input type="text" name="conceptsCovered" id="conceptsCovered">
        </fieldset>

        <fieldset class="form__journalEntry">
          <label for="journalEntry"><h2>Journal Entry</h2></label>
          <textarea name="journalEntry" id="journalEntry"></textarea>
        </fieldset>

        <fieldset class="form__mood">
          <label for="mood"><h2>How are you feeling today?</h2></label>
              <select id="mood" name="mood" form="moods">
                  <option value="0">Select a mood</option>
                  <option value="😁 Overjoyed">😁 Overjoyed</option>
                  <option value="🤩 Optimistic">🤩 Optimistic</option>
                  <option value="🧐 Determined">🧐 Determined</option>
                  <option value="😁 Happy">😁 Happy</option>
                  <option value="😶 Okay">😶 Okay</option>
                  <option value="😢 Big Sad">😢 Big Sad</option>
                  <option value="😩 Very Confused">😩 Very Confused</option>
                  <option value="😡 Frustrated">😡 Frustrated</option>
                  <option value="🤔 Forgetful">🤔 Forgetful</option>
              </select>
        </fieldset>
          <button id="journalEntryRecordBtn">Record Journal Entry</button>
    `
}

export const JournalFormComponent = () => {
  render()
}

// What ever is entered is putting it in the API
eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "journalEntryRecordBtn") {
      const date = document.querySelector("#journalDate").value
      const concept = document.querySelector("#conceptsCovered").value
      const entry = document.querySelector("#journalEntry").value
      const mood = document.querySelector("#mood").value    
  
      const newJournalEntry = {
          date: date,
          concept: concept,
          entry: entry,
          mood: mood
      }
      saveJournalEntry(newJournalEntry)    
  }

})
