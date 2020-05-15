<template>
	<b-navbar class="is-fixed-top">
		<template slot="brand">
			<b-navbar-item tag="router-link" :to="{ path: '/' }">
				<img src="../assets/potato.svg" alt="Batata" />
				<h1 class="title is-4">Batatarcado</h1>
			</b-navbar-item>
		</template>
		<template slot="start">
			<b-navbar-item tag="router-link" :to="{ path: '/' }">
				Início
			</b-navbar-item>
			<b-navbar-item tag="router-link" :to="{ path: '/sobre' }">
				Sobre
			</b-navbar-item>
			<b-navbar-item tag="router-link" :to="{ path: '/contato' }">
				Contate-nos
			</b-navbar-item>
			<b-navbar-dropdown label="Produtos" :hoverable="true" :collapsible="true">
				<b-navbar-item tag="router-link" :to="{ path: '/produto/yukon' }">
					Yukon Gold
				</b-navbar-item>
				<b-navbar-item tag="router-link" :to="{ path: '/produto/kennebec' }">
					Kennebec Potato
				</b-navbar-item>
				<b-navbar-item tag="router-link" :to="{ path: '/produto/bintje' }">
					Bintje Potato
				</b-navbar-item>
				<b-navbar-item tag="router-link" :to="{ path: '/produto/ratte' }">
					Ratte Potato
				</b-navbar-item>
				<b-navbar-item tag="router-link" :to="{ path: '/produto/vitelotte' }">
					Vitelotte Potato
				</b-navbar-item>
			</b-navbar-dropdown>
		</template>
	</b-navbar>
</template>

<style scoped lang="scss"></style>

<script>
export default {
	name: 'Navbar',
};
</script>
