<script>
    import Nav from './components/Nav.svelte'
    import Footer from './components/Footer.svelte'
    
</script>

<Nav/>
<div class="p-8 max-w-6xl mx-auto min-h-screen">
    <slot>
    </slot>
</div>
<Footer/>
<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>