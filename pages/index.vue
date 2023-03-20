<template>
	<main class="container items-stretch">
		<Menu />
		<div
			class="sm:col-span-3 border-b-2 border-black flex justify-end gap-4 items-center"
		>
			<button
				:class="{ active: design }"
				class="majortext font-bold uppercase"
				@click="
					() => {
						design = true
					}
				"
			>
				Design
			</button>
			<button
				:class="{ active: !design }"
				class="majortext font-bold uppercase"
				@click="
					() => {
						design = false
					}
				"
			>
				Develop
			</button>
		</div>
		<div
			class="row-start-1 justify-between flex-row sm:justify-end flex sm:row-start-2 sm:flex-col lg:row-start-2"
		>
			<div
				class="flex flex-row border-b-0 sm:flex-col sm:border-b-2 border-black"
			>
				<p class="font-bold uppercase sm:text-3xl text-gray-900">Volume</p>
				<p class="font-light sm:text-5xl text-gray-900">NO.01</p>
			</div>
			<div class="flex flex-row sm:flex-col gap-2">
				<p>Resume</p>
				<p>Download</p>
			</div>
		</div>
		<article
			@mousedown="mouseDownHandler"
			ref="projectsRef"
			class="projects overflow-scroll border-b-2 border-black pb-4 sm:border-l-2 sm:border-b-0 sm:pl-4 sm:col-span-2"
		>
			<TransitionGroup name="list">
				<ul key="1" class="list space-y-[var(--s1)]" v-if="design">
					<li v-for="n in 2">
						<ProjectCard />
					</li>
				</ul>

				<ul key="2" class="list space-y-[var(--s1)]" v-if="!design">
					<li v-for="n in 3">
						<ProjectCard />
					</li>
				</ul>
			</TransitionGroup>
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

	const design = ref()

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
		container-type: inline-size;
	}

	.list {
		max-height: calc(90cqh - 8rem);
	}

	.list > li:last-child > article {
		border-width: 0px;
	}

	main {
		display: grid;
		grid-template-rows: auto;
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
			grid-template-columns: 1fr 1fr 1fr 1fr 15rem;
			grid-template-rows: 4rem 1fr;
		}
	}

	.active {
		color: rgb(110, 110, 110);
	}

	.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
		transition: all 0.5s cubic-bezier(0.55, 0, 1, 0.45);
	}

	.list-enter-from,
	.list-leave-to {
		opacity: 0;
		transform: translateX(100%);
	}

	/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
	.list-leave-active {
		position: absolute;
	}
</style>
