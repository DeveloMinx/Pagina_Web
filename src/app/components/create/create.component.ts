import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  dataUser: any;
  public postForm:FormGroup


  constructor(
    private afAuth: AngularFireAuth,
    public postService:PostService,
    public formBuilder:FormBuilder,
    public router:Router
  ) { 
    this.postForm = this.formBuilder.group({
      name:[''],
      descrip:[''],
      value:[''],
    })
  }

  ngOnInit(): void {
    this.afAuth.currentUser.then(user => {
      if(user && user.emailVerified) {
        this.dataUser = user; 
        console.log(user)
      } else {
        this.router.navigate(['/login']);
      }
    })
  }
  onSubmit(){
    this.postService.createpost(this.postForm.value)
    this.router.navigate(['/dashboard'])
  }


  logOut() {
    this.afAuth.signOut().then(() => this.router.navigate(['/login']));
  }

}
