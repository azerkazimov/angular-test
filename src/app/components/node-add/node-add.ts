import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NoteService } from '../../services/note';

@Component({
  selector: 'app-node-add',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './node-add.html',
  styleUrl: './node-add.css',
})
export class NodeAdd {
  constructor(private noteService: NoteService) {}

  protected submitted = false;

  // Геттер возвращает САМ сигнал из сервиса
  protected get notes() {
    return this.noteService.getNotes();
  }

  // Два простых независимых сигнала для полей ввода
  protected noteTitle = signal('');
  protected noteContent = signal('');

  protected addNote(form: NgForm) {
    this.submitted = true;
    const title = this.noteTitle().trim();
    const content = this.noteContent().trim();

    console.log('Adding note:', { title, content });

    // Если оба поля пустые — ничего не делаем
    if (!title && !content) return;

    this.noteService.addNote(title, content);

    // Очищаем инпуты после успешного добавления
    this.noteTitle.set('');
    this.noteContent.set('');
    this.submitted = false;
  }

  showAlert() {
    alert('Hello from the Notes App!');
  }
}
