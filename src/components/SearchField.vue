<template>
	<div id="component-search-field">
		<div class="row center-h center-v">
			<div class="cols s_24 m__4 l_4">
				<img class="logo" src="../assets/logo.png" alt="">
			</div>
			<div class="cols s_24 m_14 l_12">
				<div class="search-container">
					<input class="search-container__input" placeholder="Enter the text" v-model="searchString" type="text">
					<div class="search-container__status" v-if="this.status.length > 0">{{this.status}}</div>
				</div>
			</div>
			<div class="cols s__10 s___6 m_4 l_4 s__offset-14 s___offset-18 m_offset-0">
				<div class="sort-container">
					<div @click="sortToggle($event)" class="sort-button">
							<span class="sort-button__text">sort</span>
							<svg :class="toggleSort ? 'active' : ''" class="sort-button__icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="284.929px" height="284.929px" viewBox="0 0 284.929 284.929" style="enable-background:new 0 0 284.929 284.929;" xml:space="preserve"><g><path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
					</div>
					<div :class="toggleSort ? 'active' : ''" class="sort-choose">
						<div class="sort-choose__button">
							<span :class="sortType === '' ? 'active' : ''" @click="changeSort('')" class="sort-choose__text">default</span>
						</div>
						<div class="sort-choose__button">
							<span :class="sortType === 'title' ? 'active' : ''" @click="changeSort('title')" class="sort-choose__text">sort by title</span>
						</div>
						<div class="sort-choose__button">
							<span :class="sortType === 'date_created' ? 'active' : ''" @click="changeSort('date_created')" class="sort-choose__text">sort by date</span>
						</div>
					</div>
				</div>
			</div>

			<img v-if="preloader" 
				src="https://img.buzzfeed.com/buzzfeed-static/static/enhanced/web05/2012/4/24/16/anigif_enhanced-buzz-10731-1335299292-14.gif?downsize=700:*&output-format=auto&output-quality=auto" 
				alt="loading"
			>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'SearchField',

	data() {
		return {
			status: '',
			searchString: '',
			preloader: false,
			toggleSort: false,
			lazyLoad: null
		}
	},
	
	computed: {
		...mapGetters([
			'nasaResponse',
			'sortType'
		]),
	},
	
	watch: {
		nasaResponse() {
			if(this.nasaResponse.length < 1) {
				if(this.searchString.length > 0) {
					this.status = 'Nothing found'
				} else {
					this.status = '';
				}
			}
		},
		searchString() {

			clearTimeout(this.lazyLoad);

			if(this.searchString.length > 0) {

				this.lazyLoad = setTimeout( ()=>{
				this.preloader = true;

					fetch(`https://images-api.nasa.gov/search?q=${this.searchString.toLowerCase()}`)
					.then( r => {
							this.preloader = false;
							if(r.status === 200) {
								this.status = '';
								return r.json()
							} else {
								this.status = 'An error occurred';
							}
						})
					.then( ({collection}) => {
						if(collection.items.length > 0) {
							this.$store.dispatch('setNasaResponse',collection);
						} else {
							this.$store.dispatch('setNasaResponse',{});
						}
					})
				},1500);
			} else {
				this.$store.dispatch('setNasaResponse',{});
				this.preloader = false;
			}
		}
	},

	methods: {
		changeSort(payload) {
			this.$store.dispatch('setSortType',payload);
		},
		sortToggle() {
			this.toggleSort ? this.toggleSort = false : this.toggleSort = true;
		}
	},

	mounted() {
		document.addEventListener('click', (e) => {
			if(	!e.target.classList.contains('sort-button') 
				&& !e.target.parentElement.classList.contains('sort-button')
			) {
				this.toggleSort = false;
			}
		});
	}
}

</script>

<style lang="scss">

	@import "src/scss/wanted";

	#component-search-field{
		margin: 40px 0px;
	}
	.logo {
		max-height: 200px;
		margin: 0 auto;
		display: block;
		margin-bottom: 20px;
		@include m__up {
			margin-bottom: auto;
		}
	}
	.search-container {
		margin-bottom: 20px;
		position: relative;
		@include m_up {
			margin-bottom: auto;
		}
		&__input {
			height: 50px;
			border: solid 2px gray;
			border-radius: 5px;
			padding: 0 10px;
			align-items: center;
		}
		&__status {
			position: absolute;
		}
	}
	.sort-container {
		position: relative;
		.sort-button {
			display: flex;
			justify-content: space-between;
			padding: 0px 15px;
			border: 2px solid gray;
			height: 50px;
			border-radius: 5px;
			cursor: pointer;
			display: flex;
			align-items: center;
			user-select: none;
			&__icon {
				height: 15px;
				width: 15px;
				&.active {
					transform: rotate(180deg);
				}
			}
			&__text {
				font-size: 12px;
				text-transform: uppercase;
				font-weight: bold;
			}
		}
		.sort-choose {
			position: absolute;
			top: 60px;
			border: 2px solid gray;
			padding: 10px;
			width: 100%;
			border-radius: 5px;
			display: none;
			background: #fff;
			&__button {
				margin: 5px 0px;
			}
			&__text{
				cursor: pointer;
				user-select: none;
				&.active {
					color: #0070ff;
				}
			}
			&.active {
				display: block;
			}
		}
	}
</style>
