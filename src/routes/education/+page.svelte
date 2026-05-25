<script>
  import Card from "../../components/Card.svelte";

  const education = [
    {
      name: "University of Kentucky",
      location: "Lexington, KY, USA",
      link: "https://gatton.uky.edu/prc/full-time-mba",
      items: [
        {
          name: "MBA – Gatton College of Business & Economics",
          dates: "2007 – 2008",
          description:
            "Master of Business Administration. Focused on strategy, finance, and operations management at the Gatton College of Business & Economics.",
        },
      ],
    },
    {
      name: "University of Kentucky",
      location: "Lexington, KY, USA",
      link: "https://www.uky.edu",
      items: [
        {
          name: "B.S. in Mechanical Engineering – College of Engineering",
          dates: "2002 – 2007",
          description:
            "Bachelor of Science in Mechanical Engineering. Studied thermodynamics, fluid mechanics, materials science, and engineering design at the College of Engineering.",
        },
      ],
    },
  ];
</script>

<svelte:head>
  <title>Education – Craig Liesinger</title>
  <meta
    name="description"
    content="Education background of Craig Liesinger – MBA and B.S. Mechanical Engineering, University of Kentucky."
  />
</svelte:head>

<div class="max-w-[1200px] mx-auto px-4 sm:px-8 pt-32 pb-16">
  <h1
    class="display-lg text-primary mb-12 border-b border-outline-variant pb-6"
  >
    Education
  </h1>
  <div class="max-w-4xl">
    {#each education as edu}
      <Card
        name={edu.name}
        link={edu.link}
        location={edu.location}
        items={edu.items}
      />
    {/each}
  </div>
</div>
