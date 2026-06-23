import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from '../../services/note';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-note-page',
  imports: [CommonModule],
  templateUrl: './note-page.html',
  styleUrl: './note-page.css',
})

export class NotePage {
  noteId!: number
  note: any

  constructor (
    private route: ActivatedRoute,
    private noteService: NoteService
  ){
    this.route.params.subscribe(params => {
      this.noteId = +params['id'];
      this.note = this.noteService.getNotes()().find((note: any) => note.id === this.noteId);
    });
  }
}
