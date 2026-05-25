<script>
  import Card from "../../components/Card.svelte";

  const experience = [
    {
      name: "Ecolab",
      location: "Vienna, Austria",
      link: "https://www.ecolab.com",
      items: [
        {
          name: "Digital Product Manager – Healthcare Europe",
          dates: "Feb 2022 – Present",
          description:
            "Leading digital product initiatives for Ecolab's Healthcare division across Europe. Driving customer experience improvements and field sales productivity through technology solutions, process improvement, and cross-functional collaboration.",
        },
      ],
    },
    {
      name: "Shuffle Dating Inc.",
      location: "Austin, TX / Vienna, Austria",
      items: [
        {
          name: "Co-Founder & CTO",
          dates: "Mar 2023 – Mar 2025",
          description:
            "Co-founded and led product & technology for Shuffle Dating, a video-first dating app. Responsible for the full technology stack, product roadmap, and team leadership from concept to launch.",
        },
      ],
    },
    {
      name: "Ecolab",
      location: "Vienna, Austria",
      items: [
        {
          name: "IT Project Manager & PMO",
          dates: "Mar 2017 – Feb 2022",
          description:
            "Managed a portfolio of IT projects across Ecolab's European operations. Established and maintained project management office standards, coordinated with stakeholders, and ensured on-time, on-budget delivery of key initiatives.",
        },
      ],
    },
    {
      name: "bwin.party",
      location: "Vienna, Austria",
      items: [
        {
          name: "Business Analyst",
          dates: "",
          description:
            "Worked as a Business Analyst in the online gaming and entertainment sector, focusing on process analysis, requirements gathering, and cross-functional coordination to improve product and operational efficiency.",
        },
      ],
    },
    {
      name: "Cummins Inc.",
      location: "Columbus, Indiana, USA",
      link: "https://www.cummins.com",
      items: [
        {
          name: "Project Manager",
          dates: "Feb 2012 – Aug 2013",
          description:
            "Managed engineering projects for Cummins Inc., a global leader in power solutions. Coordinated cross-functional teams, tracked project milestones, and drove process improvements in manufacturing operations.",
        },
      ],
    },
    {
      name: "Central Bank of Kentucky",
      location: "Lexington, Kentucky, USA",
      items: [
        {
          name: "MBA Intern – Consultant",
          dates: "",
          description:
            "Provided consulting support as part of MBA internship, analysing business processes and recommending improvements to internal operations.",
        },
      ],
    },
    {
      name: "Lexmark International",
      location: "Lexington, Kentucky, USA",
      link: "https://www.lexmark.com",
      items: [
        {
          name: "Hardware Engineering Student Intern",
          dates: "",
          description:
            "Contributed to hardware engineering projects as a student intern, supporting product design and testing processes.",
        },
      ],
    },
    {
      name: "GE Consumer & Industrial",
      location: "Louisville, Kentucky, USA",
      link: "https://www.ge.com",
      items: [
        {
          name: "Engineering Co-op",
          dates: "",
          description:
            "Completed an engineering co-op rotation at GE Consumer & Industrial, gaining hands-on experience in manufacturing engineering and process improvement.",
        },
      ],
    },
  ];
</script>

<svelte:head>
  <title>Work – Craig Liesinger</title>
  <meta
    name="description"
    content="Work experience of Craig Liesinger – Digital Product & Project Manager."
  />
</svelte:head>

<div class="max-w-[1200px] mx-auto px-4 sm:px-8 pt-32 pb-16">
  <h1
    class="display-lg text-primary mb-12 border-b border-outline-variant pb-6"
  >
    Work Experience
  </h1>
  <div class="max-w-4xl">
    {#each experience as exp}
      <Card
        name={exp.name}
        link={exp.link}
        location={exp.location}
        items={exp.items}
      />
    {/each}
  </div>
</div>
