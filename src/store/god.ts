import { makeAutoObservable } from 'mobx';
import RootStore from './root';

export class GodStore {
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        makeAutoObservable(this, {
          rootStore: false
        });
    }
}