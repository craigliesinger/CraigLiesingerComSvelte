<script>
    import Card from '../components/Card.svelte';
    import { fade } from 'svelte/transition';

    let indexItems = [
        {
            name: 'Craig Liesinger',
            image: '/jcl.png',
            link: '',
            location: '',
            items: []
        }
    ];
</script>

<div class="p-10 pb-2">
    {#each indexItems as item, index}
        <div in:fade="{{ delay: index*100 }}">
            <Card {...item} />
        </div>
    {/each}
</div>
