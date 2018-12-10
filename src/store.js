import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		nasaResponse: {},
		sortType:     ''
	},
	getters: {
		nasaResponse: state => {
			let nataResponseUpgrade = []
			if(Object.keys(state.nasaResponse).length > 0) {
				if(state.nasaResponse.items.length > 0) {
					state.nasaResponse.items.forEach((element) => {
						if(element.links){
							if(element.links[0].render === 'image' &&
								element.data[0].description.replace(/^\s+|\s+$/g, "") !== element.data[0].title.replace(/^\s+|\s+$/g, ""))
							{
								nataResponseUpgrade.push({
									img: element.links[0].href,
									description: element.data[0].description.replace(/^\s+|\s+$/g, ""),
									date_created: element.data[0].date_created,
									data_formated: window.moment(element.data[0].date_created).format('MMMM Do YYYY, h:mm:ss a'),
									title: element.data[0].title.replace(/^\s+|\s+$/g, "")
								})
							}
						}
					});
				}
			}
			return nataResponseUpgrade;
		},
		sortType : state => state.sortType
	},
	mutations: {
		setNasaResponse(state,payload) {
			state.nasaResponse = payload;
		},
		setSortType(state,payload) {
			state.sortType = payload;
		}
	},
	actions: {
		setNasaResponse(context,payload) {
			if(payload !== undefined) {
				context.commit('setNasaResponse', payload);
			} else {
				context.commit('setNasaResponse', {});
			}
		},
		setSortType(context,payload) {
			context.commit('setSortType', payload);
		}
	}
})
