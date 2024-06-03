<template>
	
	<button @click="scrollToElement" class="return-top">Go</button>
    <footer>
		<div class="footer-inner">
			
			<div class="f-logo">
				<img src="../assets/images/Financial-logo.png" alt="logo"/>
			</div>			
			<p>Beneficial Ownership Information Report</p>
		</div>
	</footer>
</template>
<script>
export default{
    
    name:'FooterBoir',
	methods:{
		scrollToElement(){
			window.scrollTo({
        top: 0,
        behavior: 'smooth',

      });
          }
        }
}
</script>