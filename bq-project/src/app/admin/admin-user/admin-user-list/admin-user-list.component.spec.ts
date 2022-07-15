import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { BdUserService } from '../../../services/bd-user.service';
import { AdminUserListComponent } from './admin-user-list.component';
import { FilterPipe } from '../../../pipes/filter.pipe';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';

fdescribe('AdminUserListComponent', () => {
  let fixture: ComponentFixture<AdminUserListComponent>;
  let component: AdminUserListComponent;
  let bduserServiceSpy: jasmine.SpyObj<BdUserService>;

beforeEach(async () => {
    bduserServiceSpy = jasmine.createSpyObj<BdUserService>('BdUserService', [
      'getBdUserService',
    ]);
    await TestBed.configureTestingModule({
      declarations: [AdminUserListComponent, FilterPipe],
      imports: [
        ToastrModule.forRoot(),],
      providers: [ 
        ToastrService, 
        { provide: BdUserService, useValue: bduserServiceSpy }
      ],
    }).compileComponents();

    bduserServiceSpy.getBdUserService.and.returnValue(
      of([
        {
          id: 1,
          email: 'jammie2004_9@hotmail.com',
          password: '',
          roles: {
            description: 'admin',
            admin: true,
          },
        },
      ])
    );

    fixture = TestBed.createComponent(AdminUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('getBdUserService should return a user object', () => {
    //component.getUser();
    expect(component.listWorkers.length).toBe(1);
  });
 /*  it('', () => {
    expect()
  }); */
});

//TEST DE JEIMMY
