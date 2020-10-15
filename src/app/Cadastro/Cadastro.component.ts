import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ToDo } from '../Model/ToDo';

@Component({
  selector: 'app-Cadastro',
  templateUrl: './Cadastro.component.html',
  styleUrls: ['./Cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  todosList: ToDo[] = [];
  tarefaNova: string = '';

  constructor() { }

  ngOnInit() {
  }

  CadastraTarefa(){
    let tarefa = new ToDo();
    tarefa.nome = this.tarefaNova;
    tarefa.isFeito = true;
    this.todosList.push(tarefa);
  }


  CheckTarefa(tarefa: ToDo){
    this.todosList.forEach((elemento) =>{
        if(elemento.nome === tarefa.nome)
        {
          elemento.isFeito = !elemento.isFeito;
        }
    });
  }

  ApagarTarefa(tarefa: ToDo){
    let indexRemovido: number = this.GetIndexTarefa(tarefa);
    this.todosList = this.todosList.filter((elemento) => {
      return elemento.nome != tarefa.nome;
    });
    //delete this.todosList[indexRemovido];
    
    
  }

  GetIndexTarefa(tarefa: ToDo) : number{
    let index = this.todosList.indexOf(tarefa);
    return index;
  }


}
