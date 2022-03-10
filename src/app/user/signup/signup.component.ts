import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'app/services/auth.service';
import { EnvironmentService } from 'app/services/environment.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignUpComponent implements OnInit {
  form: FormGroup;
  type: 'signup' | 'reset' | 'delete' = 'signup';
  loading = false;
  clients: any;

  serverMessage: string;
  error: any;

  constructor(
    public afAuth: AuthService,
    private envservice: EnvironmentService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      userid: ['', Validators.required],
      firstname: '',
      lastname: '',
      roleSelected: ['', Validators.required],
      client_ref: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(8), Validators.required]],
      passwordConfirm: ['', [Validators.minLength(8), Validators.required]],
    });
    this.envservice.getClients().subscribe({
      next: (value) => {
        this.clients = value;
      },
      error: (err) => console.log(`ERROR ${err.message}`),
    });
  }

  changeType(val) {
    this.type = val;
  }

  get isSignup() {
    return this.type === 'signup';
  }

  get isPasswordReset() {
    return this.type === 'reset';
  }

  get isDeleteUser() {
    return this.type === 'delete';
  }

  get email() {
    return this.form.get('email');
  }

  get userid() {
    return this.form.get('userid');
  }

  get password() {
    return this.form.get('password');
  }

  get passwordConfirm() {
    return this.form.get('passwordConfirm');
  }

  get passwordDoesMatch() {
    return this.password.value === this.passwordConfirm.value;
  }

  async onSubmit() {
    this.loading = true;

    const email = this.email.value;
    const userid = this.userid.value;
    const password = this.password.value;

    if (this.isSignup) {
      const signup = {
        userid,
        createdAt: '2022-02-28T13:57:31.123Z',
        updatedAt: '2022-02-28T13:57:31.123Z',
        email,
        client_ref: this.form.get('client_ref').value,
        lastname: this.form.get('lastname').value,
        firstname: this.form.get('firstname').value,
        password,
        role: this.form.get('roleSelected').value,
      };
      signup.client_ref = '12345';
      this.afAuth.signUp(signup);
    }
    if (this.isPasswordReset) {
      const login = { userid, password };
      this.afAuth.resetPassword(login);
    }
    if (this.isDeleteUser) {
      this.afAuth.deleteUser(userid);
    }

    this.loading = false;
  }
}
