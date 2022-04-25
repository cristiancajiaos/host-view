import { FooComponent } from './../foo/foo.component';
import { ComponentFactoryResolver } from '@angular/core';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  @ViewChild("container", { read: ViewContainerRef }) ctr: ViewContainerRef;

  constructor(
    private resolve: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.ctr.createComponent(FooComponent);
  }

}
