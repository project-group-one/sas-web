import { observable, action, runInAction } from 'mobx'
import { fetchFoodTypes, fetchFoodRegulation } from '~/service/food'

class Food {
    @observable types = [];
    @observable selectedKey = undefined
    @observable regulation = null;

    @action
    async getFoodTypes() {
        const data = await fetchFoodTypes()

        this.types = data
        if (data.length > 0) {
            runInAction(() => {
                this.getFoodRegulation(data[0].key)
            })
        }
    }

    @action
    async getFoodRegulation(key) {
        this.selectedKey = key

        const data = await fetchFoodRegulation(key)

        this.regulation = data
    }
}

export default Food
