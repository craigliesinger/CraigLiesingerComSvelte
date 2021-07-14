<script>
    export let image
    export let name
    export let link
    export let location
    export let items
</script>

<div class="p-10 pb-2">
    <div class="min-w-full lg:flex">
      <!-- <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url({image})" title="{name}}">
      </div> -->
      <div class="min-w-full border border-gray-200 bg-gray-50 rounded shadow-xl p-4 flex flex-col justify-between leading-normal">
        <div class="mb-4">
          <div class="flex items-baseline flex-col sm:flex-row">
            {#if link}
            <a href={link}><h2  class="text-blue-600 font-bold text-2xl mb-2 mr-4 hover:underline hover:text-blue-500">{name}</h2></a>
            {:else}
            <h2  class="text-blue-600 font-bold text-2xl mb-2 mr-4">{name}</h2>
            {/if}
            <h4 class="mb-4 sm:mb-0">{location}</h4>
          </div>
          
          {#each items as item, index}
          <div class="flex items-baseline flex-col sm:flex-row">
              {#if item.link}
                <a href={item.link} target="_blank"><h4 class="text-xl mr-4 hover:underline hover:text-blue-500">{item.name}</h4></a>
              {:else}
                <h4 class="text-xl mr-4">{item.name}</h4>
              {/if}
            <h5 class="text-blue-400">{item.dates}</h5>
          </div>
            
            <p class="mt-2 font-thin">{item.description}</p><br/>
            {#if (index < (items.length - 1))}
            <hr class="solid border-blue-800 border-1 w-11/12 m-auto"/><br/>
            {/if}
          {/each}
          </div>
      </div>
    </div>
  </div>

