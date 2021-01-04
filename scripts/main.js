import { EntryListComponent } from './journalEntryList.js'
EntryListComponent()

import { getEntries, useJournalEntries } from './journalDataProvider.js'
getEntries()
useJournalEntries()

import { JournalEntryComponent } from './journalEntry.js'
JournalEntryComponent()