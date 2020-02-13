import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faThumbsUp, faMapMarkerAlt, faInfoCircle, faCommentAlt, faCheck, faHeart} from '@fortawesome/free-solid-svg-icons';
import { faEdit} from '@fortawesome/free-regular-svg-icons';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';

import { NavController } from '@ionic/angular';
import { UsersService } from '../services/users.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  faChevronLeft = faChevronLeft;
  faEdit = faEdit;

  userId: string;
  isOwner: boolean = false;
  editMode:boolean = false;

  photoFile: File; // -------- Variável para o Arquivo da foto.

  userObj:any = {
    first_name: 'Carregando...',
    last_name: '',
    description: '',
    photo: '../../../assets/avatar_placeholder.png',
    is_guide: 0,
  }
 
  editForm: FormGroup;

  constructor(
    public router: Router, 
    private navCtrl: NavController, 
    private route: ActivatedRoute, 
    public users: UsersService,
    public formBuilder: FormBuilder,
    ){
    
      this.editForm = this.formBuilder.group({
        description: [''],
      });
    }
  
  changePhoto(photo){
    this.photoFile = photo[0]; // Pega Foto do Input
    let reader = new FileReader(); // Inicia o Leitor de Arquivos
    reader.readAsDataURL(photo[0]); // Manda ler o arquivo da foto
    reader.onload = (file: any) => {
      this.userObj.photo = file.target.result; // Muda ****LOCALMENTE**** a imagem de perfil do Usuário
    }
  }

  updateUser(){
    let formData = new FormData(); // Inicia o objeto especial FormData
    let description = this.editForm.value.description; // Pega o valor do Formulário do Front
    
    if(description) formData.append("description", description); // Coloca no FormData, se existir
    if(this.photoFile) formData.append("photo", this.photoFile); // Coloca o arquivo da foto no FormData, se existir

    // MANDA PRO BACK
    this.users.updateUser(this.userId, formData).subscribe(res=>{
      console.log(res);
    })
  }

  getUser(){
    this.users.getUser(this.userId).subscribe(res => {
      this.userObj = res;
      console.log(res);
      //if(!res.photo) this.userObj.photo = '../../../assets/avatar_placeholder.png';
      let user = JSON.parse(localStorage.getItem("userData"));
      if(!user) return;
      let userId = user.id;
      if(res.id === userId) this.isOwner = true;
    })
  }

  toggleEdit(){
    this.editMode = !this.editMode;
  }

  goBack(){
    if(this.editMode) return this.toggleEdit();
    this.navCtrl.back();
  }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    
    if(!this.userId){
      let user = JSON.parse(localStorage.getItem("userData"));
      console.log("userData ", user)
      if(!user) return this.router.navigateByUrl("/pre-login");
      this.userObj = user;
      this.userId = user.id;
      //if(!user.photo) this.userObj.photo = '../../../assets/avatar_placeholder.png';
      this.isOwner = true;
    }

    else this.getUser();
  }

}
