import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;

  serverMessage: string;
  error: any;

  constructor(private afAuth: AuthService, private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      backendport: [
        localStorage.getItem('uri'),
        [Validators.required, Validators.required],
      ],
      userid: ['', [Validators.required, Validators.required]],
      password: ['', [Validators.minLength(6), Validators.required]],
      passwordConfirm: ['', []],
    });
  }

  get userid() {
    return this.form.get('userid');
  }
  get password() {
    return this.form.get('password');
  }
  get backendport() {
    return this.form.get('backendport');
  }

  storeBackendURI() {
    const backendport = this.backendport.value;
    const uri =
      'http://' + window.location.hostname + ':' + backendport + '/graphql';
    localStorage.setItem('uri', uri);
    console.log('GraphQL localstorage set using login:', uri);
    window.location.reload();
  }

  enablePortInput(): boolean {
    if (localStorage.getItem('uri') === null) {
      return true;
    } else {
      return false;
    }
  }

  async onSubmit() {
    this.loading = true;
    const userid = this.userid.value;
    const password = this.password.value;
    const login = { userid, password };
    this.afAuth.login(login);
    this.loading = false;
  }
}
