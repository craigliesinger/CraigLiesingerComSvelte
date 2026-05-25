<script>
  import Card from "../../components/Card.svelte";

  const projects = [
    {
      name: "Synergy",
      location: "Co-Creator & Developer",
      link: "https://synergy-mu-six.vercel.app/",
      items: [
        {
          name: "Co-Creator & Developer",
          dates: "Jan 2026 – Present",
          description:
            "An AI powered group workout planner that generates group fitness plans and provides floorplan layouts for those workouts.",
        },
      ],
    },
    {
      name: "Mio Canvas",
      location: "Personal Startup – Mio Canvas LLC",
      link: "https://miocanvas.com",
      items: [
        {
          name: "Founder & Developer",
          dates: "Sep 2025 – Present",
          description:
            "An online app for custom wall art that uses augmented reality (AR) to visualise art on walls and AI for upscaling and enhancing photos. Built with SvelteKit, Three.js, and custom AR tooling.",
        },
      ],
    },
    {
      name: "ifcXR",
      location: "Open Source",
      link: "https://ifcXR.com",
      items: [
        {
          name: "Creator",
          dates: "2023",
          mediaLinks: [
            {
              name: "BIMvoice podcast",
              url: "https://youtu.be/RgKr7HvKh00?si=wDsljOO0HUCZLNRE",
            },
          ],
          description:
            "An open-source WebXR viewer for IFC (Industry Foundation Classes) building information models. Lets users explore BIM models in augmented reality directly in the browser using WebXR and IFC.js.",
        },
      ],
    },
    {
      name: "IFC Diffusion (discontinued)",
      location: "Open Source",
      link: "https://github.com/craigliesinger/ifc-diffusion",
      items: [
        {
          name: "Creator",
          dates: "2024",
          mediaLinks: [
            {
              name: "Snapshot 1",
              url: "https://firebasestorage.googleapis.com/v0/b/canvas-ar.firebasestorage.app/o/website%2FifcDiffusion1.webp?alt=media&token=3bb353a2-a093-412d-9d9d-2fa4dab1bd73",
            },
            {
              name: "Snapshot 2",
              url: "https://firebasestorage.googleapis.com/v0/b/canvas-ar.firebasestorage.app/o/website%2FifcDiffusion2.webp?alt=media&token=24968866-856d-4131-8209-fd0505b64dd9",
            },
          ],
          description:
            "Research project exploring the application of diffusion models to architectural and building data encoded in IFC format. Combines generative AI with BIM workflows.",
        },
      ],
    },
    {
      name: "UserSaysWhat (discontinued)",
      location: "Personal Project",
      items: [
        {
          name: "Creator",
          dates: "",
          description:
            "An AI powered web application for collecting and analysing user feedback. Built to help product teams quickly gather qualitative insights and structure user research.",
        },
      ],
    },
    {
      name: "CraigLiesinger.com",
      location: "Personal Site",
      link: "https://craigliesinger.com",
      items: [
        {
          name: "Developer",
          dates: "",
          description:
            "Personal portfolio and resume website built with SvelteKit and TailwindCSS.",
        },
      ],
    },
    {
      name: "Baby Badge",
      location: "Personal iOS project",
      dates: "2016",
      items: [
        {
          description:
            "Inspired by my first daughter's approaching 1st birthday and all the monthly photo's we took to share her growth with family far away, I built this photo 'marking' app. The application let users chose (or take) a photo and then append an age sticker and save as a new image with the sticker. The stickers were customizable on dozens of different variables such as background style, color, text color, age, border, etc. The app was free to download with a 1-time in app purchase possible to remove 'Baby Badge' watermark. Lifetime download's was just over 8,000. Language used was Swift.",
        },
      ],
    },
    {
      name: "Math Espresso",
      location: "Personal iOS (Swift) project",
      dates: "2015",
      items: [
        {
          description:
            "A game to awaken your brain by solving basic math problems as quickly as possible. This was my first usage of Swift language. This simple game utilized Apple's game center to enable P v P match making and creative generative functions for randomly creating math problems of increasing diffilculty by round.",
        },
      ],
    },
    {
      name: "German Strong Verbs",
      location: "Personal iOS project",
      dates: "2012",
      items: [
        {
          description:
            "This was first experiment in the world of iOS application creation. I started as a total novice, but came to learn XCode, Objective-C, interface builder / story board, Gimp, and all the various tasks of actually releasing an app to the Apple App Store.",
        },
      ],
    },
    {
      name: "BLE controlled LED Mixing Lamp",
      location: "Personal Arduino project",
      dates: "2014",
      items: [
        {
          description: "Arduino + Red Bear BLE 2.1 + Swift = Cool",
          mediaLinks: [
            {
              name: "YouTube Video",
              url: "https://www.youtube.com/shorts/P3PNRWPDajM",
            },
            {
              name: "Medium Article",
              url: "https://medium.com/@craigliesinger/color-mixing-lamp-controlled-by-iphone-39769eb35ca4",
            },
          ],
        },
      ],
    },
    {
      name: "Remote Thermo Couple Sending Temp to iPhone",
      location: "Personal Arduino project",
      dates: "2014",
      items: [
        {
          description: "Time to receive the data",
          mediaLinks: [
            {
              name: "Medium Article",
              url: "https://medium.com/@craigliesinger/remote-thermo-couple-sending-temp-to-iphone-a5280bcd5895",
            },
          ],
        },
      ],
    },
  ];
</script>

<svelte:head>
  <title>Projects – Craig Liesinger</title>
  <meta
    name="description"
    content="Personal software projects by Craig Liesinger – AR, AI, BIM, SvelteKit and more."
  />
</svelte:head>

<div class="max-w-[1200px] mx-auto px-4 sm:px-8 pt-32 pb-16">
  <h1
    class="display-lg text-primary mb-12 border-b border-outline-variant pb-6"
  >
    Projects
  </h1>
  <div class="max-w-4xl">
    {#each projects as proj}
      <Card
        name={proj.name}
        link={proj.link}
        location={proj.location}
        items={proj.items}
        mediaLinks={proj.mediaLinks}
      />
    {/each}
  </div>
</div>
