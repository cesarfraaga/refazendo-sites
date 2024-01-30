import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefazendoMeliComponent } from './refazendo-meli.component';

describe('BeneficiosMeliComponent', () => {
  let component: RefazendoMeliComponent;
  let fixture: ComponentFixture<RefazendoMeliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RefazendoMeliComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RefazendoMeliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
