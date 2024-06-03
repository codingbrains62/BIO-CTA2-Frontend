<template>
	<div class="container-fluid" style="padding:0">
		<div class="header-wrapper">
			<div class="header-upper">
				<div class="heading">
					<h1>Beneficial Ownership Information Report</h1>
				</div>
				<div class="container">
					<div class="home-tab Navigation-tab">
						<ul class="nav nav-pills nav-fill">
							<li class="nav-item" :class="{ active: currentTab === 'home' }" @click="changeTab('home')">
								<a class="tab-link">Filling Information</a>
							</li>
							<li class="nav-item" :class="{ active: currentTab === 'reporting' }"
								@click="changeTab('reporting')">
								<a class="tab-link">Reporting Company</a>
							</li>
							<li class="nav-item" :class="{ active: currentTab === 'applicant' }"
								@click="changeTab('applicant')">
								<a class="tab-link">Company Applicant(s)</a>
							</li>
							<li class="nav-item" :class="{ active: currentTab === 'beneficial' }"
								@click="changeTab('beneficial')">
								<a class="tab-link">Beneficial Owner(s)</a>
							</li>
							<!-- <li class="nav-item" :class="{ active: $route.path === '/' }">
								<router-link to="/" class="tab-link">Home</router-link>
							</li>
							<li  class="nav-item" :class="{ active: $route.path === '/reporting' }">
							<router-link to="/reporting"  class="tab-link">Reporting Company</router-link>
							</li>
							<li class="nav-item" :class="{ active: $route.path === '/applicant' }">
								<router-link to="/applicant" class="tab-link">Company Applicant(s)</router-link>
							</li>
							<li class="nav-item" :class="{ active: $route.path === '/benificial' }">
								<router-link to="/benificial" class="tab-link">Beneficial Owner(s)</router-link>
							</li> -->
						</ul>
					</div>
				</div>
			</div>
			<div class="header-main">
				<div class="container">
					<div class="header-main-wrapper row">
						<div class="col-sm-3 logo">
							<img src="../assets/images/Financial-logo.png" alt="logo" />
						</div>
						<div class="col-sm-6 Header-txt">
							<h3>Beneficial Ownership Information Report</h3>
							<p>OMB No. 1506-0076</p>
						</div>
						<div class="col-sm-3 header-details">
							<p>Version Number:<span>1.0</span></p>
							<p>Release Date: <span>01-01-2024</span></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HeaderBoir',
	data() {
		return {
			currentTab: 'home',
		};
	},
	methods: {
		changeTab(tab) {
			this.currentTab = tab;
			this.scrollToSection(tab);
		},
		scrollToSection(sectionId) {
			const element = document.getElementById(sectionId);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		},
	}

}
</script>
