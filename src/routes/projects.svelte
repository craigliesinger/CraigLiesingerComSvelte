<script>
    import Card from './components/Card.svelte'
    let projects = [
        {
            name: 'Mobile Apps',
            image: '',
            link: '',
            location: '',
            items: [
                {
                    name: 'Baby Badge',
                    dates: '2016',
                    description: "Inspired by my first daughter's approaching 1st birthday and all the monthly photo's we took to share her growth with family far away, I built this photo 'marking' app. The application let users chose (or take) a photo and then append an age sticker and save as a new image with the sticker. The stickers were customizable on dozens of different variables such as background style, color, text color, age, border, etc. The app was free to download with a 1-time in app purchase possible to remove 'Baby Badge' watermark. Lifetime download's was just over 8,000. Language used was Swift."
                },
                {
                    name: 'Math Espresso',
                    dates: '2015',
                    description: "A game to awaken your brain by solving basic math problems as quickly as possible. This was my first usage of Swift language. This simple game utilized Apple's game center to enable P v P match making and creative generative functions for randomly creating math problems of increasing diffilculty by round."
                },
                {
                    name: 'German Strong Verbs',
                    dates: '2012',
                    description: "This was first experiment in the world of iOS application creation. I started as a total novice, but came to learn XCode, Objective-C, interface builder / story board, Gimp, and all the various tasks of actually releasing an app to the Apple App Store."
                }
            ]
        },
        {
            name: 'Web Apps',
            image: '',
            link: '',
            location: '',
            items: [
                {
                    name: 'picobellobau',
                    dates: '2019',
                    link: 'https://www.picobellobau.at/',
                    description: "A website with a large customer portal in the background for Austrian Bau Firme (construction company). The home page includes the normal static content as well as a custom built blog, integration to Facebook for latest positive reviews and Instagram for most recent posts from the company. In the background customer portal, there is integration with companies SaaS ERP api for all customer documents access, building plan uploads, photo share and a bit more. The app is built useing Angular (including Universal for SSR) and Firebase for background database, storage, functions, analytics and hosting."
                },
                {
                    name: 'Ziegelwerkstatt',
                    dates: '2021',
                    link: 'https://ziegelwerkstatt.web.app/',
                    description: "Very much a work in progress with a long way to go. This large experiment includes three.js landing page, 3 different Angular apps (end user house configurator, admin portal, and partner portal)."
                },
                {
                    name: 'Web-Ifc Svelte Example Viewer',
                    dates: '2021',
                    link: 'https://github.com/craigliesinger/simple-svelte',
                    description: "Other projects brought me to the newly formed but quickly growing Web-Ifc project.  In a desire to contribute to what I see as a great project and learn Svelte, I developed a Svelte based example of their IFC viewer."
                }
            ]
        },
        {
            name: 'Arduino Hacks',
            image: '',
            link: '',
            location: '',
            items: [
                {
                    name: 'BLE controlled LED Mixing Lamp',
                    link: 'https://craigliesinger.medium.com/color-mixing-lamp-controlled-by-iphone-39769eb35ca4',
                    description: "Arduino + Red Bear BLE 2.1 + Swift = Cool"
                },
                {
                    name: 'Remote Thermo Couple Sending Temp to iPhone',
                    link: 'https://craigliesinger.medium.com/remote-thermo-couple-sending-temp-to-iphone-a5280bcd5895',
                    description: "Time to receive the data"
                }
            ]
        }
    ]
</script>

<div>
    {#each projects as project}
        <Card {...project}></Card>
    {/each}
</div>