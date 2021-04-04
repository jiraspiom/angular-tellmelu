import { Component, OnInit } from '@angular/core';
import { Segredo } from 'src/models/Segredo';
import { SegredoService } from 'src/services/segredo.service';

@Component({
  selector: 'app-segredo',
  templateUrl: './segredo.component.html',
  styleUrls: ['./segredo.component.css']
})
export class SegredoComponent implements OnInit {
  segredos: Segredo[] = [];

  constructor(
    private segredoService: SegredoService,
    ) { }

  ngOnInit() {
    this.getSegredos();
  }

  public getSegredos(): void{
    this.segredoService.getSegredo().subscribe({
      next:(segredos: Segredo[]) =>{
        this.segredos = segredos
      },
      error: (error: any)=>{
        console.log(error);
      },
      complete: () => console.log('ok')
    });
  }
}
