<template>
	<main class="container relative">
		<div class="mainSection lg:col-span-3">
			<Menu class="absolute h-full" />
			<div class="col-span-1 sm:col-span-3 lg:col-span-2">
				<div>
					<ProjectCard />
				</div>
				<div class="grid grid-cols-2 sm:col-span-2">
					<div>
						<h3>Tools</h3>
						<ul>
							<li>Figma</li>
							<li>Figma</li>
							<li>Figma</li>
							<li>Figma</li>
						</ul>
					</div>
					<div>
						<h3>Skills</h3>
						<ul>
							<li>UX/UI</li>
							<li>Design</li>
							<li>Development</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1">
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
		<div
			class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:col-span-4"
		>
			<div v-for="n in 5">
				<img src="/placeholder2.png" alt="" />
			</div>
		</div>
	</main>
</template>

<style scoped>
	main {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto;
	}

	.mainSection {
		display: grid;
	}

	@media (min-width: 640px) {
		.mainSection {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}
	}

	@media (min-width: 64rem) {
		main {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr;
			grid-template-rows: 1fr 1fr;
		}

		.mainSection {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}
</style>
