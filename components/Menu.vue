<template>
	<Transition name="slide-fade">
		<div
			v-if="menuOpen"
			class="menu h-full bg-white row-start-1 row-end-3 sm:border-r-2 sm:border-black p-4 flex items-start flex-col"
		>
			<nav class="flex flex-col h-full">
				<img src="/Portrait.svg" alt="" class="mx-auto" />
				<div class="flex flex-col">
					<NuxtLink to="/">Home</NuxtLink>
					<NuxtLink>Contact</NuxtLink>
					<p>Sometime i design.</p>
					<p>Sometimes i develop</p>
				</div>
				<div class="flex flex-col mt-auto">
					<a href="">github</a>
					<a href="">LinkedIn</a>
				</div>
			</nav>
		</div>
	</Transition>
</template>

<script setup lang="ts">
	const menuOpen = useMenu()
</script>

<style scoped>
	.slide-fade-enter-active {
		transition: all 0.3s ease-out;
	}

	.slide-fade-leave-active {
		transition: all 0.8s ease-out;
	}

	.slide-fade-enter-from,
	.slide-fade-leave-to {
		transform: translateX(-100%);
	}
</style>
