import { EntryListComponent } from './journalEntryList.js'
EntryListComponent()

import { getEntries, useJournalEntries, saveJournalEntry } from './journalDataProvider.js'
getEntries()
useJournalEntries()

import { JournalFormComponent } from './form/JournalForm.js'
JournalFormComponent()

import "./journalEntryList.js"