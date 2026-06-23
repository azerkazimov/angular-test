import { Injectable, signal } from '@angular/core'; 
import { Note } from '../model/note.model';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private notes = signal<Note[]>([
    { id: 1, title: 'Note 1', content: 'This is the first note.', createdAt: new Date() },
    { id: 2, title: 'Note 2', content: 'This is the second note.', createdAt: new Date() },
  ]);

  getNotes() {
    return this.notes; 
  }

  addNote(title: string, content: string) {
    const newNote: Note = {
      id: Date.now(),
      title,
      content,
      createdAt: new Date(),
    };
    
    this.notes.update((currentNotes) => [...currentNotes, newNote]);
  }
}