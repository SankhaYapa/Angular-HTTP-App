import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostService } from 'src/app/services/post.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {
  list:Array<any>=[]
  constructor(private _snackBar:SnackBarService,private postServices:PostService){

  }
  ngOnInit(): void {
    this.postServices.findAll()
    .subscribe(response=>{
      console.log(response);
      this.list=response;
      console.log(this.list)
    })
  }
  delete(id:any){
    if(confirm('are you sure'+id)){
      this.postServices.delete(id)
      .subscribe(response=>{
       if(response){
       
        this._snackBar.trigger('deleted','close')
        for(let i=0;i<this.list.length;i++){
          if(this.list[i].id==id){
            this.list.splice(i,1)
          }
        }
       }
      })
    }
  }
}
