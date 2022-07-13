import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of} from 'rxjs';
import { Workers } from 'src/app/models/workers';
import { BdUserService } from '../../../services/bd-user.service';
import { AdminUserListComponent } from './admin-user-list.component';
import {  } from '';

fdescribe('AdminUserListComponent', () => {
  let fixture: ComponentFixture<AdminUserListComponent>;
  let component: AdminUserListComponent;
let bduserServiceSpy: jasmine.SpyObj<BdUserService>;

  beforeEach(async () => {

    bduserServiceSpy = jasmine.createSpyObj<BdUserService>('BdUserService', ['getBdUserService']);

    await TestBed.configureTestingModule({
      declarations: [AdminUserListComponent],
      providers: [{provide: BdUserService, useValue: bduserServiceSpy}],
      schemas:[NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    //bduserhttp = TestBed.inject(BdUserService)
  });
  it('usee', () => {
    bduserServiceSpy.getBdUserService.and.returnValue(of([
      {
      id: 1,
      email: 'jammie2004_9@hotmail.com',
      password: '',
      roles: {
        description: 'admin',
        admin: true,
      }
    }
  ]));
    component.getUser();
    expect(component.listWorkers.length).toBe(1);
  });
});

//TEST DE JEIMMY