<script>
  // Homepage – intro only. Full sections live on /work, /education, /projects
</script>

<svelte:head>
  <title>Craig Liesinger</title>
  <meta
    name="description"
    content="Craig Liesinger's personal website. Work experience, education, personal projects and contact information."
  />
</svelte:head>

<div class="max-w-[1200px] mx-auto px-4 sm:px-8 pt-32 pb-24">
  <div class="mb-20">
    <h1 class="h1 headline-lg text-on-surface-variant mb-8 max-w-3xl">
      Father, Husband, Tinkerer, Moonlight Developer, Perpetual Learner
    </h1>
    <p class="body-lg text-on-surface leading-relaxed mb-10 max-w-4xl">
      Experienced project and product manager based in Austria. I have a diverse
      background spanning digital customer experience, software development, and
      innovation. I love building things – from large-scale enterprise IT
      programmes to personal AR/AI web apps.
    </p>
    <div class="flex flex-wrap gap-4">
      <a href="/work" class="btn-primary"> View Work Experience </a>
      <a href="/projects" class="btn-secondary"> See Projects </a>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <a href="/work" class="card group flex flex-col justify-between">
      <div>
        <div class="text-4xl mb-6">💼</div>
        <h3
          class="headline-md text-primary group-hover:text-secondary transition-colors mb-2"
        >
          Work
        </h3>
        <p class="body-md text-on-surface-variant">
          Ecolab, Shuffle Dating, Cummins &amp; more
        </p>
      </div>
    </a>
    <a href="/education" class="card group flex flex-col justify-between">
      <div>
        <div class="text-4xl mb-6">🎓</div>
        <h3
          class="headline-md text-primary group-hover:text-secondary transition-colors mb-2"
        >
          Education
        </h3>
        <p class="body-md text-on-surface-variant">
          MBA &amp; B.S. Mechanical Engineering
        </p>
      </div>
    </a>
    <a href="/projects" class="card group flex flex-col justify-between">
      <div>
        <div class="text-4xl mb-6">🚀</div>
        <h3
          class="headline-md text-primary group-hover:text-secondary transition-colors mb-2"
        >
          Projects
        </h3>
        <p class="body-md text-on-surface-variant">
          Mio Canvas, ifcXR, IFC Diffusion &amp; more
        </p>
      </div>
    </a>
  </div>
</div>
