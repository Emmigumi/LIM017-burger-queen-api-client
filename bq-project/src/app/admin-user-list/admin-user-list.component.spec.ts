 //import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BdUserService } from '../services/bd-user.service';
import { AdminUserListComponent } from './admin-user-list.component';

fdescribe('AdminUserListComponent', () => {
  let fixture: ComponentFixture<AdminUserListComponent>;
  let component: AdminUserListComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUserListComponent],
      imports: [ HttpClientTestingModule],
      providers: [BdUserService],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 /*   it('hol', () => {
     spyOn(component.bduserService, 'getBdUserService');
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(AdminUserListComponent);
    expect(component.listWorkers.length).toBe(0);
  }); */
  it('usee', () => {
    spyOn(component.bduserService, 'getBdUserService');
    expect(component.listWorkers.length).toBe(0);
    component.getUser();
    expect(component.listWorkers.length).toBe(0);
    console.log('soy see', component.listWorkers.length);
  });
});


