<script setup lang="ts">
	const menuOpen = useMenu()

	const toogleMenu = () => {
		menuOpen.value = !menuOpen.value
	}

	const parent = ref()

	useResizeObserver(parent, (entries: any) => {
		const entry = entries[0]
		const { width } = entry.contentRect
		if (width < 640) menuOpen.value = false
		if (width >= 640) {
			menuOpen.value = true
		}
	})
</script>

<template>
	<div class="parent" ref="parent">
		<header>
			<div
				class="flex justify-between container border-b-2 border-gray-900 mt-4"
			>
				<div class="name uppercase font-bold">Christopher Powe</div>
				<div class="fill-red-100 sm:hidden">
					<Icon name="ic:baseline-menu" @click="toogleMenu" size="30" />
				</div>
			</div>
		</header>
		<NuxtPage />
		<StickyMenu />
		<footer
			class="text-center w-full h-12 grid place-content-center uppercase container border-t-2 border-gray-900"
		>
			<p class="mx-auto">christopher powe 2023</p>
		</footer>
	</div>
</template>

<style>
	:root {
		--ratio: 1.25;
		--s-6: calc(var(--s-5) / var(--ratio));
		--s-5: calc(var(--s-4) / var(--ratio));
		--s-4: calc(var(--s-3) / var(--ratio));
		--s-3: calc(var(--s-2) / var(--ratio));
		--s-2: calc(var(--s-1) / var(--ratio));
		--s-1: calc(var(--s0) / var(--ratio));
		--s0: 1rem;
		--s1: calc(var(--s0) * var(--ratio));
		--s2: calc(var(--s1) * var(--ratio));
		--s3: calc(var(--s2) * var(--ratio));
		--s4: calc(var(--s3) * var(--ratio));
		--s5: calc(var(--s4) * var(--ratio));
		--s6: calc(var(--s5) * var(--ratio));
		--s7: calc(var(--s6) * var(--ratio));
		--s8: calc(var(--s7) * var(--ratio));
		--s9: calc(var(--s8) * var(--ratio));
	}

	html {
		font-size: var(--s0);
		font-size: clamp(var(--s0), 0.95rem + 0.25vw, var(--s4));
		font-family: 'Oswald', sans-serif;
		height: 100%;
		scroll-behavior: smooth;
	}

	#__nuxt {
		height: 100%;
	}

	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	@media (prefers-reduced-motion: reduce) {
		* {
			animation-duration: 0.01ms !important;
			animation-iteration-count: 1 !important;
			transition-duration: 0.01ms !important;
			scroll-behavior: auto !important;
		}
	}

	.container {
		inline-size: min(100% - 2rem, 80rem);
		margin-inline: auto;
	}

	.parent {
		display: grid;
		grid-template-rows: auto 1fr auto;
		height: 100%;
	}

	html {
	}

	body {
		line-height: 1.5;

		background-color: #fff;
		height: 100%;
	}

	h1,
	h2,
	h3 {
		line-height: 1;
	}

	h1 {
		font-size: var(--s5);
	}

	h2 {
		font-size: var(--s4);
	}
	h3 {
		font-size: var(--s3);
	}
	h3 {
		font-size: var(--s2);
	}

	p {
		font-family: 'Inter';
		font-size: min(var(--s-1), 16px);
		color: rgb(77, 77, 77);
	}

	a {
		color: currentColor;
	}

	.container {
		max-width: 1440px;
		box-sizing: content-box;
		margin-inline: auto;
		padding-inline-start: 1rem;
		padding-inline-end: 1rem;
	}

	.visually-hidden {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
		width: 1px;
	}

	.name {
		font-family: 'Oswald';
		font-size: var(--s2);
	}

	.bigtext {
		font-family: 'Oswald';
		font-size: var(--s3);
		font-weight: bold;
		text-transform: uppercase;
	}
	.majortext {
		font-family: 'Oswald';
		font-size: var(--s4);
		font-weight: bold;
		text-transform: uppercase;
	}

	.menu {
		position: absolute;
	}

	@media (min-width: 640px) {
		.menu {
			position: static;
		}
	}
</style>
