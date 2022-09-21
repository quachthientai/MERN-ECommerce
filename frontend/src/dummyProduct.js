const products = [
   {"Earphones": [
      {
         id: 'ep1',
         tagLine: 'Stay connected to the world you love with all-day wireless Powerbeats3 Earphones',
         name: 'Powerbeats3 Wireless Earphones',
         image: '/images/earphones/ep1.png',
         description: [
               'In-Ear Stereo Headphones, connect via Class 1 Bluetooth with your device for wireless workout freedom.', 
               'Up to 12 hours battery life to power through multiple workouts.',
               'Take calls, control your music and activate Siri with RemoteTalk, rechargeable lithium-ion battery.',
               'Flexible, secure-fit earhooks maximize comfort and stability, sweat and water resistance to handle tough training.'
               ],
         brands: 'Beats By Dre',
         category: 'Earphones',
         price: 129.99,
         countInStock: 10,
         rating: 4.2,
         numReviews: 20,
         color: 'black' 
      },

      {
         id: 'ep2',
         tagLine: 'True Wireless Noise Cancelling Earbuds',
         name: 'Beats Studio Buds',
         image: '/images/earphones/ep2.png',
         description: [
               'Control your sound with two distinct listening modes: Active Noise Cancelling (ANC) and Transparency mode.', 
               'Select one of the three soft, silicone eartips. These options provide comfort, stability, and the confidence of staying put.',
               'Up to 8 hours of listening time1 (up to 24 hours combined with pocket-sized charging case).',
               'High-quality call performance and voice assistant interaction via built-in microphones.'
               ],
         brands: 'Beats By Dre',
         category: 'Earphones',
         price: 149.99,
         countInStock: 15,
         rating: 4.5,
         numReviews: 30,
         color: 'white' 
      },

      {
         id: 'ep3',
         tagLine: 'True Wireless Noise Cancelling Earbuds',
         name: 'Beats Fit Pro',
         image: '/images/earphones/ep3.png',
         description: [
               'Beats Fit Pro is equipped with comfortable, secure-fit wingtips that flex to fit your ear. The universal wingtip design was put to the ultimate test by athletes of all kinds so you can trust these earbuds will stay put through work days and workouts.', 
               'For a comfortable, secure fit, gently twist earbud back and tuck wingtip into upper ear.',
               'Beats Fit Pro supports Spatial Audio with dynamic head tracking for immersive music, movies, and games. Dynamic head tracking uses gyroscopes and accelerometers to adjust the sound as you turn your head, for a multi-dimensional experience that makes you feel like you are inside of it.',
               `On-device controls allow you to manage music, toggle listening modes as well as take calls and activate voice assistant using the 'b' button.`
               ],
         brands: 'Beats By Dre',
         category: 'Earphones',
         price: 185.00,
         countInStock: 5,
         rating: 5.0,
         numReviews: 10,
         color: 'black' 
      },

      {
         id: 'ep4',
         tagLine: 'True Wireless High-Performance Earbuds',
         name: 'PowerBeats Pro',
         image: '/images/earphones/ep4.png',
         description: [
               'Powered by the Apple H1 headphone chip and with Class 1 Bluetooth® technology, these wireless earbuds offer extended range and fewer dropouts, so they stay connected as you keep moving.', 
               'Each earbud has up to 9 hours of listening time, so you can keep your music going. With the charging case, you will get more than 24 hours of combined playback.',
               'With Audio Sharing, you can pair two sets of Beats headphones or AirPods to one iPhone and enjoy the same song, podcast, or movie along with a friend.',
               `Each earbud has full volume and track controls, so you don't need your device to adjust your music.`
               ],
         brands: 'Beats By Dre',
         category: 'Earphones',
         price: 199.95,
         countInStock: 7,
         rating: 4.0,
         numReviews: 25,
         color: 'navy' 
      }
   ]},

   {"Headphones": [
      {
         id: 'hp1',
         tagLine: 'Feel the bass in your bones',
         name: 'Monster Beats Pro',
         image: '/images/headphones/hp1.png',
         description: [
               'Attention sound engineers, DJs, musicians, and hard core music lovers.', 
               'Beats Pro uses no amplification or noise cancellation circuitry that adds other frequencies and colors the sound, so you hear the bass, uncompromised. The sound is pure even at high volumes.',
               'Increased ear cup foam density and precise fitting shut out external noise for extraordinary accuracy, extreme clarity, and hard driving bass.',
               'Comfortable at all times, these ultra soft ear cushions make the headphones a pleasure to wear. Removable and washable because you want the beats funky, not your headphones.'
               ],
         brands: 'Beats By Dre',
         category: 'Headphones',
         price: 259.99,
         countInStock: 5,
         rating: 4.0,
         numReviews: 7,
         color: 'black' 
      },

      {
         id: 'hp2',
         tagLine: 'Dance your heart out to the beats',
         name: 'JBL Tune 510BT',
         image: '/images/headphones/hp2.png',
         description: [
               'It features the renowned JBL Pure Bass sound, which can be found in the most famous venues all around the world.', 
               'Wirelessly stream high-quality sound from your smartphone without messy cords.',
               'For long-lasting fun, listen wirelessly for 40 hours and recharge the battery in as little as 2 hours with the convenient Type-C USB cable. A quick 5-minute recharge gives you 2 additional hours of music.',
               'The JBL Tune 510BT headphones are a grab n go solution that helps you to inject music into every aspect of your busy life.'
               ],
         brands: 'JBL',
         category: 'Headphones',
         price: 49.95,
         countInStock: 12,
         rating: 4.1,
         numReviews: 22,
         color: 'blue' 
      },

      {
         id: 'hp3',
         tagLine: 'True Wireless On-Ear Headphones',
         name: 'Beats Solo3 Wireless',
         image: '/images/headphones/hp3.png',
         description: [
               'Support Spatial Audio for immersive music, movies, and games - delivering a surround sound experience that you can take with you anywhere.', 
               'Delivers premium playback with fine-tuned acoustics that maximize clarity breadth, and balance.',
               'With Fast Fuel, a quick 5-minute charge provides 3 hours of playback.',
               'The on-ear, cushioned ear cups are adjustable, so you can customize your fit for all-day listening comfort.'
               ],
         brands: 'Beats By Dre',
         category: 'Headphones',
         price: 180.95,
         countInStock: 11,
         rating: 3.5,
         numReviews: 8,
         color: 'black' 
      },

      {
         id: 'hp4',
         tagLine: 'True Wireless Noise Cancelling Over-Ear Headphones',
         name: 'Beats Studio3 Wireless',
         image: '/images/headphones/hp4.png',
         description: [
               'The Apple W1 headphone chip brings seamless setup and switching for your Apple devices§, so you can easily move about, keep the music going, and stay productive all day.', 
               'Are engineered for all-day comfort. The holistic design is lightweight, durable, and comfortable, so you can get lost in your music.',
               'Easily connect to Android devices via Bluetooth® right out of the box.',
               'With Fast Fuel, a quick 10-minute charge provides 3 hours of playback.'
               ],
         brands: 'Beats By Dre',
         category: 'Headphones',
         price: 245.95,
         countInStock: 10,
         rating: 5.0,
         numReviews: 10,
         color: 'red' 
      },

      {
         id: 'hp5',
         tagLine: 'True Wireless Noise Cancelling Over-Ear Headphones',
         name: 'Beats Studio3 Wireless',
         image: '/images/headphones/hp5.png',
         description: [
               'The Apple W1 headphone chip brings seamless setup and switching for your Apple devices§, so you can easily move about, keep the music going, and stay productive all day.', 
               'Are engineered for all-day comfort. The holistic design is lightweight, durable, and comfortable, so you can get lost in your music.',
               'Easily connect to Android devices via Bluetooth® right out of the box.',
               'With Fast Fuel, a quick 10-minute charge provides 3 hours of playback.'
               ],
         brands: 'Beats By Dre',
         category: 'Headphones',
         price: 245.95,
         countInStock: 9,
         rating: 5.0,
         numReviews: 19,
         color: 'white' 
      },

      {
         id: 'hp6',
         tagLine: 'Wake up and listen',
         name: 'JBL Everest 700',
         image: '/images/headphones/hp6.png',
         description: [
               'Legendary JBL Pro Audio Sound, enjoy the same elevated experience and incredible sound JBL has been delivering to concert hall', 
               'With a rechargeable battery offering 25 hours of performance and ShareMe 2.0 to wirelessly share music, videos and games, now you can dance alone or with a partner free from limits.',
               'A built-in microphone also allows for easy call access.',
               'Best-in-class Ergonomics, designed to fit the unique contour of your ears'
               ],
         brands: 'JBL',
         category: 'Headphones',
         price: 169.95,
         countInStock: 5,
         rating: 3.9,
         numReviews: 20,
         color: 'black' 
      },
   ]},

   {"Speakers": [
      {
         id: 'sp1',
         tagLine: 'Sounds better than ever',
         name: 'JBL Flip 5 Eco Edition',
         image: '/images/speakers/sp1.png',
         description: [
               'The waterproof JBL Flip 5 Eco edition is made from 90% recycled plastic and has a eco-friendly packaging.', 
               'Feel your music. Flip 5 Eco edition all new racetrack-shaped driver delivers high output. Enjoy booming bass in a compact package.',
               `Don't sweat the small stuff like charging your battery. Flip 5 Eco edition gives you more than 12 hours of playtime. Keep the music going longer and louder with JBL's signature sound.`,
               'Pair two JBL PartyBoost-compatible speakers together for stereo sound or link multiple JBL PartyBoost-compatible speakers to create a bigger party.'
               ],
         brands: 'JBL',
         category: 'Speakers',
         price: 99.95,
         countInStock: 15,
         rating: 4.6,
         numReviews: 25,
         color: 'blue' 
      },

      {
         id: 'sp2',
         tagLine: 'Light up the night',
         name: 'JBL Pulse 3',
         image: '/images/speakers/sp2.png',
         description: [
               'Wirelessly connect up to 2 smartphones or tablets and take turns playing music with exceptional 360° sound.', 
               'The built-in rechargeable Li-ion battery provides up to 12 hours of playtime with music and light show.',
               `JBL Pulse 3's customizable 360° lightshow sets the atmosphere by bringing your favorite songs to life.`,
               'Customize your lightshow experience at the tip of your fingers with the JBL Connect app.'
               ],
         brands: 'JBL',
         category: 'Speakers',
         price: 199.95,
         countInStock: 2,
         rating: 5.0,
         numReviews: 50,
         color: 'multicolor' 
      },

      {
         id: 'sp3',
         tagLine: 'Wireless Bluetooth® Streaming',
         name: 'JBL Go 2',
         image: '/images/speakers/sp3.png',
         description: [
               'Wirelessly stream high-quality sound from your smartphone or tablet.', 
               'Built-in, rechargeable Li-ion battery supports up to 5 hours of playtime.',
               `The IPX7 waterproof housing makes GO 2 perfect for worry-free listening by the beach or poolside, or even in it.`,
               'Crafted in a compact design with 12 eye-catching colors to choose from, GO 2 instantly raises your style profile to all-new levels.'
               ],
         brands: 'JBL',
         category: 'Speakers',
         price: 49.95,
         countInStock: 8,
         rating: 3.5,
         numReviews: 10,
         color: 'teal' 
      },

      {
         id: 'sp4',
         tagLine: 'Wireless Bluetooth® Streaming',
         name: 'JBL Clip 3',
         image: '/images/speakers/sp4.png',
         description: [
               'Wirelessly stream high-quality sound from your smartphone or tablet.', 
               'Built-in, rechargeable Li-ion battery supports up to 10 hours of playtime.',
               `No more worrying about rain or spills; you can even immerse it in water.`,
               'Never leave awesome sound at home again. Clip it on with the built-in carabiner, press play and make the moment pop.'
               ],
         brands: 'JBL',
         category: 'Speakers',
         price: 39.95,
         countInStock: 8,
         rating: 4.3,
         numReviews: 10,
         color: 'teal' 
      },
   ]}
]
   
export default products
