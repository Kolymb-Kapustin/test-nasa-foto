<template>
	<div id="app">
		<SearchField />
		<List />
	</div>
</template>

<script>
import List from './components/List.vue'
import SearchField from './components/SearchField.vue'

export default {
	name: 'App',

	components: {
		List,
		SearchField
	}
}
</script>
