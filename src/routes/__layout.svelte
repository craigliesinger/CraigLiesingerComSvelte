<script>
    import Nav from '../components/Nav.svelte'
    import Footer from '../components/Footer.svelte'
    import "../app.css";
</script>

<Nav/>
<div class="p-8 max-w-6xl mx-auto min-h-screen">
    <slot>
    </slot>
</div>
<Footer/>
