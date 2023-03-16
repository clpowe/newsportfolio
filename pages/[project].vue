<template>
	<main class="container">
		<Menu />
		<div>
			<ProjectCard />
		</div>
		<div class="">
			<ul>
				<h3>Tools</h3>
				<li>Figma</li>
				<li>Figma</li>
				<li>Figma</li>
				<li>Figma</li>
			</ul>
			<ul>
				<h3>Skills</h3>
				<li>UX/UI</li>
				<li>Design</li>
				<li>Development</li>
			</ul>
		</div>
		<div>
			<div>
				<h2>Problem</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac nisi
					sit amet tortor rhoncus cursus sed sit amet orci. Duis convallis ex at
					neque blandit, id gravida nulla pzretium. Aenean ullamcorper ex quis
					justo dignissim, non lacinia arcu sodales.
				</p>
			</div>
			<div>
				<h2>Solution</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac nisi
					sit amet tortor rhoncus cursus sed sit amet orci. Duis convallis ex at
					neque blandit, id gravida nulla pzretium. Aenean ullamcorper ex quis
					justo dignissim, non lacinia arcu sodales.
				</p>
			</div>
		</div>
		<div class="space-y-4">
			<div v-for="n in 5">
				<img src="/placeholder2.png" alt="" />
			</div>
		</div>
	</main>
</template>

<style scoped>
	/* main {
		display: grid;
		grid-template-rows: 5rem 60vh 1fr;
		gap: 1rem;
	} */

	@media (min-width: 40rem) {
		main {
			/* display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr;
			grid-template-rows: auto; */
		}
		.menu {
			position: static;
		}
	}
	@media (min-width: 64rem) {
		main {
			/* display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
			grid-template-rows: 4rem 1fr; */
		}
	}
</style>
