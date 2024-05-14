import { Injectable } from '@angular/core';
import { Aluno } from '../models/aluno.model';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {
  private localStorageKey = 'alunos';

  constructor() { }

  getAlunos(): Aluno[] {
    const alunosJSON = localStorage.getItem(this.localStorageKey);
    return alunosJSON ? JSON.parse(alunosJSON) : [];
  }

  addAluno(aluno: Aluno): void {
    const alunos = this.getAlunos();
    alunos.push(aluno);
    localStorage.setItem(this.localStorageKey, JSON.stringify(alunos));
    window.location.reload();
  }

  updateAluno(aluno: Aluno): void {
    const alunos = this.getAlunos();
    const index = alunos.findIndex(a => a.email === aluno.email);
    if (index !== -1) {
      alunos[index] = aluno;
      localStorage.setItem(this.localStorageKey, JSON.stringify(alunos));
    }
  }

  deleteAluno(email: string): void {
    const alunos = this.getAlunos();
    const index = alunos.findIndex(a => a.email === email);
    if (index !== -1) {
      alunos.splice(index, 1);
      localStorage.setItem(this.localStorageKey, JSON.stringify(alunos));
    }
  }
}
