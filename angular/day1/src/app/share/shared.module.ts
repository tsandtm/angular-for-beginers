import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: []
})

export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        /**
         * truyền vào những service chỉ khởi tạo 1 instant cho toàn bộ app.
         */
        // UserService
      ]
    };
  }
}
