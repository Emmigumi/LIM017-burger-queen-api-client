import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { LoginComponent } from './login.component';
import { BdUserService } from '../services/bd-user.service';
import { RouterTestingModule } from '@angular/router/testing';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let bduserServiceSpy: jasmine.SpyObj<BdUserService>;

  beforeEach(async () => {
    bduserServiceSpy = jasmine.createSpyObj<BdUserService>('BdUserService', ['loginUsers']);
    
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports:[
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        ],
      providers: [
      ToastrService,
      {provide: BdUserService, useValue: bduserServiceSpy}
    ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
