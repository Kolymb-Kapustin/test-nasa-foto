<template>
	<div id="component-search-field">
		<div class="row center-h">
			<div class="cols s_24 l_16">
				<div class="search-container">
					<input class="search-container__input" v-model="searchString" type="text">
				</div>
				<div>Сортировать по</div>
				<div @click="changeSort($event,'date_created')"> Дате </div>
				<div @click="changeSort($event,'title')"> Заголовку </div>
				<div v-if="nasaResponse"></div>
			<br>
			<br>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'SearchField',

	data() {
		return {
			searchString: '',
			lazyLoad: null,
		}
	},
	
	computed: {
		...mapGetters([
			'nasaResponse'
		])
	},

	watch: {
		searchString() {
			fetch(`https://images-api.nasa.gov/search?q=${this.searchString.toLowerCase()}`)
			.then( r => r.json()).then( ({collection}) => {
				this.$store.dispatch('setNasaResponse',collection);
			})
		}
	},

	methods: {
		changeSort(event,payload) {
			this.$store.dispatch('setSortType', payload);
		}
	},

	mounted() {
		this.searchString = 'mars'
	}
}

</script>

<style lang="scss">

	.search-container {
		margin: 40px 0px;
		&__input {
			height: 50px;
			border: solid 2px gray;
			border-radius: 5px;
			padding: 0 10px;
		}
	}
</style>
