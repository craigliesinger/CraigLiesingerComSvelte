<script>
    import Card from './components/Card.svelte'

    let workItems = [
        {
            name: 'Ecolab',
            image: '',
            link: 'https://www.ecolab.com',
            location: 'Vienna, Austria',
            items: [
                {
                    name: 'IT Project Manager & PMO',
                    dates: 'March 2017 to Current',
                    description: 'Managing IT projects at EU level and responcible for PMO activities including implementing Portfolio management tools and processes.'
                },
                {
                    name: 'Project Manager CEE',
                    dates: 'October 2015 to March 2017',
                    description: 'Cross-functional and cross-regional Project Management for business projects.'
                },

            ]
        },
        {
            name: 'bwin.party',
            image: '',
            link: 'https://www.bwinparty.com',
            location: 'Vienna, Austria',
            items: [
                {
                    name: 'Business Analyst',
                    dates: 'September 2013 to September 2015',
                    description: 'Creating technical requirements based on business / customer desires. Serve as connection between business and software development. Coordinate and prioritize development backlog.'
                }

            ]
        },
        {
            name: 'Cummins Inc.',
            image: '',
            link: 'https://www.cummins.com',
            location: 'Columbus, Indiana USA',
            items: [
                {
                    name: 'Project Manager',
                    dates: 'February 2012 to August 2013',
                    description: 'Managed a cross functional team through the new product development process for a new engine platform with a NPV of greater than $50 million USD.'
                },
                {
                    name: 'Customer Integration Engineer',
                    dates: 'February 2011 to February 2012',
                    description: 'Managed mechanical development work on engine components interacting with customer’s vehicle. Includes designing changes to components using CAD and working with suppliers to resolve issues during development.'
                },
                {
                    name: 'Competitive Intelligence Manager & Market Analyst',
                    dates: 'August 2008 to February 2011',
                    description: 'Monitored competitor actions and analyze potential impact to company and market. Local expert of automotive marketplace for engines less than 7 liters. Analyzed market data to identify market gaps and sales opportunities.'
                }

            ]
        },
        {
            name: 'Central Bank',
            image: '',
            link: 'https://www.centralbank.com',
            location: 'Lexington, Kentucky USA',
            items: [
                {
                    name: 'MBA Intern - Consultant',
                    dates: 'October 2007 to April 2008',
                    description: 'Part of a MBA student team that completed projects assigned from executive board on NPD, Supply chain, and M&A. I was responsible to lead the supply chain project.'
                }

            ]
        },
        {
            name: 'Lexmark International',
            image: '',
            link: 'https://www.lexmark.com',
            location: 'Lexington, Kentucky USA',
            items: [
                {
                    name: 'Hardware Engineering Student Intern',
                    dates: 'March 2007 to July 2007',
                    description: 'Performed design engineering and mechanical development engineering tasks on hardware components for new laser printer program.'
                }

            ]
        },
        {
            name: 'GE Consumer & Industrial',
            image: '',
            link: 'http://www.ge.com/',
            location: 'Louisville, Kentucky USA',
            items: [
                {
                    name: 'Engineering Co-op',
                    dates: 'August 2004 to June 2005',
                    description: 'Completed three rotations in the areas of Supply Chain Management, New Product Introduction, and Innovations.'
                }

            ]
        }
    ]
</script>

<div>
    {#each workItems as item}
        <Card {...item}></Card>
    {/each}
</div>