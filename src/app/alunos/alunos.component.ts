import { Component, OnInit } from '@angular/core';
import { Aluno } from './models/aluno.model';
import { AlunosService } from './services/alunos.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  alunos: Aluno[] = [];
  novoAluno: Aluno = {
    nome: '',
    email: '',
    sexo: '',
    dataNascimento: ''
  };

  constructor(private alunosService: AlunosService) { }

  ngOnInit(): void {
    let teste = this.alunosService.getAlunos();
    console.log(teste)
    this.alunos = teste
  }

  adicionarAluno(): void {
    console.log(this.novoAluno)
    this.alunosService.addAluno(this.novoAluno);
    this.novoAluno = {
      nome: '',
      email: '',
      sexo: '',
      dataNascimento: ''
    };
  }

  atualizarAluno(aluno: Aluno): void {
    this.alunosService.updateAluno(aluno);
  }

  excluirAluno(email: string): void {
    this.alunosService.deleteAluno(email);
  }
}
