<script>
  let { image, name, link, location, items, alt, mediaLinks } = $props();
</script>

<div class="card mb-6">
  {#if image}
    <img
      src={image}
      alt={alt ?? name}
      class="w-full h-48 object-cover rounded-t-lg mb-4"
    />
  {/if}

  <div class="mb-2">
    <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
      {#if link}
        <a
          href={link}
          target="_blank"
          class="hover:text-secondary transition-colors"
        >
          <h2 class="headline-md text-primary mb-1">{name}</h2>
        </a>
      {:else}
        <h2 class="headline-md text-primary mb-1">{name}</h2>
      {/if}
      {#if location}
        <span class="text-on-surface-variant body-md">{location}</span>
      {/if}
    </div>
  </div>

  <div class="space-y-6 mt-4 relative">
    {#each items as item, index}
      <div class="relative pl-4 border-l-2 border-surface-subtle">
        <div
          class="absolute w-2 h-2 bg-secondary rounded-full -left-[5px] top-2"
        ></div>

        <div
          class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2"
        >
          {#if item.link}
            <a
              href={item.link}
              target="_blank"
              class="hover:text-secondary transition-colors"
            >
              <h4 class="font-semibold text-on-surface body-lg">{item.name}</h4>
            </a>
          {:else}
            <h4 class="font-semibold text-on-surface body-lg">{item.name}</h4>
          {/if}

          {#if item.dates}
            <span class="chip mt-1 sm:mt-0">{item.dates}</span>
          {/if}
        </div>

        {#if item.description}
          <p class="text-on-surface-variant body-md">{item.description}</p>
        {/if}
        {#if item.mediaLinks}
          <div class="mt-2">
            {#each item.mediaLinks as mediaLink}
              <!-- If media link is of type image show the image, otherwise show a link -->
              {#if mediaLink.url.includes(".jpg") || mediaLink.url.includes(".jpeg") || mediaLink.url.includes(".png") || mediaLink.url.includes(".gif") || mediaLink.url.includes(".webp")}
                <img
                  src={mediaLink.url}
                  alt={mediaLink.name}
                  class="w-full h-48 object-cover rounded-t-lg mb-4"
                />
              {:else}
                <a
                  href={mediaLink.url}
                  target="_blank"
                  class="hover:text-secondary transition-colors small italic"
                >
                  <span class="text-on-surface-variant body-md"
                    >{mediaLink.name}</span
                  >
                </a>
              {/if}
              <br />
            {/each}
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>
