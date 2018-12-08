<template>
	<div id="component-list">
		<div
				class="list-item"
				:key="`${key}_container`"
				v-for="(item,key) in nasaResponseUpgrade"
			>
			<div class="row center-h">
				<template v-if="nasaResponseUpgrade.length > 0">
					<div class="cols s_24 m_4">
						<div class="block-preview">
							<div class="block-preview__image">
								<img :src="item.img" :alt="item.title">
							</div>
							<div class="block-preview__date">{{item.date_created}}</div>
						</div>
					</div>

					<div class="cols s_24 m_12">
						<div class="block-info">
							<div class="block-info__title">{{item.title}}</div>
							<div v-html="item.description" class="block-info__description">
							</div>
						</div>
					</div>
				</template>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

	name: 'List',

	computed: {
		...mapGetters([
			'nasaResponse',
			'sortType'
		])
	},

	data() {
		return {
			nasaResponseUpgrade: []
		}
	},

	watch: {
		nasaResponse() {
			this.reloadResponse();
		},
		sortType(){
			this.reloadResponse();
		}
	},
	methods: {
		reloadResponse() {

			console.log(this.sortType);
			console.log(this.nasaResponse);

			if(this.sortType !== '') {
				this.nataResponseUpgrade = this.nasaResponse.sort((a,b) =>{
					if (a[this.sortType] < b[this.sortType]) { return -1;}
					if (a[this.sortType] > b[this.sortType]) { return 1;}
					return 0;
				});
			} else {
				this.nasaResponseUpgrade = this.nasaResponse;
			}
		}
	}
}

</script>

<style lang="scss">
	@import "src/scss/wanted";

	.list-item {
		margin-bottom: 20px;

		.block-preview {
			display: flex;
			flex-direction: column;
			justify-content: center;
			&__image {
				img {
					border-radius: 5px;
					margin-bottom: 10px;
				}
			}
			&__date {
				margin-bottom: 20px;
			}
			@include m_up {
				&__date {
					margin-bottom: auto;
				}
				&__image{
					img {
						max-height: auto;
					}
				}
			}
		}
		.block-info {

		}
	}
</style>
