<script>
	import Footer from '../components/Footer.svelte';
import Nav from '../components/Nav.svelte';

</script>


<div class="page">

<Nav/>

<main class="main">
	<slot></slot>
</main>

<Footer/>


</div>