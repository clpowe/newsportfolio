<template>
	<article class="space-y-4 border-b-4 border-gray-900 border-spacing-4 pb-4">
		<NuxtLink
			:to="{
				name: 'project',
				params: { project: 'gammunition' }
			}"
		>
			<img src="/placeholder.png" alt="" class="w-full" />
		</NuxtLink>
		<h3 class="title">Gammunition</h3>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac nisi sit
			amet tortor rhoncus cursus sed.
		</p>
		<div class="flex flex-row items-center gap-4">
			<a href="" class="flex flex-row items-center gap-1">
				<Icon name="ic:baseline-web" size="30" />
				Live</a
			>

			<a href="" class="flex flex-row items-center gap-1">
				<Icon name="carbon:logo-github" size="30" />
				Code</a
			>
		</div>
	</article>
</template>

<style scoped>
	.title {
		font-family: 'Oswald';
		text-transform: uppercase;
		font-weight: 700;
	}
</style>
