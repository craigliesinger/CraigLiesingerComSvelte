<script>
    import { page } from "$app/stores";
    let showMenu = $state(false);
    const toggleMenu = () => {
        showMenu = !showMenu;
    };
</script>

<nav
    class="fixed top-0 left-0 w-full bg-surface/90 backdrop-blur-md border-b border-outline-variant shadow-sm z-50 transition-colors duration-300 ease-in-out"
>
    <div class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-20">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button
                    type="button"
                    onclick={toggleMenu}
                    class="inline-flex items-center justify-center p-2 rounded-lg text-on-surface hover:text-primary hover:bg-surface-container focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors"
                    aria-controls="mobile-menu"
                    aria-expanded={showMenu}
                >
                    <span class="sr-only">Open main menu</span>
                    {#if !showMenu}
                        <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    {:else}
                        <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    {/if}
                </button>
            </div>
            <div
                class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
            >
                <div class="flex-shrink-0 flex items-center">
                    <a
                        href="/"
                        class="block h-auto w-auto text-on-surface font-headline-md text-2xl font-bold tracking-tight hover:text-primary transition-colors"
                        >Craig Liesinger</a
                    >
                </div>
                <div class="hidden sm:block sm:ml-10 self-center">
                    <div class="flex space-x-6">
                        <a
                            href="/work"
                            class="px-3 py-2 rounded-lg body-md font-medium transition-colors { $page.url.pathname === '/work' ? 'text-primary bg-primary/10' : 'text-on-surface-variant hover:text-primary hover:bg-surface-container' }"
                            >Work</a
                        >
                        <a
                            href="/education"
                            class="px-3 py-2 rounded-lg body-md font-medium transition-colors { $page.url.pathname === '/education' ? 'text-primary bg-primary/10' : 'text-on-surface-variant hover:text-primary hover:bg-surface-container' }"
                            >Education</a
                        >
                        <a
                            href="/projects"
                            class="px-3 py-2 rounded-lg body-md font-medium transition-colors { $page.url.pathname === '/projects' ? 'text-primary bg-primary/10' : 'text-on-surface-variant hover:text-primary hover:bg-surface-container' }"
                            >Projects</a
                        >
                    </div>
                </div>
            </div>
            <div
                class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
            >
                <a
                    href="mailto:craig.liesinger@gmail.com"
                    target="_blank"
                    class="ml-4 text-xl text-on-surface-variant hover:text-primary transition-colors"
                    ><i class="fa fa-envelope"></i></a
                >
                <a
                    href="https://www.linkedin.com/in/craigliesinger/"
                    target="_blank"
                    class="ml-4 text-xl text-on-surface-variant hover:text-primary transition-colors"
                    ><i class="fa fa-linkedin"></i></a
                >
                <a
                    href="https://craigliesinger.medium.com/"
                    target="_blank"
                    class="ml-4 text-xl text-on-surface-variant hover:text-primary transition-colors"
                    ><i class="fa fa-medium"></i></a
                >
            </div>
        </div>
    </div>
    {#if showMenu}
        <div class="sm:hidden bg-surface border-t border-outline-variant shadow-lg" id="mobile-menu">
            <div class="px-4 pt-4 pb-6 space-y-2">
                <a
                    href="/work"
                    onclick={toggleMenu}
                    class="block px-4 py-3 rounded-lg body-md font-medium transition-colors { $page.url.pathname === '/work' ? 'text-primary bg-primary/10' : 'text-on-surface hover:text-primary hover:bg-surface-container' }"
                    >Work History</a
                >
                <a
                    href="/education"
                    onclick={toggleMenu}
                    class="block px-4 py-3 rounded-lg body-md font-medium transition-colors { $page.url.pathname === '/education' ? 'text-primary bg-primary/10' : 'text-on-surface hover:text-primary hover:bg-surface-container' }"
                    >Education</a
                >
                <a
                    href="/projects"
                    onclick={toggleMenu}
                    class="block px-4 py-3 rounded-lg body-md font-medium transition-colors { $page.url.pathname === '/projects' ? 'text-primary bg-primary/10' : 'text-on-surface hover:text-primary hover:bg-surface-container' }"
                    >Projects</a
                >
            </div>
        </div>
    {/if}
</nav>
