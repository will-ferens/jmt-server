const locations = [
    {
        location: 'Nevada Falls',
        latitude: 37.7248,
        longitude: -119.5333,
        elevation: 5971,
        mile: 4.22,
        description: 'Nevada Falls is a 594 foot cascade that, unlike Yosemite Falls, never seems to lose much momentum over the long dry season. Where Yosemite slows to a trickle towards the end of July, Nevada is a perpetual roar. It twists on its way down, and hammers the granite wall behind it, creating clouds of mist that drench hikers as they work their way up the long stairwell that takes them to the pool at the top.',
        pictureURL: "https://farm5.staticflickr.com/4594/38236609485_4dfdcd1593_k.jpg" 
    },
    {
        location: 'Cloud Rest Trail Junction',
        latitude: 37.742370775525,
        longitude: -119.5026264401077,
        elevation: 7168,
        mile: 7.85,
        description: 'This was our view of Nevada as we climbed higher up and out of Yosemite valley. The massive granite wall beyond the Falls is the backside of the iconic Half Dome. The first day of hiking brings you up three thousand feet from the valley floor and is a harsh introduction to the daily demands of the rest of the trail. We often remarked that we ’knew’ the elevation gains when we looked at the chart, but still had no idea what they truly met until we pounded the climb out underfoot. With forty five pounds plus of food, water, and gear, climbs like this one were intense, but always worth it looking down and back on what we had accomplished.',
        pictureURL: 'https://farm5.staticflickr.com/4590/38408349384_4b1d1320dd_k.jpg'
    },
    {
        location: 'Vogelsang Trail Junction',
        latitude: 37.86508501015625,
        longitude: -119.32233918378229,
        elevation: 8886, 
        mile: 31.96,
        description: 'A picture of the intrepid adventurers after we had picked up our wilderness permit and before we embarked on the back country. From left to right: Brian, Andrew, George, and the author of this humble project. Look at us! Fresh faced and all smiles.',
        pictureURL: 'https://farm5.staticflickr.com/4735/39118383351_5eba39716e_k.jpg'
    },
    {
        location: 'Lyell Fork',
        latitude: 37.77589249940431,
        longitude: -119.26126913375363,
        elevation: 9652,
        mile: 36.66,
        description: 'The Lyell and Dana Forks supply the three creeks that feed the Tuolumne Meadows River. Bubbling up from underground aquifers, they meet snowmelt and run along a granite river bottom in this High Sierra meadow surrounded by snow capped peaks, stands of conifers and lodgepole pines, and glacially carved domes of rock. The idyllic meadow marks the beginning of the longest roadless wilderness in the contiguous United States and the true beginning of our journey. George and Brian lead the way.',
        pictureURL: 'https://farm5.staticflickr.com/4739/39087302552_fe1e1257ad_k.jpg'
    },
    {
        location: 'Donahue Pass',
        latitude: 37.759215798728405,
        longitude: -119.24745816654355,
        elevation: 11056,
        mile: 39.76,
        description: 'At a forgiving eleven thousand feet, the first mountain pass of eleven total along the trail, Donahue Pass marks the end of Yosemite National Park and the beginning of Ansel Adams Wilderness. From the foot of the pass, we camped at the headwaters of the Delgany Creek, where I took a frigid dip and promptly fell asleep for the night while the sun was still up. I was utterly pooped as my excitement at starting out into the wilderness came to a crescendo; a year and a half of planning and mapping and preparing finally came to fruition.',
        pictureURL: 'https://farm5.staticflickr.com/4640/39118341311_1d19ad1747_k.jpg'
    },
    {
        location: 'Thousand Island Lake',
        latitude: 37.72676004298905,
        longitude: -119.1700173572988,
        elevation: 9840,
        mile: 46.99,
        description: 'Sitting at the foot of Banner Peak, a lake dotted with countless rocky croppings holds the headwaters of the San Joaquin River. As we descended from Donahue Pass, we crossed dozens of nameless tributaries that divided mossy deposits of wildflowers and wizened trees, battered by the high elevation winds and weather. We camped on the sandy shore of the lake, under a rock wall, and watched as the sun set behind Banner Peak.',
        pictureURL: 'https://farm5.staticflickr.com/4729/25251524688_b2da626d6e_k.jpg'
    },
    {
        location: 'Devil\'s Postpile',
        latitude: 37.63104242432027,
        longitude: -119.08802382465842,
        elevation: 7721,
        mile: 62.71,
        description: 'A quick detour off the trail led us to a geological quirk. During the quick cooling of a thick lava flow, these columns formed; the flow can shrink vertically without fracturing, hence the shape. Each of these columns end in a hexagonal shape, creating a random cellular network of hard rock. Following Thousand Island Lake, we stayed a night in an old forest by Emerald Lake, a swampy, slow moving corner of the San Joaquin. The trail followed a forest ravaged by a wind storm that knocked over two hundred foot ponderosa giants years before.',
        pictureURL: 'https://farm5.staticflickr.com/4681/38408200844_0a02e7b633_k.jpg'
    },
    {
        location: 'Duck Lake',
        latitude: 37.53751264225923,
        longitude: -118.970473232293,
        elevation: 10175,
        mile: 75.79,
        description: 'After a resupply at Red’s Meadow, and a much needed night of drinks followed by a late start, we crossed an complex seral forest - a rich ecosystem that follows in the footsteps of a wildfire. The biodiversity represented in this stage of the natural cycle of the area is greater than many of the old forests. Downed trees and carbon rich soil fuel the comeback for plants and animals that relish the sun, now unabated by a canopy above. We wound around atop a ridge overlooking this valley.',
        pictureURL: 'https://farm5.staticflickr.com/4686/38236348685_4ca73a4c66_k.jpg'
    },
    {
        location: 'Mono Creek Bridge',
        latitude: 37.41019343669283,
        longitude: -118.9225380061228,
        elevation: 	8980,
        mile: 89.89,
        description: 'Purple Lupine and Yellow Yarrow stretch for the sun in a river valley filled with Aspen groves and white pines. This picture was taken just before Bear Ridge and Seldon Pass, a 2,000 foot incline delivered by unrelenting switchbacks. I was shocked by just how many flowers there still were, even into mid September and the return of cold conditions for the Sierras.',
        pictureURL: 'https://farm5.staticflickr.com/4689/39118324831_4b4c8880e9_k.jpg'
    },
    {
        location: 'Muir Trail Ranch',
        latitude: 37.23552292007299,
        longitude: -118.88037512949833,
        elevation: 8402,
        mile: 113.44,
        description: 'This resupply point allowed us the opportunity to rest our weary bones in natural springs beside the San Joaquin. Spending this much time immersed in the mountains made certain things clear that never really occurred to me before. For instance, the river rises with the moon making the cross back to our campsite after our soak doubly difficult; it was darker AND swifter. A beautiful orange glow silhouetted by branches after the sun went down.',
        pictureURL: 'https://farm5.staticflickr.com/4637/39118140431_6733161653_k.jpg'
    },
    {
        location: 'Evolution Lake',
        latitude: 37.17096168960508,
        longitude: -118.69882855079152,
        elevation: 10861,
        mile: 131.63,
        description: 'In the shade of Mt. Mendel and Mt. Darwin resides Evolution Lake. We ascended on this trail inside the bounds of Kings Canyon and Sequoia National Park well rested, having taken a much needed zero mile day just before. This section of the trail was some of the most dramatic of the journey. Massive piles of rock under a clear sky; snow capped peaks reflected in the deep blue glacial lakes; lopsided valleys crescendoing down into wide meadows. We felt dwarfed and humbled, then played frisbee at the top of Muir Pass, 12000 feet.',
        pictureURL: 'https://farm5.staticflickr.com/4690/25251420538_ee1ff6d307_k.jpg'
    },
    {
        location: 'Big Pete Meadow',
        latitude: 37.11064232494228,
        longitude: -118.62063742085444,
        elevation: 9254,
        mile: 145.49,
        description: 'One of the few days we were up early enough to see it, we were rewarded with this view of golden, dewy strands of grass, the now familiar domes of granite, and deep alpine lakes being lit as sun rose above the mountain crests we were headed towards. It’s one of my favorite pictures of the trail and a highlight moment of the trip.',
        pictureURL: 'https://farm5.staticflickr.com/4644/24257408907_4ab5e29d05_k.jpg'
    },
    {
        location: 'Majorie Lake',
        latitude: 36.94474608995154,
        longitude: -118.43112882439729,
        elevation: 11172,
        mile: 173.91,
        description: 'Blue bottomless lakes neighbored our ascent towards Pinochet Pass and the last few days of our trek. As we crested Pinochet, a mellow incline compared to a few of the past treks, we mused that the world might have ended while we were out there, and none of us would have even known. At the top, it was clear everything was still intact.',
        pictureURL: 'https://farm5.staticflickr.com/4601/24256882577_d861ee782c_k.jpg'
    },
    {
        location: 'Glen Pass',
        latitude: 36.78784748748064,
        longitude: -118.41109196521262,
        elevation: 11964,
        mile: 193.17,
        description: 'This was taken on our descent from the top of Glen. We camped well above tree line in the lee of some gnarled bushes and crumbled boulders. The sunset was the best of the journey. I thought about grabbing the camera from my bag as we watched it from a nearby perch, but some things are best kept to yourself. Also, it was freezing and moving was hard.',
        pictureURL: 'https://farm5.staticflickr.com/4687/24256904357_44c6f51cd2_k.jpg'
    },
    {
        location: 'Bullfrog Lake Trail',
        latitude: 36.76636427921555,
        longitude: -118.41057491802445,
        elevation: 10775,
        mile: 195.71,
        description: 'We watched all afternoon as the warm sun withered and moved out of reach, and clouds rolled in around the neighboring peaks to bring in snow. We woke to a fresh sheet over everything, transforming the mild, summer-y High Sierra to something harsher and less welcoming, but no less beautiful. Ice crystals glinted in the sun as we complained and broke down camp.',
        pictureURL: 'https://farm5.staticflickr.com/4588/25250633678_2cde1810e9_k.jpg'
    },
    {
        location: 'Forester Pass',
        latitude: 36.69275906960502,
        longitude: -118.37251543094266,
        elevation: 13153,
        mile: 207.34,
        description: 'The highest and longest pass of the trail at 13,153 feet, this one was killer. Wind howled down over the trail and the rocky landscape was more reminiscent of Mars than the forests and meadows we were accustomed to. At the top, we got our first glance at Mt. Whitney and the end of our trip way off in the distance. Andrew is dwarfed by the endless scree fields and huge boulders.',
        pictureURL: 'https://farm5.staticflickr.com/4726/27339879769_3073ec65a1_k.jpg'
    },
    {
        location: 'Mt. Whitney ',
        latitude: 36.57686284022159,
        longitude: -118.29111928694427,
        elevation: 14505,
        mile: 220.99,
        description: 'Our last day on the trail was supposed to be cut into two. But as we set up camp above treeline once again, and watched as storm clouds rolled over the southern range, we decided to make a push for the finish line. Between us and the car was 6,000 feet of elevation change and 26 miles of trail - basically a marathon over the tallest mountain in the continental US. But after 16 days of pounding out 200 plus miles, we were ready. After a early morning tumble in a creek, nearly gagging over another lunch of summer sausage, and thunder claps near the peak, we hobbled to the car in the dark and started our way back home.',
        pictureURL: 'https://farm5.staticflickr.com/4688/39086342512_857e3e8df1_k.jpg'
    },
]

module.exports = locations