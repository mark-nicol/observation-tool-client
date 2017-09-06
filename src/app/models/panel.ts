import { Type } from '@angular/core';

export class Panel {
  constructor(public component: Type<any>, public data: any) {}
}
