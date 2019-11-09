import { observable, action, runInAction } from 'mobx'
import { fetchFoodTypes } from '~/service/food'

class Food {
    @observable types = [];
    @observable info = {};

    @action
    async getFoodTypes() {
        const data = await fetchFoodTypes()

        this.types = data
    }
}

export default Food
