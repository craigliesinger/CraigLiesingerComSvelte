<script>
    import Card from './components/Card.svelte'
    let eduItems = [
        {
            name: 'University of Kentucky – Gatton College of Business & Economics',
            image: '',
            link: 'http://gatton.uky.edu/MBA/',
            location: 'Lexington, Kentucky USA',
            items: [
                {
                    name: 'Master of Business Administration (MBA)',
                    dates: 'July 2007 to July 2008',
                    description: 'Final gpa: 3.9 on 4.0 scale'
                }
            ]
        },
        {
            name: 'University of Kentucky – College of Engineering',
            image: '',
            link: 'https://www.engr.uky.edu/',
            location: 'Lexington, Kentucky USA',
            items: [
                {
                    name: 'Bachelor of Science in Mechanical Engineering',
                    dates: 'September 2002 to May 2007',
                    description: 'Final gpa: 3.6 on 4.0 scale'
                }
            ]
        },
        {
            name: 'Danish Institute for Study Abroad (DIS)',
            image: '',
            link: 'http://www.disabroad.org/study-abroad-summer/',
            location: 'Copenhagen, Denmark',
            items: [
                {
                    name: 'European Business Strategy',
                    dates: '13 June 2008 to 3 July 2008',
                    description: ''
                }
            ]
        },
        {
            name: 'Wirtschaftsuniversität Wien - International Summer University',
            image: '',
            link: 'http://www.wu.ac.at/io/incoming/isuwuin/en/',
            location: 'Vienna, Austria',
            items: [
                {
                    name: 'Intercultural Management, Marketing & Corporate Governance',
                    dates: '7 July 2008 to 25 July 2008',
                    description: ''
                }
            ]
        }
    ]
</script>

<div>
    {#each eduItems as item}
        <Card {...item}></Card>
    {/each}
</div>
