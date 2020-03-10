import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFullArticleComponent } from './view-full-article.component';

describe('ViewFullArticleComponent', () => {
  let component: ViewFullArticleComponent;
  let fixture: ComponentFixture<ViewFullArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFullArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFullArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
