import { FaRegHeart } from 'react-icons/fa';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Overview = () => {

    const travelPackages = [
        {
            imageUrl: "https://source.unsplash.com/MrKPi-yajC0/640x360",
            tourType: "Adventure",
            tripTitle: "Majestic Mountains Exploration",
            price: 150
        },
        {
            imageUrl: "https://source.unsplash.com/Cdwi5n7Gwes/640x360",
            tourType: "Cultural",
            tripTitle: "Historical Marvels Tour",
            price: 120
        },
        {
            imageUrl: "https://source.unsplash.com/anE4tvkHhLs/640x360",
            tourType: "Nature",
            tripTitle: "Tranquil Rivers Adventure",
            price: 180
        }
    ];

    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Overview</Tab>
                    <Tab>Our Packages</Tab>
                    <Tab>Meet Our Tour Guides</Tab>
                </TabList>

                <TabPanel>
                    <iframe width="100%" height="600px" src="https://www.youtube.com/embed/Z44fFqBQQtg?si=y23mZULnJ37wQHHz" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
                        {
                            travelPackages.map((item, index) => (
                                <div key={index} className="card bg-base-100 shadow">
                                    <figure><img src={item.imageUrl} alt={item.tripTitle} /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{item.tripTitle}</h2>
                                        <div className='flex justify-between'>
                                            <p>Price: ${item.price}</p>
                                            <div className="badge badge-info">{item.tourType}</div>
                                        </div>
                                        <div className='flex gap-4'>
                                            <button className="btn btn-outline btn-error text-lg"><FaRegHeart /></button>
                                            <button className="btn btn-info flex-grow">View Package</button>
                                        </div>

                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <button className="btn btn-info mx-auto block">All Packages</button>
                </TabPanel>
                <TabPanel>
                    <p>
                        <b>Princess Peach</b> (<i>Japanese: ピーチ姫 Hepburn: Pīchi-hime, [piː.tɕi̥ çi̥.me]</i>)
                        is a character in Nintendo's Mario franchise. Originally created by Shigeru Miyamoto,
                        Peach is the princess of the fictional Mushroom Kingdom, which is constantly under
                        attack by Bowser. She often plays the damsel in distress role within the series and
                        is the lead female. She is often portrayed as Mario's love interest and has appeared
                        in Super Princess Peach, where she is the main playable character.
                    </p>
                    <p>
                        Source:{' '}
                        <a href="https://en.wikipedia.org/wiki/Princess_Peach" target="_blank">
                            Wikipedia
                        </a>
                    </p>
                </TabPanel>
                <TabPanel>
                    <p>
                        <b>Yoshi</b> (<i>ヨッシー Yosshī, [joɕ.ɕiː]</i>) (<i>English: /ˈjoʊʃi/ or /ˈjɒʃi/</i>), once
                        romanized as Yossy, is a fictional anthropomorphic dinosaur who appears in
                        video games published by Nintendo. Yoshi debuted in Super Mario World (1990) on the
                        Super Nintendo Entertainment System as Mario and Luigi's sidekick. Yoshi later starred
                        in platform and puzzle games, including Super Mario World 2: Yoshi's Island, Yoshi's Story
                        and Yoshi's Woolly World. Yoshi also appears in many of the Mario spin-off games, including
                        Mario Party and Mario Kart, various Mario sports games, and Nintendo's crossover fighting
                        game series Super Smash Bros. Yoshi belongs to the species of the same name, which is
                        characterized by their variety of colors.
                    </p>
                    <p>
                        Source:{' '}
                        <a href="https://en.wikipedia.org/wiki/Yoshi" target="_blank">
                            Wikipedia
                        </a>
                    </p>
                </TabPanel>
                <TabPanel>
                    <p>
                        <b>Toad</b> (<i>Japanese: キノピオ Hepburn: Kinopio</i>) is a fictional character who primarily
                        appears in Nintendo's Mario franchise. Created by Japanese video game designer Shigeru Miyamoto,
                        he is portrayed as a citizen of the Mushroom Kingdom and is one of Princess Peach's most loyal
                        attendants; constantly working on her behalf. He is usually seen as a non-player character (NPC)
                        who provides assistance to Mario and his friends in most games, but there are times when Toad(s)
                        takes center stage and appears as a protagonist, as seen in Super Mario Bros. 2, Wario's Woods,
                        Super Mario 3D World, and Captain Toad: Treasure Tracker.
                    </p>
                    <p>
                        Source:{' '}
                        <a href="https://en.wikipedia.org/wiki/Toad_(Nintendo)" target="_blank">
                            Wikipedia
                        </a>
                    </p>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Overview;
