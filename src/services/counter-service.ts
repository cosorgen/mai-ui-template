import { observable } from '@microsoft/fast-element';

export class CounterService {
  // Global count state
  @observable count: number = 0;
}
