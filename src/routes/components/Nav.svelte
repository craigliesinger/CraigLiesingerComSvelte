<script>
    import { page } from '$app/stores';
    let showMenu = false

    let toggleMenu = () => {
        showMenu = !showMenu
    }
</script>

<nav class="bg-gradient-to-r from-blue-800 to-blue-500">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button type="button" on:click={toggleMenu} class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            {#if !showMenu}
            <!--
              Icon when menu is closed.
  
              Heroicon name: outline/menu
  
              Menu open: "hidden", Menu closed: "block"
            -->
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            {:else}
            <!--
              Icon when menu is open.
  
              Heroicon name: outline/x
  
              Menu open: "block", Menu closed: "hidden"
            -->
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            {/if}
          </button>
        </div>

        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <a href="/" class="block h-8 w-auto text-white text-2xl uppercase font-light"><h1>Craig Liesinger</h1></a>
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <!-- Current: "border-l border-4 border-white text-white", Default: "text-gray-100 hover:bg-blue-400 hover:text-white" -->
              <a href="/work" class="border-b-4 border-transparent text-gray-100 hover:bg-blue-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium" class:selected="{$page.path === '/work'}">Work</a>
  
              <a href="/education" class="border-b-4 border-transparent text-gray-100 hover:bg-blue-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium" class:selected="{$page.path === '/education'}">Education</a>
  
              <a href="/projects" class="border-b-4 border-transparent text-gray-100 hover:bg-blue-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium" class:selected="{$page.path === '/projects'}">Projects</a>

            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <a href="mailto:craig.liesinger@gmail.com" target="_blank" class="ml-4 relative text-xl text-gray-300 hover:text-white">
                <i class="fa fa-envelope"></i>
            </a>
            <a href="https://www.linkedin.com/in/craigliesinger/" target="_blank" class="ml-4 relative text-xl text-gray-300 hover:text-white">
                <i class="fa fa-linkedin"></i>
            </a>
            <a href="https://craigliesinger.medium.com/" target="_blank" class="ml-4 relative text-xl text-gray-300 hover:text-white">
                <i class="fa fa-medium"></i>
            </a>
        </div>
      </div>
    </div>
  
    
    {#if showMenu}
    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-100 hover:bg-blue-400 hover:text-white" -->
          <a href="/work" class="text-gray-100 hover:bg-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium" class:selected-mobile="{$page.path === '/work'}">Work History</a>
    
          <a href="/education" class="text-gray-100 hover:bg-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium" class:selected-mobile="{$page.path === '/education'}">Education</a>
    
          <a href="/projects" class="text-gray-100 hover:bg-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium" class:selected-mobile="{$page.path === '/projects'}">Projects</a>
    
        </div>
    </div> 
    {/if}
    
  </nav>

  <style>
      .selected {
          @apply border-white;
          @apply text-white;
          @apply rounded-none;
      }
      .selected:hover {
          @apply bg-transparent;
      }
      .selected-mobile {
          @apply border-l-4; 
          @apply border-white;
          @apply text-white;
          @apply rounded-none;
      }
      .selected-mobile:hover {
          @apply bg-transparent;
      }
  </style>