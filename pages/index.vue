<template>
	<main class="container">
		<Menu />
		<div
			class="sm:col-span-3 border-b-2 border-black flex justify-end gap-4 items-center"
		>
			<button class="bigtext font-bold uppercase">Design</button>
			<button class="bigtext font-bold uppercase">Develop</button>
		</div>
		<div class="justify-end sm:flex flex-col lg:row-start-2">
			<div class="flex flex-col border-b-2 border-black">
				<p class="font-bold uppercase text-3xl text-gray-900">Volume</p>
				<p class="font-light text-5xl text-gray-900">NO.01</p>
			</div>
			<div>
				<p>Resume</p>
				<p>Download</p>
			</div>
		</div>
		<article
			@mousedown="mouseDownHandler"
			ref="projectsRef"
			class="projects overflow-y-scroll border-b-2 border-black pb-4 max-h-[70vh] sm:border-l-2 sm:border-b-0 sm:pl-4 sm:col-span-2 lg:max-h-[90vh]"
		>
			<ul class="space-y-[var(--s1)]">
				<li v-for="n in 5">
					<ProjectCard />
				</li>
			</ul>
		</article>
		<section
			class="flex gap-4 flex-col sm:flex-row sm:col-span-full sm:border-t-2 sm:border-black sm:pt-4 lg:flex-col lg:col-start-5 lg:row-start-1 lg:row-span-full lg:border-t-0 lg:border-l-2 lg:pl-4"
		>
			<article class="border-b-2 border-black pb-4 sm:border-none">
				<div>
					<h2 class="bigtext">About me</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac
						nisi sit amet tortor rhoncus cursus sed sit amet orci. Duis
						convallis ex at neque blandit, id gravida nulla pretium. Aenean
						ullamcorper ex quis justo dignissim, non lacinia arcu sodales.
						Vivamus mattis vehicula tortor, a fermentum orci vehicula in. Proin
						facilisis eget diam ac finibus. Vestibulum commodo euismod aliquam.
						Duis scelerisque lorem nec risus pulvinar malesuada.
					</p>
				</div>
				<div>
					<h2 class="bigtext">Experience</h2>
					<div>
						<ul>
							<li>Ashley</li>
							<li>Revealing Truth</li>
						</ul>
					</div>
				</div>
			</article>
			<article>
				<h2 class="bigtext">Testamonials</h2>
				<ul>
					<li>
						<figure>
							<blockquote cite="https://www.huxley.net/bnw/four.html">
								<p>
									Words can be like X-rays, if you use them properly—they’ll go
									through anything. You read and you’re pierced.
								</p>
							</blockquote>
							<figcaption>
								—Aldous Huxley, <cite>Brave New World</cite>
							</figcaption>
						</figure>
					</li>
					<li>
						<figure>
							<blockquote cite="https://www.huxley.net/bnw/four.html">
								<p>
									Words can be like X-rays, if you use them properly—they’ll go
									through anything. You read and you’re pierced.
								</p>
							</blockquote>
							<figcaption>
								—Aldous Huxley, <cite>Brave New World</cite>
							</figcaption>
						</figure>
					</li>
				</ul>
			</article>
		</section>
	</main>
</template>

<script setup lang="ts">
	const showMenu = useState('showMenu')

	const projectsRef = ref()
	let pos = { top: 0, left: 0, x: 0, y: 0 }

	onMounted(() => {})

	const mouseDownHandler = function (e: any) {
		pos = {
			// The current scroll
			left: projectsRef.value.scrollLeft,
			top: projectsRef.value.scrollTop,
			// Get the current mouse position
			x: e.clientX,
			y: e.clientY
		}

		document.addEventListener('mousemove', mouseMoveHandler)
		document.addEventListener('mouseup', mouseUpHandler)
	}

	function mouseMoveHandler(e: any) {
		// How far the mouse has been moved
		const dx = e.clientX - pos.x
		const dy = e.clientY - pos.y

		// Scroll the element
		projectsRef.value.scrollTop = pos.top - dy
		projectsRef.value.scrollLeft = pos.left - dx
	}

	// function mouseDownHandler(e) {
	// 	// How far the mouse has been moved
	// 	const dx = e.clientX - pos.x
	// 	const dy = e.clientY - pos.y

	// 	// Scroll the element
	// 	projectsRef.value.style.cursor = 'grabbing'
	// 	projectsRef.value.style.userSelect = 'none'
	// }

	function mouseUpHandler() {
		document.removeEventListener('mousemove', mouseMoveHandler)
		document.removeEventListener('mouseup', mouseUpHandler)

		projectsRef.value.style.cursor = 'grab'
		projectsRef.value.style.removeProperty('user-select')
	}
</script>

<style scoped>
	.projects::-webkit-scrollbar {
		display: none;
	}
	.projects {
		-ms-overflow-style: none;
		scrollbar-width: none;
		cursor: grab;
	}
	main {
		display: grid;
		grid-template-rows: 5rem 60vh 1fr;
		gap: 1rem;
		transition: 300ms;
	}

	.menu {
		position: absolute;
	}

	@media (min-width: 40rem) {
		main {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr;
			grid-template-rows: auto;
		}
		.menu {
			position: static;
		}
	}
	@media (min-width: 64rem) {
		main {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
			grid-template-rows: 4rem 1fr;
		}
	}
</style>
