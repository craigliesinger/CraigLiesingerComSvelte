<script>
  let { image, name, link, location, dates, items = [], alt, mediaLinks } = $props();
</script>

<div class="card mb-6 overflow-hidden border border-outline-variant/60 shadow-sm">
  {#if image}
    <img
      src={image}
      alt={alt ?? name}
      class="w-full h-48 object-cover rounded-t-lg mb-6"
    />
  {/if}

  <div class="space-y-8">
    {#each items as item, index}
      <div class="flex flex-col relative">
        <!-- Top Row: Title & Date Badge -->
        <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-2">
          
          <h2 class="text-3xl font-bold text-on-surface">
            <!-- If item.name exists, use it as the main title (e.g. Role). Otherwise fallback to card name (e.g. Project Name) -->
            {#if item.name}
              {item.name}
            {:else}
              {#if link}
                <a href={link} target="_blank" class="hover:text-primary transition-colors">{name}</a>
              {:else}
                {name}
              {/if}
            {/if}
          </h2>
          
          <!-- Date Badge -->
          {#if item.dates || dates}
            <div class="shrink-0 bg-primary-fixed text-on-primary-fixed-variant font-label-sm px-4 py-1.5 rounded-full uppercase tracking-widest text-xs mt-1 sm:mt-0 font-bold whitespace-nowrap">
              {item.dates || dates}
            </div>
          {/if}
        </div>

        <!-- Subtitle: Company / Project Name -->
        <div class="mb-5 flex flex-wrap items-center text-lg">
          {#if item.name}
            <!-- If item.name was used as Big Title, use Card name as subtitle -->
            {#if link}
              <a href={link} target="_blank" class="text-secondary font-semibold hover:underline transition-all">
                {name}
              </a>
            {:else}
              <span class="text-secondary font-semibold">{name}</span>
            {/if}
          {/if}
          
          {#if location}
            <span class="text-on-surface-variant text-base {item.name ? 'ml-3 border-l border-outline-variant/50 pl-3' : 'text-secondary font-semibold text-lg'}">
               {location}
            </span>
          {/if}
        </div>

        <!-- Description -->
        {#if item.description}
          <p class="text-on-surface-variant body-lg leading-relaxed mb-6">
            {item.description}
          </p>
        {/if}

        <!-- Media Links (Chips or Images) -->
        {#if item.mediaLinks}
          <div class="flex flex-wrap gap-3 mt-auto">
            {#each item.mediaLinks as mediaLink}
              {#if mediaLink.url.includes(".jpg") || mediaLink.url.includes(".jpeg") || mediaLink.url.includes(".png") || mediaLink.url.includes(".gif") || mediaLink.url.includes(".webp")}
                <img
                  src={mediaLink.url}
                  alt={mediaLink.name}
                  class="w-full h-auto max-h-96 object-cover rounded-lg mb-2"
                />
              {:else}
                <a
                  href={mediaLink.url}
                  target="_blank"
                  class="bg-surface-container-high text-primary font-label-sm px-4 py-2 rounded-full hover:bg-primary-fixed transition-colors inline-block font-semibold"
                >
                  {mediaLink.name}
                </a>
              {/if}
            {/each}
          </div>
        {/if}
      </div>
      
      <!-- Divider for multiple roles at the same company -->
      {#if index < items.length - 1}
        <hr class="border-t border-outline-variant/50 my-8" />
      {/if}
    {/each}
  </div>
</div>
