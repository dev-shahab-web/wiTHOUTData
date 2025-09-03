// --- DYNAMIC TOUR DETAILS DATA ---
export interface ITourDetailsContent {
  id: number;
  overview: string[];
  include: string[];
  exclude: string[];
  plan: Array<{
    day: string;
    title: string;
    description: string;
    highlights?: string[];
  }>;
}

export const tourDetailsContent: ITourDetailsContent[] = [
  {
    id: 1, // KAILASH MANASAROVAR OVERLAND TOURS
    overview: [
      `Tibet/Nepal 12 Nights 13 days. Transport: AC Coach/Land Cruiser. Pickup Point: Ex:Kathmandu. Places Covered: Kathmandu, Kyirong, Saga, Darchen, Kailash Mansarovar. Duration: 12 Nights / 13 Days. Note: All hotels and permits are subject to availability / Cost is subject to change.`
    ],
    include: [
      "12 Nights' accommodation at Respective Hotels/Guest Houses on sharing basis",
      "All meals during the tour (Breakfast, Lunch & Dinner)",
      "Transportation by Land Cruiser in Tibet",
      "Tibet Group Visa",
      "Tibet Travel Permit and Alien Travel Permit",
      "Professional English speaking Tibetan guide",
      "All entry fees and monastery entrance fees",
      "Oxygen cylinders and first aid kit",
      "Sacred thread (Janeu) and holy water from Mansarovar",
      "Kailash Parikrama by foot/pony (optional)"
    ],
    exclude: [
      "Nepal Visa fees",
      "International airfare to/from Kathmandu",
      "Personal expenses like laundry, telephone, tips etc.",
      "Travel insurance (mandatory)",
      "Emergency evacuation cost",
      "Pony/Porter charges during Kailash Parikrama (if required)",
      "Single room supplement",
      "Any expenses due to roadblocks, weather conditions",
      "Medical expenses and evacuation if required"
    ],
    plan: [
      {
        day: "Day 01",
        title: "Arrival in Kathmandu",
        description: "Arrive at Tribhuvan International Airport, Kathmandu. Meet with our representative and transfer to hotel. Evening briefing about the tour. Overnight in Kathmandu."
      },
      {
        day: "Day 02",
        title: "Kathmandu Sightseeing & Preparation",
        description: "Visit Pashupatinath Temple, Boudhanath Stupa, and other important religious sites. Complete formalities for Tibet travel permits. Medical check-up and preparation for high altitude travel. Overnight in Kathmandu."
      },
      {
        day: "Day 03",
        title: "Kathmandu to Kyirong (2,800m)",
        description: "Drive to Nepal-Tibet border at Rasuwa Gadhi. Complete immigration formalities and cross into Tibet at Kyirong. First day acclimatization in Tibet. Overnight in Kyirong."
      },
      {
        day: "Day 04",
        title: "Kyirong to Saga (4,640m)",
        description: "Drive to Saga through beautiful Tibetan landscape. Gradual altitude gain for acclimatization. Visit local monastery if time permits. Overnight in Saga."
      },
      {
        day: "Day 05",
        title: "Saga to Mansarovar Lake (4,590m)",
        description: "Drive to the sacred Mansarovar Lake. Take holy bath and perform puja at the lake. Circumambulation (Parikrama) of Mansarovar Lake. Overnight camping near Mansarovar or in Chuku Monastery."
      },
      {
        day: "Day 06",
        title: "Mansarovar to Darchen (4,670m)",
        description: "Early morning puja at Mansarovar Lake. Drive to Darchen, the base camp for Mount Kailash. First glimpse of sacred Mount Kailash. Preparation for Kailash Parikrama. Overnight in Darchen."
      },
      {
        day: "Day 07",
        title: "Darchen to Dirapuk (5,080m) - Day 1 of Kailash Parikrama",
        description: "Start the sacred Kailash Parikrama (circumambulation). Trek from Darchen to Dirapuk monastery via Tarboche (prayer flag pole). Distance: 20 km. Overnight camping at Dirapuk."
      },
      {
        day: "Day 08",
        title: "Dirapuk to Zuthulpuk (4,790m) - Day 2 of Kailash Parikrama",
        description: "Most challenging day crossing Dolma La Pass (5,630m). Offer prayers at Dolma La and proceed to Zuthulpuk monastery. Distance: 22 km. Overnight camping at Zuthulpuk."
      },
      {
        day: "Day 09",
        title: "Zuthulpuk to Darchen - Day 3 of Kailash Parikrama",
        description: "Complete the sacred Kailash Parikrama by reaching Darchen. Distance: 14 km. Rest and celebration for completing the holy circumambulation. Overnight in Darchen."
      },
      {
        day: "Day 10",
        title: "Darchen to Saga",
        description: "Drive back to Saga. En-route visit Rakshas Tal (Ghost Lake) if time permits. Rest day after completing the challenging Kailash Parikrama. Overnight in Saga."
      },
      {
        day: "Day 11",
        title: "Saga to Kyirong",
        description: "Drive back to Kyirong border town. Last day in Tibet. Rest and preparation for return journey. Overnight in Kyirong."
      },
      {
        day: "Day 12",
        title: "Kyirong to Kathmandu",
        description: "Complete Tibet exit formalities and cross back to Nepal. Drive to Kathmandu. Evening celebration dinner. Overnight in Kathmandu."
      },
      {
        day: "Day 13",
        title: "Departure from Kathmandu",
        description: "Transfer to Tribhuvan International Airport for onward destination. End of sacred Kailash Mansarovar Yatra."
      }
    ]
  },
  {
    id: 2, // KAILASH MANSAROVAR TOURS BY HELICOPTER
    overview: [
      `Nepal/Tibet 8 Nights 9 days. Transport: Helicopter/AC Coach. Pickup Point: Ex:Kathmandu. Places Covered: Kathmandu, Nepalgunj, Simikot, Hilsa, Taklakot, Mansarovar, Kailash. Duration: 8 Nights / 9 Days. Note: All flights and accommodation are subject to weather conditions and availability / Cost is subject to change.`
    ],
    include: [
      "08 Nights' accommodation at Respective Hotels/Lodges on sharing basis",
      "All meals during the tour (Breakfast, Lunch & Dinner)",
      "Helicopter flights as per itinerary (Kathmandu-Nepalgunj-Simikot-Hilsa)",
      "Land transportation in Tibet by Land Cruiser",
      "Tibet Group Visa and all permits",
      "Professional English speaking guide",
      "All entry fees and monastery entrance fees",
      "Sacred thread (Janeu) and holy water from Mansarovar",
      "Oxygen cylinders and first aid kit",
      "Porter services during Kailash Parikrama"
    ],
    exclude: [
      "Nepal Visa fees",
      "International airfare to/from Kathmandu",
      "Personal expenses like laundry, telephone, tips etc.",
      "Travel insurance (mandatory)",
      "Emergency evacuation cost",
      "Single room supplement",
      "Any expenses due to weather conditions or flight cancellations",
      "Medical expenses and evacuation if required",
      "Additional helicopter charges due to weather delays"
    ],
    plan: [
      {
        day: "Day 01",
        title: "Arrival in Kathmandu",
        description: "Arrive at Tribhuvan International Airport, Kathmandu. Meet with our representative and transfer to hotel. Evening briefing about the helicopter tour. Overnight in Kathmandu."
      },
      {
        day: "Day 02",
        title: "Kathmandu to Nepalgunj",
        description: "Fly to Nepalgunj (1-hour flight). Complete formalities for Tibet permits and prepare for helicopter journey. Rest and acclimatization. Overnight in Nepalgunj."
      },
      {
        day: "Day 03",
        title: "Nepalgunj to Simikot to Hilsa by Helicopter",
        description: "Helicopter flight from Nepalgunj to Simikot (45 minutes) and then to Hilsa border (15 minutes). Cross into Tibet at Sher/Hilsa border. Drive to Taklakot (Purang). Overnight in Taklakot."
      },
      {
        day: "Day 04",
        title: "Taklakot to Mansarovar Lake",
        description: "Drive to sacred Mansarovar Lake (1.5 hours). Take holy bath and perform puja at the lake. Circumambulation (Parikrama) of Mansarovar Lake by vehicle. Overnight camping near Mansarovar."
      },
      {
        day: "Day 05",
        title: "Mansarovar to Darchen",
        description: "Early morning puja at Mansarovar Lake. Drive to Darchen, the base camp for Mount Kailash. First darshan of sacred Mount Kailash. Preparation for Kailash Parikrama. Overnight in Darchen."
      },
      {
        day: "Day 06",
        title: "Kailash Parikrama - Day 1 (Darchen to Dirapuk)",
        description: "Begin the sacred Kailash Parikrama. Trek/drive from Darchen to Dirapuk monastery (5,080m) via Tarboche. Distance covered by foot/vehicle as per physical condition. Overnight at Dirapuk."
      },
      {
        day: "Day 07",
        title: "Kailash Parikrama - Day 2 (Dirapuk to Zuthulpuk via Dolma La)",
        description: "Cross the challenging Dolma La Pass (5,630m) - the highest point of Kailash Parikrama. Offer prayers and proceed to Zuthulpuk monastery. Helicopter assistance available if needed. Overnight at Zuthulpuk."
      },
      {
        day: "Day 08",
        title: "Complete Parikrama & Return to Taklakot",
        description: "Complete the sacred Kailash Parikrama by reaching back to Darchen. Drive to Taklakot for border crossing preparations. Last night in Tibet. Overnight in Taklakot."
      },
      {
        day: "Day 09",
        title: "Hilsa to Kathmandu via Helicopter",
        description: "Cross Tibet-Nepal border at Hilsa. Helicopter flight from Hilsa to Simikot to Nepalgunj to Kathmandu (subject to weather). Arrival in Kathmandu and transfer to airport for onward destination."
      }
    ]
  },
  {
    id: 3, // Sacred Journey to Muktinath (Kathmandu - Pokhara - Muktinath)
    overview: [
      `KTM: Nepal 05 Nights 06 days. Transport: AC Coach. Pickup Point: Ex:Kathmandu. Places Covered: Kathmandu, Pokhara & Muktinath. Duration: 05 Nights / 06 Days. Note: All the above flights and hotels are subject to availability / Cost is subject to change.`
    ],
    include: [
      "05 Nights’ accommodation at Respective Hotel on a bed breakfast basic",
      "Arrival and departure transfer and sightseeing tours Private A/C HIACE/COSTER",
      "Air tickets for Pokhara-Jomsom-Pokhara",
      "Jomsom – Muktinath – Jomsom by jeep sharing basis",
      "ACAP permit fee",
      "Pokhara-Kathmandu Airfare",
      "All current government taxes as applicable"
    ],
    exclude: [
      "Any meal not mentioned on the above program during the tour.",
      "Any entry fees, ticket during sight seeing",
      "Insurance Fee",
      "Monuments entrance fees as mentioned in the program & any payable fee on the spot",
      "Expenses of personal nature such as bar bills, communication charges, laundry, tips, etc.",
      "Cost arising out of flight cancellation/road blockades/landslides/riots and events beyond our control",
      "Any other expenses not mentioned in the above cost"
    ],
    plan: [
      {
        day: "Day 01",
        title: "Arrival – Kathmandu",
        description: "Upon arrival at Kathmandu Airport, you will be greeted and assisted by our Representative. After completing your custom formalities, transfer to Hotel for check-in. Evening visit Bouddhanath Stupa and Pashupatinath Temple. Overnight in Kathmandu Hotel."
      },
      {
        day: "Day 02",
        title: "Kathmandu – Pokhara",
        description: "Early morning drop to Airport for Mountain Flight (Optional: INR 9200 PER PERSON EXTRA: Cost not included in Package). After breakfast, drive to Pokhara (about 210 km, 6/7 hrs drive). En-route, visit Manakamana Devi Temple by Cable Car. After puja/darshan, continue driving to Pokhara. Overnight in Pokhara Hotel."
      },
      {
        day: "Day 03",
        title: "Pokhara – Jomsom (Fly)",
        description: "After breakfast, fly to Jomsom (about 20 mins). Arrive at Jomsom Airport. Transfer to Hotel. Drive to Muktinath by Jeep (about 20 km, 1 hr drive). Take off from Jeep and walk up (30/40 mins) to Muktinath Temple. Arrive in Temple. Muktinath is the God of Salvation. It holds great significance for all spiritual people in the south Asian subcontinent. Have darshan and worship, walk back to Jeep station and drive back to Jomsom. Overnight in Jomsom Hotel."
      },
      {
        day: "Day 04",
        title: "Jomsom – Pokhara",
        description: "Fly back to Pokhara. Arrive in Pokhara. Transfer to Hotel. Visit, Devis fall, Gupteshwor Cave, and Boating on Fewa Lake visit Taal Barahi Temple. The rest of the day is free. Overnight in Pokhara Hotel."
      },
      {
        day: "Day 05",
        title: "Pokhara (fly) Kathmandu",
        description: "Upon arrival from Pokhara. Kathmandu Sightseeing: Jalnarayan temple, Boudhanath Stupa, Swoyambhunath & Pashupatinath. Overnight in Kathmandu Hotel."
      },
      {
        day: "Day 06",
        title: "Departure",
        description: "After breakfast, Free until departure. Later on time, transfer to Airport for onward destination."
      }
    ]
  },
  {
    id: 4, // Nepal Highlights: Pokhara & Kathmandu
    overview: [
      `Nepal 04 Nights 05 days. Transport: AC Coach. Pickup Point: Gorakhpur. Places Covered: Pokhara & Kathmandu. Duration: 04 Nights / 05 Days. Note: All hotels are subject to availability / Cost is subject to change.`
    ],
    include: [
      "04 Nights' accommodation at Respective Hotel on a bed breakfast basic",
      "Arrival and departure transfer and sightseeing tours by Private AC vehicle",
      "All sightseeing tours as per itinerary",
      "English speaking guide during sightseeing tours",
      "All applicable taxes and service charges"
    ],
    exclude: [
      "Any meal not mentioned on the above program during the tour",
      "Any entry fees during sightseeing",
      "Insurance Fee",
      "Monuments entrance fees as mentioned in the program & any payable fee on the spot",
      "Personal expenses and tips",
      "Costs related to unforeseen circumstances like roadblocks, bad weather, etc.",
      "Any other expenses not mentioned in the inclusions"
    ],
    plan: [
      {
        day: "Day 01",
        title: "Arrival – Drive to Pokhara",
        description: "Arrival at Gorakhpur station then drive to Pokhara. Upon arrival at the hotel, welcome drinks and check-in. Evening for leisure. Overnight stay at Pokhara."
      },
      {
        day: "Day 02",
        title: "Pokhara local Sightseeing",
        description: "Morning breakfast, proceed for sightseeing at following places: Bindhyabashini temple, Barahi temple, Seti river, Devi's fall, Gupteshwor cave. After finishing sightseeing in Pokhara. One can self-explore the markets of Pokhara or enjoy the walk in the evening at the lakeside. Overnight stay at Pokhara.",
        highlights: [
          "Visit to Bindhyabashini temple",
          "Explore Barahi temple",
          "See the remarkable Seti river gorge",
          "Experience Devi's fall",
          "Discover Gupteshwor cave"
        ]
      },
      {
        day: "Day 03",
        title: "Drive to Kathmandu via Manakamana temple",
        description: "Breakfast then check-out from hotel and drive to Kathmandu via Manakamana temple. After puja and darshan then continue your journey to Kathmandu. Upon arrival at the hotel, welcome drinks and check-in. Evening for leisure. Overnight stay at Kathmandu."
      },
      {
        day: "Day 04",
        title: "Kathmandu local sightseeing",
        description: "After breakfast, proceed for sightseeing at following places: Pashupatinath Temple (Which belongs to Lord Shiva), Bouddhanath Stupa (Buddhist Monastery), Budhanilkantha (Jal Narayan), Swayambhunath Stupa (monkey temple). After sightseeing, drive back to the hotel. Overnight stay at Kathmandu.",
        highlights: [
          "Visit sacred Pashupatinath Temple",
          "Explore the magnificent Bouddhanath Stupa",
          "See the reclining Vishnu at Budhanilkantha",
          "Visit the ancient Swayambhunath Stupa"
        ]
      },
      {
        day: "Day 05",
        title: "Departure",
        description: "After breakfast, checkout from the hotel and drive Gorakhpur for your onward destination."
      }
    ]
  },
  {
    id: 5, // Spiritual Nepal: Lumbini to Kathmandu
    overview: [
      `Nepal 05 Nights 06 days. Transport: AC Coach. Pickup Point: Gorakhpur. Places Covered: Pokhara, Kathmandu & Lumbini. Duration: 05 Nights / 06 Days. Note: All hotels are subject to availability / Cost is subject to change.`
    ],
    include: [
      "05 Nights' accommodation at Respective Hotel on a bed breakfast basic",
      "All transfers and sightseeing by AC vehicle",
      "English speaking guide during sightseeing",
      "All applicable taxes and service charges"
    ],
    exclude: [
      "Any meal not mentioned in the program",
      "Entry fees to monuments and temples",
      "Insurance Fee",
      "Personal expenses and tips",
      "Optional activities",
      "Any service not mentioned in the inclusions"
    ],
    plan: [
      {
        day: "Day 01",
        title: "Arrival – Drive to Pokhara",
        description: "Arrival at Gorakhpur station then drive to Pokhara. Upon arrival at the hotel, welcome drinks and check-in. Evening for leisure. Overnight stay at Pokhara."
      },
      {
        day: "Day 02",
        title: "Pokhara Sightseeing",
        description: "Breakfast, proceed for sightseeing covering Devis falls, Gupteshwor Mahadev Cave, Barahi temple, Bindvasini temple and Seti George. Later, drive to the hotel. Rest of the day will be free on your own. Overnight stay at Pokhara.",
        highlights: [
          "Visit spectacular Devi's Falls",
          "Explore mysterious Gupteshwor Cave",
          "Visit sacred Barahi Temple",
          "See the remarkable Seti Gorge"
        ]
      },
      {
        day: "Day 03",
        title: "Drive to Kathmandu via Manakamana Temple",
        description: "After breakfast, check out from the hotel and drive to Kathmandu via Manakamana temple (If time permits). Upon arrival at the hotel, welcome drinks and check-in. Rest of the day will be on your own. Overnight stay at Kathmandu."
      },
      {
        day: "Day 04",
        title: "Kathmandu Sightseeing",
        description: "After breakfast, embark for sightseeing by covering Pashupatinath temple, Kathmandu Durbar Square, Taleju Bhawani Temple, Budanilkantha Temple and Swayabhunath stupa (where you have to climb 360 stone steps). Back to the hotel. Evening for leisure. Overnight stay at Kathmandu."
      },
      {
        day: "Day 05",
        title: "Drive to Lumbini",
        description: "Breakfast, check-out from the hotel and Drive to Lumbini. Upon arrival at the hotel, welcome drinks and check-in. Rest will be on your own. Overnight stay at Lumbini."
      },
      {
        day: "Day 06",
        title: "Lumbini sightseeing - Departure",
        description: "After breakfast, check out from the hotel drive to Lumbini sightseeing. After sightseeing continue drive to Gorakhpur to board for onward destination."
      }
    ]
  },
  {
    id: 6, // Nature & Culture: Chitwan Safari Experience
    overview: [
      `Nepal 07 Nights 08 days. Transport: AC Coach. Pickup Point: Gorakhpur. Places Covered: Pokhara, Kathmandu & Chitwan National Park. Duration: 07 Nights / 08 Days. Note: All hotels are subject to availability / Cost is subject to change.`
    ],
    include: [
      "07 Nights' accommodation at Respective Hotel on a bed breakfast basic",
      "All transfers and sightseeing by AC vehicle",
      "English speaking guide during sightseeing",
      "All jungle activities in Chitwan",
      "Full board meals in Chitwan (Breakfast, Lunch & Dinner)",
      "All applicable taxes and service charges"
    ],
    exclude: [
      "Any meal not mentioned in the program",
      "Entry fees to monuments and temples",
      "Insurance Fee",
      "Personal expenses and tips",
      "Optional activities not mentioned in the program",
      "Any service not mentioned in the inclusions"
    ],
    plan: [
      {
        day: "Day 01",
        title: "Arrival – Drive to Pokhara",
        description: "Arrival at Gorakhpur Station then drive to Pokhara. Upon arrival at the hotel, welcome drinks and check-in. Overnight stay at Pokhara."
      },
      {
        day: "Day 02",
        title: "Drive to Muktinath",
        description: "Morning breakfast, check-out from the hotel and drive to Jomsom. Upon arrival at the hotel, welcome drinks and check-in. Rest of the day will be on your own. Overnight stay at Jomsom."
      },
      {
        day: "Day 03",
        title: "Muktinath Temple – Drive to Pokhara",
        description: "Early morning visit to Muktinath temple. Later back to the hotel. Breakfast, check out from the hotel and drive to Pokhara. Upon arrival at the hotel, welcome drinks and check-in. Rest of the day will be on your own. Overnight stay at Pokhara."
      },
      {
        day: "Day 04",
        title: "Pokhara Sightseeing",
        description: "Breakfast, proceed for sightseeing covering Devis falls, Gupteshwor Mahadev Cave, Barahi temple, Bindvasini temple and Seti George. Later, drive to the hotel. Rest of the day will be free on your own. Overnight stay at Pokhara."
      },
      {
        day: "Day 05",
        title: "Drive to Kathmandu",
        description: "After breakfast, check out from the hotel and drive to Kathmandu via Manakamana temple (If time permits). Upon arrival at the hotel, welcome drinks and check-in. Rest of the day will be on your own. Overnight stay at Kathmandu."
      },
      {
        day: "Day 06",
        title: "Kathmandu Sightseeing",
        description: "After breakfast, embark for sightseeing by covering Pashupatinath temple, Kathmandu Durbar Square, Taleju Bhawani Temple, Budanilkantha Temple and Swayabhunath stupa. Back to the hotel. Evening for leisure. Overnight stay at Kathmandu."
      },
      {
        day: "Day 07",
        title: "Drive to Chitwan",
        description: "Breakfast, check-out from the hotel and drive to Chitwan National Park. Upon arrival at the hotel, welcome drinks and check-in. Rest of the day will be free for relaxation. Overnight stay at Chitwan."
      },
      {
        day: "Day 08",
        title: "Jeep Safari - Departure",
        description: "Early morning jeep safari in Chitwan National Park to spot wildlife including the endangered one-horned rhinoceros and Royal Bengal tiger. After breakfast, check out from the hotel and drive to Gorakhpur for your onward destination."
      }
    ]
  },
  {
    id: 7, // Heritage Trail: Lumbini & Kathmandu
    overview: [
      `Nepal 04 Nights 05 days. Transport: AC Coach. Pickup Point: Gorakhpur. Places Covered: Lumbini, Pokhara & Kathmandu. Duration: 04 Nights / 05 Days. Note: All hotels are subject to availability / Cost is subject to change.`
    ],
    include: [
      "04 Nights' accommodation at Respective Hotel on a bed breakfast basic",
      "All transfers and sightseeing by AC vehicle",
      "English speaking guide during sightseeing",
      "All applicable taxes and service charges"
    ],
    exclude: [
      "Any meal not mentioned in the program",
      "Entry fees to monuments and temples",
      "Insurance Fee",
      "Personal expenses and tips",
      "Optional activities",
      "Any service not mentioned in the inclusions"
    ],
    plan: [
      {
        day: "Day 01",
        title: "Arrival – Drive to Lumbini",
        description: "Arrival at Gorakhpur, then drive to Lumbini - the birthplace of Lord Buddha. Upon arrival at the hotel, welcome drinks and check-in. Evening visit to Maya Devi Temple and the Sacred Garden. Overnight stay at Lumbini."
      },
      {
        day: "Day 02",
        title: "Lumbini Sightseeing - Drive to Pokhara",
        description: "After breakfast, visit different monasteries built by various Buddhist countries. After sightseeing, drive to Pokhara. Upon arrival at the hotel, welcome drinks and check-in. Evening free for leisure. Overnight stay at Pokhara.",
        highlights: [
          "Visit Buddhist monasteries from different countries",
          "Experience the peace and tranquility of Lumbini",
          "Scenic drive to Pokhara"
        ]
      },
      {
        day: "Day 03",
        title: "Pokhara Sightseeing",
        description: "Breakfast, proceed for sightseeing covering Devis falls, Gupteshwor Mahadev Cave, Barahi temple, Bindvasini temple and Seti George. Later, drive to the hotel. Evening free to explore the lakeside area. Overnight stay at Pokhara."
      },
      {
        day: "Day 04",
        title: "Drive to Kathmandu",
        description: "After breakfast, check out from the hotel and drive to Kathmandu. Upon arrival at the hotel, welcome drinks and check-in. Afternoon visit to Kathmandu Durbar Square. Overnight stay at Kathmandu."
      },
      {
        day: "Day 05",
        title: "Kathmandu Sightseeing - Departure",
        description: "After breakfast, visit Pashupatinath Temple, Bouddhanath Stupa and Swayambhunath. After sightseeing, drive to Gorakhpur for your onward journey."
      }
    ]
  },
  {
    id: 8, // Pilgrimage to Muktinath Temple
    overview: [
      `Nepal 04 Nights 05 days. Transport: AC Coach. Pickup Point: Kathmandu. Places Covered: Kathmandu, Pokhara & Muktinath. Duration: 04 Nights / 05 Days. Note: All flights and hotels are subject to availability / Cost is subject to change.`
    ],
    include: [
      "04 Nights' accommodation at Respective Hotel on a bed breakfast basic",
      "Arrival and departure transfer and sightseeing tours Private A/C Vehicle",
      "Air tickets for Pokhara-Jomsom-Pokhara",
      "Jomsom – Muktinath – Jomsom by jeep sharing basis",
      "ACAP permit fee",
      "All current government taxes as applicable"
    ],
    exclude: [
      "Any meal not mentioned on the above program during the tour",
      "Any entry fees during sightseeing",
      "Insurance Fee",
      "Monuments entrance fees as mentioned in the program & any payable fee on the spot",
      "Personal expenses and tips",
      "Cost arising out of flight cancellation/road blockades/landslides",
      "Any other expenses not mentioned in the inclusions"
    ],
    plan: [
      {
        day: "Day 01",
        title: "Arrival – Kathmandu",
        description: "Upon arrival at Kathmandu Airport, you will be greeted and assisted by our Representative. After completing your custom formalities, transfer to Hotel for check-in. Evening visit Bouddhanath Stupa. Overnight in Kathmandu Hotel."
      },
      {
        day: "Day 02",
        title: "Kathmandu – Pokhara",
        description: "After breakfast, drive to Pokhara (about 210 km, 6/7 hrs drive). En-route, visit Manakamana Devi Temple by Cable Car. After puja/darshan, continue driving to Pokhara. Overnight in Pokhara Hotel."
      },
      {
        day: "Day 03",
        title: "Pokhara – Jomsom – Muktinath – Jomsom",
        description: "Early morning, fly to Jomsom (about 20 mins). Arrive at Jomsom. Drive to Muktinath by Jeep (about 20 km, 1 hr drive). Take off from Jeep and walk up (30/40 mins) to Muktinath Temple. Muktinath is the God of Salvation. It holds great significance for all spiritual people in the south Asian subcontinent. Have darshan and worship, walk back to Jeep station and drive back to Jomsom. Overnight in Jomsom Hotel.",
        highlights: [
          "Scenic flight over the Himalayas to Jomsom",
          "Jeep drive through breathtaking mountain landscapes",
          "Visit to the sacred Muktinath Temple",
          "Experience the 108 water spouts"
        ]
      },
      {
        day: "Day 04",
        title: "Jomsom – Pokhara – Kathmandu",
        description: "Morning flight back to Pokhara. Upon arrival, sightseeing of Pokhara including Devi's Fall, Gupteshwor Cave, and Phewa Lake. Afternoon drive back to Kathmandu. Overnight stay at Kathmandu."
      },
      {
        day: "Day 05",
        title: "Departure",
        description: "After breakfast, visit Pashupatinath Temple if time permits. Later, transfer to Airport for onward destination."
      }
    ]
  },
  {
    id: 9, // Adventure Nepal: Jungle Safari & Temples
    overview: [
      `Nepal 07 Nights 08 days. Transport: AC Coach. Pickup Point: Gorakhpur. Places Covered: Pokhara, Kathmandu & Chitwan National Park. Duration: 07 Nights / 08 Days. Note: All hotels are subject to availability / Cost is subject to change.`
    ],
    include: [
      "07 Nights' accommodation at Respective Hotel on a bed breakfast basic",
      "All transfers and sightseeing by AC vehicle",
      "English speaking guide during sightseeing",
      "All jungle activities in Chitwan",
      "Full board meals in Chitwan (Breakfast, Lunch & Dinner)",
      "All applicable taxes and service charges"
    ],
    exclude: [
      "Any meal not mentioned in the program (except in Chitwan)",
      "Entry fees to monuments and temples",
      "Insurance Fee",
      "Personal expenses and tips",
      "Optional activities not mentioned in the program",
      "Any service not mentioned in the inclusions"
    ],
    plan: [
      {
        day: "Day 01",
        title: "Arrival – Drive to Pokhara",
        description: "Arrival at Gorakhpur Station then drive to Pokhara. Upon arrival at the hotel welcome with soft drink and check-in. Overnight stay at Pokhara."
      },
      {
        day: "Day 02",
        title: "Pokhara local sightseeing",
        description: "After breakfast then drive to local sightseeing of following places in Pokhara: Bindebashini temple, Barahi temple, Seti river, Devi's fall, Mahendra cave. After sightseeing drive back to hotel. Overnight stay at hotel."
      },
      {
        day: "Day 03",
        title: "Local sightseeing",
        description: "After breakfast proceed for Pumdikot (Tallest Mahadev Statue) and Peace Pagoda sightseeing. After sightseeing drive back to hotel. Over night stay at Pokhara.",
        highlights: [
          "Visit the impressive Shiva statue at Pumdikot",
          "Enjoy panoramic views from World Peace Pagoda",
          "See the beautiful Phewa Lake from above"
        ]
      },
      {
        day: "Day 04",
        title: "Drive to Kathmandu",
        description: "Morning after breakfast check out from the hotel and drive to Kathmandu via Manakamana darshan. Welcome with soft drink and check-in. Overnight stay at Kathmandu."
      },
      {
        day: "Day 05",
        title: "Kathmandu local sightseeing",
        description: "After breakfast ready to go for local sightseeing of following places in Kathmandu: Pashupatinath temple, Budanilkantha temple (JAL NARAYAN), Swayabhunath temple (MONKEY TEMPLE). After sightseeing, drive back to the hotel. Overnight stay at the hotel."
      },
      {
        day: "Day 06",
        title: "Chandragiri Hills sightseeing",
        description: "After breakfast, proceed for Chandragiri sightseeing one of the most beautiful place from where you can explore the beauty of nature, hills, mountains and valley and visit Bhaleshwor Mahadev Temple. After mesmerizing sightseeing drive back to the hotel. Rest of day will be free of own activities. Overnight stay at Kathmandu."
      },
      {
        day: "Day 07",
        title: "Drive to Chitwan",
        description: "After breakfast check out from the hotel then drive to Chitwan. Upon arrival at the hotel, welcome with soft drinks and check-in. Rest of the day will be free for own activities. Overnight stay at a hotel in Chitwan."
      },
      {
        day: "Day 08",
        title: "Jungle Safari & Departure",
        description: "After breakfast proceed for Jungle Safari such as - Elephant/Jeep safari, Elephant Breeding Center Visit, Canoeing, bird watching, Tharu cultural program, village tour, Tharu village walk. After safari activities, drive to Gorakhpur for your onward destination."
      }
    ]
  },
  {
    id: 10, // Buddhist Circuit: Lumbini & Beyond
    overview: [
      `Nepal 04 Nights 05 days. Transport: AC Coach. Pickup Point: Gorakhpur. Places Covered: Lumbini, Kathmandu & Pokhara. Duration: 04 Nights / 05 Days. Note: All hotels are subject to availability / Cost is subject to change.`
    ],
    include: [
      "04 Nights' accommodation at Respective Hotel on a bed breakfast basic",
      "All transfers and sightseeing by AC vehicle",
      "English speaking guide during sightseeing",
      "All applicable taxes and service charges"
    ],
    exclude: [
      "Any meal not mentioned in the program",
      "Entry fees to monuments and temples",
      "Insurance Fee",
      "Personal expenses and tips",
      "Optional activities",
      "Any service not mentioned in the inclusions"
    ],
    plan: [
      {
        day: "Day 01",
        title: "Arrival – Drive to Lumbini",
        description: "Arrival at Gorakhpur and drive to Lumbini - the birthplace of Lord Buddha. Upon arrival, check-in at the hotel. Evening visit to Maya Devi Temple and the Sacred Garden. Overnight stay at Lumbini."
      },
      {
        day: "Day 02",
        title: "Lumbini Sightseeing",
        description: "After breakfast, full day exploration of Lumbini including different monasteries built by various Buddhist countries, Puskarini Pond where Buddha's mother took a dip before his birth, and the Ashoka Pillar. Evening leisure time. Overnight stay at Lumbini.",
        highlights: [
          "Visit Maya Devi Temple - birthplace of Buddha",
          "Explore monasteries from different Buddhist countries",
          "See the sacred Ashoka Pillar",
          "Experience the peace of the Sacred Garden"
        ]
      },
      {
        day: "Day 03",
        title: "Drive to Pokhara",
        description: "After breakfast, drive to Pokhara. Upon arrival, check-in at the hotel. Evening boat ride on Phewa Lake with visit to Tal Barahi Temple. Overnight stay at Pokhara."
      },
      {
        day: "Day 04",
        title: "Drive to Kathmandu",
        description: "After breakfast, check out from the hotel and drive to Kathmandu. Upon arrival, check-in at the hotel. Afternoon visit to Bouddhanath Stupa - one of the largest Buddhist stupas in the world. Overnight stay at Kathmandu."
      },
      {
        day: "Day 05",
        title: "Departure",
        description: "After breakfast, visit Swayambhunath Stupa (Monkey Temple) - another important Buddhist pilgrimage site. Later, drive to Gorakhpur for your onward journey."
      }
    ]
  },
  {
    id: 11, // Essence of Nepal: Pokhara & Kathmandu
    overview: [
      `Nepal 05 Nights 06 days. Transport: AC Coach. Pickup Point: Gorakhpur. Places Covered: Pokhara & Kathmandu. Duration: 05 Nights / 06 Days. Note: All hotels are subject to availability / Cost is subject to change.`
    ],
    include: [
      "05 Nights' accommodation at Respective Hotel on a bed breakfast basic",
      "All transfers and sightseeing by AC vehicle",
      "English speaking guide during sightseeing",
      "All applicable taxes and service charges"
    ],
    exclude: [
      "Any meal not mentioned in the program",
      "Entry fees to monuments and temples",
      "Insurance Fee",
      "Personal expenses and tips",
      "Optional activities",
      "Any service not mentioned in the inclusions"
    ],
    plan: [
      {
        day: "Day 01",
        title: "Arrival – Drive to Pokhara",
        description: "Pickup from Gorakhpur then drive to Pokhara. Upon arrival at the hotel welcome with soft drink and check-in. Overnight stay at Pokhara."
      },
      {
        day: "Day 02",
        title: "Pokhara sightseeing",
        description: "After breakfast ready to go for local sightseeing of following places in Pokhara: Bindabashini temple, Barahi temple, Seti river, Devi's fall, Mahendra cave. After sightseeing drive back to hotel. Overnight stay at Pokhara.",
        highlights: [
          "Visit the sacred Bindabashini Temple",
          "Explore Barahi Temple on Phewa Lake",
          "Witness the unique Seti River gorge",
          "Experience the magnificent Devi's Fall",
          "Discover the mysterious Mahendra Cave"
        ]
      },
      {
        day: "Day 03",
        title: "Pokhara leisure day",
        description: "Day free for leisure activities in Pokhara. Optional activities include paragliding, ultralight flight, zip-lining or simply relaxing by the lake. Overnight stay at Pokhara."
      },
      {
        day: "Day 04",
        title: "Drive to Kathmandu",
        description: "After breakfast then check out from hotel and drive to Kathmandu via Manakamana darshan. Welcome soft drink and check-in. overnight stay at Kathmandu."
      },
      {
        day: "Day 05",
        title: "Kathmandu Sightseeing",
        description: "After breakfast proceed for sightseeing at the following places: Pashupatinath Temple (Which belongs to Lord Shiva), Budanilkantha (Jal Narayan), Swayabhunath Stupa (monkey temple). After sightseeing drive back to the hotel. Overnight stay at a hotel in Kathmandu."
      },
      {
        day: "Day 06",
        title: "Departure",
        description: "After breakfast check out hotel then drive to Gorakhpur board for onward destination."
      }
    ]
  },
  {
    id: 12, // Divine Muktinath Yatra
    overview: [
      `Nepal 05 Nights 06 days. Transport: AC Coach. Pickup Point: Ex:Kathmandu. Places Covered: Kathmandu, Pokhara & Muktinath. Duration: 05 Nights / 06 Days. Note: All flights and hotels are subject to availability / Cost is subject to change.`
    ],
    include: [
      "05 Nights' accommodation at Respective Hotel on a bed breakfast basic",
      "Arrival and departure transfer and sightseeing tours Private A/C Vehicle",
      "Air tickets for Pokhara-Jomsom-Pokhara",
      "Jomsom – Muktinath – Jomsom by jeep sharing basis",
      "ACAP permit fee",
      "All current government taxes as applicable"
    ],
    exclude: [
      "Any meal not mentioned on the above program during the tour",
      "Any entry fees during sightseeing",
      "Insurance Fee",
      "Monuments entrance fees & any payable fee on the spot",
      "Personal expenses and tips",
      "Cost arising out of flight cancellation/road blockades/landslides",
      "Any other expenses not mentioned in the inclusions"
    ],
    plan: [
      {
        day: "Day 01",
        title: "Arrival – Kathmandu",
        description: "Upon arrival at Kathmandu Airport, you will be greeted and assisted by our Representative. Transfer to Hotel for check-in. Evening visit to Pashupatinath Temple for evening aarti. Overnight in Kathmandu Hotel."
      },
      {
        day: "Day 02",
        title: "Kathmandu Sightseeing",
        description: "After breakfast, full day Kathmandu sightseeing including Pashupatinath Temple, Bouddhanath Stupa, Budhanilkantha (Jal Narayan) and Swayambhunath. Evening free for shopping and leisure. Overnight stay at Kathmandu.",
        highlights: [
          "Visit the sacred Pashupatinath Temple complex",
          "Explore the magnificent Bouddhanath Stupa",
          "See the reclining Vishnu at Budhanilkantha",
          "Visit ancient Swayambhunath Stupa"
        ]
      },
      {
        day: "Day 03",
        title: "Kathmandu – Pokhara",
        description: "After breakfast, drive to Pokhara (about 210 km, 6/7 hrs drive). En-route, visit Manakamana Devi Temple by Cable Car. Upon arrival in Pokhara, check-in at the hotel. Evening boat ride on Phewa Lake. Overnight in Pokhara Hotel."
      },
      {
        day: "Day 04",
        title: "Pokhara – Jomsom – Muktinath – Jomsom",
        description: "Early morning, fly to Jomsom (about 20 mins). Drive to Muktinath by Jeep (about 20 km, 1 hr drive). Walk up (30/40 mins) to Muktinath Temple. Perform puja and darshan at this sacred site of salvation. After darshan, walk back to Jeep station and drive back to Jomsom. Overnight in Jomsom Hotel."
      },
      {
        day: "Day 05",
        title: "Jomsom – Pokhara – Kathmandu",
        description: "Fly back to Pokhara. Upon arrival, sightseeing of Pokhara including Devi's Fall, Gupteshwor Cave, Bindabasini Temple, and Seti Gorge. Evening flight to Kathmandu. Overnight stay at Kathmandu."
      },
      {
        day: "Day 06",
        title: "Departure",
        description: "After breakfast, free time until departure. Transfer to Airport for onward destination."
      }
    ]
  },
  
];
import { ITourDataType } from "@/interFace/interFace";
import tourImgOne from "../../public/assets/images/tour/Top Trending Packages 01.png";
import tourImgTwo from "../../public/assets/images/tour/Top Trending Packages 02.png";
import tourImgThree from "../../public/assets/images/tour/Top Trending Packages 03.png";
import tourImgFour from "../../public/assets/images/tour/tour-img-4.png";
import tourImgFive from "../../public/assets/images/tour/tour-img-5.png";
import tourImgSix from "../../public/assets/images/tour/tour-img-6.png";
import tourImgSeven from "../../public/assets/images/tour/tour-img-7.png";
import tourImgEight from "../../public/assets/images/tour/tour-img-8.png";
import tourImgNine from "../../public/assets/images/tour/tour-img-9.png";
import tourImgTen from "../../public/assets/images/tour/tour-img-10.png";
import tourImgEleven from "../../public/assets/images/tour/tour-img-11.png";
import tourImgTwelve from "../../public/assets/images/tour/tour-img-12.png";
import tourImgThirteen from "../../public/assets/images/tour/tour-img-13.png";
import tourImgFourTeen from "../../public/assets/images/tour/tour-img-14.png";
import tourImgFifteen from "../../public/assets/images/tour/tour-img-15.png";
import tourImgSixteen from "../../public/assets/images/tour/tour-img-16.png";
import tourImgSeventeen from "../../public/assets/images/tour/tour-img-17.png";
import tourImgEighteen from "../../public/assets/images/tour/tour-img-18.png";
import tourImgNineTeen from "../../public/assets/images/tour/tour-img-19.png";
import tourImgTwenty from "../../public/assets/images/tour/tour-img-20.png";
import tourImgTwentyOne from "../../public/assets/images/tour/tour-img-21.png";
import tourImgTwentyFive from "../../public/assets/images/tour/tour-img-25.png";
import tourImgTwentySix from "../../public/assets/images/tour/tour-img-26.png";
import tourImgTwentySeven from "../../public/assets/images/tour/tour-img-27.png";
import tourImgTwentyEight from "../../public/assets/images/tour/tour-img-28.png";

// export const tourData: ITourDataType[] = [
//   //home one tour start and
//   {
//     id: 1,
//     img: tourImgOne,
//     tourLocation: "Kathmandu - Muktinath",
//     tourRating: "4.8",
//     tourRatingCount: 150,
//     tourTitle: "Sacred Journey to Muktinath",
//     tourPrice: 999.0,
//     days: "6",
//     tourDuration: "5 Nights 6 Days",
//   },
//   {
//     id: 2,
//     img: tourImgTwo,
//     tourLocation: "Paris, France",
//     tourRating: "5",
//     tourRatingCount: 313,
//     tourTitle: "Tropical Paradise Retreat: Sun, Sand, Serenity",
//     tourPrice: 1825.0,
//     days: "3",
//     tourDuration: "3 Days 2 Nigh",
//   },
//   {
//     id: 3,
//     img: tourImgThree,
//     tourLocation: "London, UK",
//     tourRating: "4.8",
//     tourRatingCount: 96,
//     tourTitle: "Safari Expedition: Wildlife Encounters in Africa",
//     tourPrice: 1892.0,
//     days: "10",
//     tourDuration: "3 Days 2 Nigh",
//   },
//   {
//     id: 4,
//     img: tourImgFour,
//     tourLocation: "Lisbon, Portugal",
//     tourRating: "4.6",
//     tourRatingCount: 20,
//     tourTitle: "Asian Discovery: Temples, Traditions, Tastings",
//     tourPrice: 2292.0,
//     days: "15",
//     tourDuration: "3 Days 2 Nigh",
//   },
//   {
//     id: 5,
//     img: tourImgFive,
//     tourLocation: "Istanbul, Turkey",
//     tourRating: "5",
//     tourRatingCount: 420,
//     tourTitle: "Northern Lights Escape: Arctic Wonders Await",
//     tourPrice: 1395.0,
//     days: "10",
//     tourDuration: "3 Days 2 Nigh",
//   },
//   {
//     id: 6,
//     img: tourImgSix,
//     tourLocation: "Matera, Italy",
//     tourRating: "4.8",
//     tourRatingCount: 120,
//     tourTitle: "Mystical Journey Through Ancient Civilizations",
//     tourPrice: 1395.0,
//     days: "10",
//     tourDuration: "3 Days 2 Nigh",
//   },
//   //home one tour end

//   //home two tour start
//   {
//     id: 7,
//     img: tourImgFive,
//     tourLocation: "Capetown, RSA",
//     tourRating: "4.8",
//     tourRatingCount: 313,
//     tourTitle: "Island Hopping in the Caribbean: Sun & Sea",
//     tourPrice: 18925.0,
//     days: "4",
//     tourDuration: "3 Days 2 Nigh",
//   },
//   {
//     id: 8,
//     img: tourImgSix,
//     tourLocation: "Bali, Indonesia",
//     tourRating: "5",
//     tourRatingCount: 313,
//     tourTitle: "Trekking the Inca Trail: Ancient Ruins Await",
//     tourPrice: 1985.0,
//     days: "10",
//     tourDuration: "3 Days 2 Nigh",
//   },
//   {
//     id: 9,
//     img: tourImgSeven,
//     tourLocation: "Sara, Africa",
//     tourRating: "4.8",
//     tourRatingCount: 150,
//     tourTitle: "Safari Expedition: Wildlife Encounters in Africa",
//     tourPrice: 1999.0,
//     days: "6",
//     tourDuration: "3 Days 2 Nigh",
//   },
//   {
//     id: 10,
//     img: tourImgFour,
//     tourLocation: "Delhi, India",
//     tourRating: "4.9",
//     tourRatingCount: 255,
//     tourTitle: "Asian Discovery: Temples, Traditions, Tastings",
//     tourPrice: 18925.0,
//     days: "4",
//     tourDuration: "3 Days 2 Nigh",
//   },
//   {
//     id: 11,
//     img: tourImgEight,
//     tourLocation: "Matera, Italy",
//     tourRating: "4.8",
//     tourRatingCount: 158,
//     tourTitle: "Northern Lights Escape: Arctic Wonders Await",
//     tourPrice: 12125.0,
//     days: "10",
//     tourDuration: "3 Days 2 Nigh",
//   },
//   {
//     id: 12,
//     img: tourImgNine,
//     tourLocation: "Cordoba, Spain",
//     tourRating: "4.6",
//     tourRatingCount: 20,
//     tourTitle: "Mystical Journey Through Ancient Civilizations",
//     tourPrice: 1799.0,
//     days: "8",
//     tourDuration: "3 Days 2 Nigh",
//   },
//   {
//     id: 13,
//     img: tourImgTen,
//     tourLocation: "Kathmandu, Nepal",
//     tourRating: "4.8",
//     tourRatingCount: 360,
//     tourTitle: "Grand Canyon Explorer: Nature's Majestic Beauty",
//     tourPrice: 1799.0,
//     days: "7",
//     tourDuration: "3 Days 2 Nigh",
//   },
//   {
//     id: 14,
//     img: tourImgEleven,
//     tourLocation: "Shenzhen, China",
//     tourRating: "5",
//     tourRatingCount: 313,
//     tourTitle: "Trekking the Inca Trail: Ancient Ruins Await",
//     tourPrice: 1695.0,
//     days: "8",
//     tourDuration: "3 Days 2 Nigh",
//   },
//   //home two tour end
//   //home three tour start
//   {
//     id: 15,
//     img: tourImgOne,
//     tourLocation: "Matera, Italy",
//     tourRating: "4.4",
//     tourRatingCount: 1011,
//     tourTitle: "Island Hopping in the Caribbean: Sun & Sea",
//     tourPrice: 1925.0,
//     days: "6",
//     tourDuration: "3 Days 2 Nigh",
//   },
//   {
//     id: 16,
//     img: tourImgTwo,
//     tourLocation: "Paris, France",
//     tourRating: "4",
//     tourRatingCount: 313,
//     tourTitle: "Tropical Paradise Retreat: Sun, Sand, Serenity",
//     tourPrice: 1825.0,
//     days: "3",
//     tourDuration: "3 Days 2 Nigh",
//   },
//   {
//     id: 17,
//     img: tourImgThree,
//     tourLocation: "London, UK",
//     tourRating: "4.8",
//     tourRatingCount: 2156,
//     tourTitle: "Safari Expedition: Wildlife Encounters in Africa",
//     tourPrice: 1892.0,
//     days: "10",
//     tourDuration: "3 Days 2 Nigh",
//   },
//   {
//     id: 18,
//     img: tourImgFour,
//     tourLocation: "Lisbon, Portugal",
//     tourRating: "3.5",
//     tourRatingCount: 1313,
//     tourTitle: "Asian Discovery: Temples, Traditions, Tastings",
//     tourPrice: 2292.0,
//     days: "15",
//     tourDuration: "3 Days 2 Nigh",
//   },
//   {
//     id: 19,
//     img: tourImgFive,
//     tourLocation: "Istanbul, Turkey",
//     tourRating: "5",
//     tourRatingCount: 515,
//     tourTitle: "Northern Lights Escape: Arctic Wonders Await",
//     tourPrice: 1395.0,
//     days: "10",
//     tourDuration: "3 Days 2 Nigh",
//   },
//   {
//     id: 20,
//     img: tourImgSix,
//     tourLocation: "Matera, Italy",
//     tourRating: "4.8",
//     tourRatingCount: 9131,
//     tourTitle: "Mystical Journey Through Ancient Civilizations",
//     tourPrice: 1395.0,
//     days: "10",
//     tourDuration: "3 Days 2 Nigh",
//   },
//   //home three tour end
//   //home four tour start
//   {
//     id: 21,
//     img: tourImgSixteen,
//     discount: "15",
//     tourLocation: "Galway, Ireland",
//     tourRating: "4.8",
//     tourRatingCount: 258,
//     tourTitle: "Cultural Odyssey Unveiling Heritage & Traditions",
//     currentPrice: "14,999",
//     oldPrice: "18,900",
//     tourPrice: 14520,
//     days: "4",
//     tourDuration: "3 Days 2 Nigh",
//   },
//   {
//     id: 22,
//     img: tourImgSeventeen,
//     discount: "15",
//     status: "Featured",
//     tourLocation: "Matera, Italy",
//     tourRating: "5",
//     tourRatingCount: 313,
//     tourTitle: "Mystical Trails Coastal Escapade Sun, Sand, and Serenity",
//     currentPrice: "14,999",
//     oldPrice: "19,900",
//     tourPrice: 15230,
//     days: "10",
//     tourDuration: "4 Days 3 Nigh",
//   },
//   {
//     id: 23,
//     img: tourImgEighteen,
//     status: "New",
//     tourLocation: "Brasov, Romania",
//     tourRating: "4.8",
//     tourRatingCount: 313,
//     tourTitle:
//       "Enchanted Island Escapade Epic Road Trip Discovering Hidden Gems",
//     currentPrice: "14,999",
//     tourPrice: 16820,
//     days: "9",
//     tourDuration: "3 Days 2 Nigh",
//   },
//   {
//     id: 24,
//     img: tourImgOne,
//     discount: "15",
//     tourLocation: "Matera, Italy",
//     tourRating: "4.8",
//     tourRatingCount: 158,
//     tourTitle: "Enchanted Island Escapades: Mystical",
//     currentPrice: "12,345",
//     oldPrice: "9,900",
//     tourPrice: 18520,
//     days: "5",
//     tourDuration: "3 Days 2 Nigh",
//   },
//   //home four tour end
//   //home five tour start in destination
//   {
//     id: 25,
//     img: tourImgTwentyFive,
//     tourLocation: "Matera, Italy",
//     tourTitle: "Island Hopping in the Caribbean: Sun & Sea",
//     fromPrice: "14,999",
//     tourPrice: 16584,
//     status: "Featured",
//     tourImage: [tourImgOne, tourImgTwo, tourImgThree, tourImgFour, tourImgFive],
//     tourDuration: "3 Days 2 Nigh",
//   },
//   {
//     id: 26,
//     img: tourImgTwentySix,
//     tourLocation: "Galway, Ireland",
//     tourTitle: "Grand Canyon Explorer: Nature's Majestic Beauty",
//     fromPrice: "19,999",
//     tourPrice: 14520,
//     discount: "25",
//     status: "Featured",
//     tourImage: [tourImgSix, tourImgSeven, tourImgEight],
//     tourDuration: "3 Days 2 Nigh",
//   },
//   {
//     id: 27,
//     img: tourImgTwentySeven,
//     tourLocation: "Brasov, Romania",
//     tourTitle: "Northern Lights Escape: Arctic Wonders Await",
//     fromPrice: "15,999",
//     tourPrice: 19870,
//     status: "Featured",
//     tourImage: [
//       tourImgNine,
//       tourImgTen,
//       tourImgEleven,
//       tourImgTwelve,
//       tourImgThirteen,
//       tourImgFourTeen,
//     ],
//     tourDuration: "3 Days 2 Nigh",
//   },
//   {
//     id: 28,
//     img: tourImgTwentyEight,
//     tourLocation: "Matera, Italy",
//     tourTitle: "Tropical Paradise Retreat: Sun, Sand, Serenity",
//     fromPrice: "16,999",
//     tourPrice: 24500,
//     status: "Featured",
//     tourImage: [
//       tourImgFifteen,
//       tourImgSixteen,
//       tourImgSeventeen,
//       tourImgEighteen,
//       tourImgNineTeen,
//       tourImgTwenty,
//       tourImgTwentyOne,
//     ],
//     tourDuration: "3 Days 2 Nigh",
//   },
//   //home five tour end in destination
//   //tour listing search data start
//   {
//     id: 29,
//     img: tourImgNine,
//     tourLocation: "Galway, Ireland",
//     tourRating: "4.8",
//     tourRatingCount: 320,
//     tourTitle: "Enchanted Island Escapades: Mystical",
//     tourPrice: 18925,
//     days: "4",
//     tourDuration: "3 Days 2 Nigh",
//   },
//   {
//     id: 30,
//     img: tourImgTen,
//     tourLocation: "Kathmandu, Nepal",
//     tourRating: "4.8",
//     tourRatingCount: 320,
//     tourTitle: "Everest Trekking Adventure Tour",
//     tourPrice: 17520,
//     days: "4",
//     tourDuration: "3 Days 2 Nigh",
//   },
//   {
//     id: 31,
//     img: tourImgEleven,
//     tourLocation: "Brasov, Romania",
//     tourRating: "4.8",
//     tourRatingCount: 320,
//     tourTitle: "Safari Serenity: Wild Encounters",
//     tourPrice: 14580,
//     days: "4",
//     tourDuration: "3 Days 2 Nigh",
//   },
//   {
//     id: 32,
//     img: tourImgTwelve,
//     tourLocation: "Oslo, Norway",
//     tourRating: "4.8",
//     tourRatingCount: 320,
//     tourTitle: "Family Fun Creating Memoirs Around",
//     tourPrice: 19350,
//     days: "4",
//     tourDuration: "3 Days 2 Nigh",
//   },
//   {
//     id: 33,
//     img: tourImgThirteen,
//     tourLocation: "London, UK",
//     tourRating: "4.8",
//     tourRatingCount: 320,
//     tourTitle: "Mystic Mayan Ruins: Ancient Wonders",
//     tourPrice: 20430,
//     days: "4",
//     tourDuration: "3 Days 2 Nigh",
//   },
//   {
//     id: 34,
//     img: tourImgFourTeen,
//     tourLocation: "Male, Maldives",
//     tourRating: "4.8",
//     tourRatingCount: 320,
//     tourTitle: "Alpine Adventure: Peaks and Valleys",
//     tourPrice: 20500,
//     days: "4",
//     tourDuration: "3 Days 2 Nigh",
//   },
//   {
//     id: 35,
//     img: tourImgFifteen,
//     tourLocation: "Rome, Italy",
//     tourRating: "4.8",
//     tourRatingCount: 320,
//     tourTitle: "Enchanted Island Escapades: Mystical",
//     tourPrice: 17800,
//     days: "4",
//     tourDuration: "3 Days 2 Nigh",
//   },
//   {
//     id: 36,
//     img: tourImgSixteen,
//     tourLocation: "Istanbul, Turkey",
//     tourRating: "4.8",
//     tourRatingCount: 320,
//     tourTitle: "Nature, Adventure, Exploration",
//     tourPrice: 17360,
//     days: "4",
//     tourDuration: "3 Days 2 Nigh",
//   },
//   {
//     id: 37,
//     img: tourImgSeventeen,
//     tourLocation: "Sydney, Australia",
//     tourRating: "4.8",
//     tourRatingCount: 320,
//     tourTitle: "Cruise to Paradise: Sun, Sea, Serenity",
//     tourPrice: 14857,
//     days: "4",
//     tourDuration: "3 Days 2 Nigh",
//   },
//   {
//     id: 38,
//     img: tourImgEighteen,
//     tourLocation: "Rio De Janerio, Brazil",
//     tourRating: "4.8",
//     tourRatingCount: 320,
//     tourTitle: "Tropical Tranquility: Sun, Sand, Sea",
//     tourPrice: 25410,
//     days: "4",
//     tourDuration: "3 Days 2 Nigh",
//   },
//   {
//     id: 39,
//     img: tourImgNineTeen,
//     tourLocation: "Moscow, Russia",
//     tourRating: "4.8",
//     tourRatingCount: 320,
//     tourTitle: "Island Idyll: Sun, Sea, Serenity",
//     tourPrice: 23600,
//     days: "4",

//     tourDuration: "3 Days 2 Nigh",
//   },
//   {
//     id: 40,
//     img: tourImgTwenty,
//     tourLocation: "Cairo, Egypt",
//     tourRating: "4.8",
//     tourRatingCount: 320,
//     tourTitle: "Jungle Safari: Wildlife, Flora, Fauna",
//     tourPrice: 36200,
//     days: "4",
//     tourDuration: "3 Days 2 Nigh",
//   },
//   //tour listing search data end
//   //tour details  data start
//   {
//     id: 41,
//     img: tourImgEleven,
//     tourLocation: "Matera, Italy",
//     tourRating: "4.8",
//     tourRatingCount: 320,
//     tourTitle: "City Explorer Icons, History, and Urban Charm",
//     tourPrice: 22000,
//     days: "4",
//     tourDuration: "3 Days 2 Nigh",
//   },
//   {
//     id: 42,
//     img: tourImgTwelve,
//     tourLocation: "Matera, Italy",
//     tourRating: "4.8",
//     tourRatingCount: 320,
//     tourTitle: "City Explorer Icons, History, and Urban Charm",
//     tourPrice: 24560,
//     days: "4",
//     tourDuration: "3 Days 2 Nigh",
//   },
//   {
//     id: 43,
//     img: tourImgOne,
//     tourLocation: "Matera, Italy",
//     tourRating: "4.8",
//     tourRatingCount: 313,
//     tourTitle: "Island Hopping in the Caribbean: Sun & Sea",
//     tourPrice: 32100,
//     days: "5",
//     tourDuration: "3 Days 2 Nigh",
//   },
//   //tour details  data end
// ];


export const tourData: ITourDataType[] = [
  // HolyNepalYatra.com Travel Packages

  {
    id: 1,
    img: tourImgOne,
    tourLocation: "Kathmandu - Kyirong - Saga - Mansarovar - Kailash",
    tourRating: "4.8",
    tourRatingCount: 160,
    tourTitle: "Kailash Manasarovar Overland Tours",
    tourPrice: 175000.0,
    days: "13",
    tourDuration: "12 Nights 13 Days",
  },
  {
    id: 2,
    img: tourImgOne,
    tourLocation: "Kathmandu - Nepalgunj - Simikot - Mansarovar - Kailash",
    tourRating: "4.8",
    tourRatingCount: 180,
    tourTitle: "Kailash Mansarovar Tours by Helicopter",
    tourPrice: 220000.0,
    days: "9",
    tourDuration: "8 Nights 9 Days",
  },
  {
    id: 3,
    img: tourImgTwo,
    tourLocation: "Kathmandu - Pokhara - Muktinath",
    tourRating: "4.8",
    tourRatingCount: 150,
    tourTitle: "Sacred Journey to Muktinath",
    tourPrice: 999.0,
    days: "6",
    tourDuration: "5 Nights 6 Days",
  },
  {
    id: 4,
    img: tourImgThree,
    tourLocation: "Gorakhpur - Pokhara - Kathmandu",
    tourRating: "4.7",
    tourRatingCount: 120,
    tourTitle: "Nepal Highlights: Pokhara & Kathmandu",
    tourPrice: 13000.0,
    days: "5",
    tourDuration: "4 Nights 5 Days",
  },
  {
    id: 5,
    img: tourImgOne,
    tourLocation: "Gorakhpur - Pokhara - Kathmandu - Lumbini",
    tourRating: "4.9",
    tourRatingCount: 200,
    tourTitle: "Spiritual Nepal: Lumbini to Kathmandu",
    tourPrice: 18000.0,
    days: "6",
    tourDuration: "5 Nights 6 Days",
  },
  {
    id: 6,
    img: tourImgTwo,
    tourLocation: "Gorakhpur - Pokhara - Kathmandu - Chitwan",
    tourRating: "4.6",
    tourRatingCount: 95,
    tourTitle: "Nature & Culture: Chitwan Safari Experience",
    tourPrice: 26900.0,
    days: "8",
    tourDuration: "7 Nights 8 Days",
  },
  {
    id: 7,
    img: tourImgOne,
    tourLocation: "Gorakhpur - Pokhara - Kathmandu - Lumbini",
    tourRating: "4.8",
    tourRatingCount: 110,
    tourTitle: "Heritage Trail: Lumbini & Kathmandu",
    tourPrice: 9999.0,
    days: "5",
    tourDuration: "4 Nights 5 Days",
  },
  {
    id: 8,
    img: tourImgThree,
    tourLocation: "Kathmandu - Pokhara - Muktinath",
    tourRating: "5.0",
    tourRatingCount: 160,
    tourTitle: "Pilgrimage to Muktinath Temple",
    tourPrice: 12850.0,
    days: "5",
    tourDuration: "4 Nights 5 Days",
  },
  {
    id: 9,
    img: tourImgOne,
    tourLocation: "Gorakhpur - Pokhara - Kathmandu - Chitwan",
    tourRating: "4.7",
    tourRatingCount: 140,
    tourTitle: "Adventure Nepal: Jungle Safari & Temples",
    tourPrice: 31500.0,
    days: "8",
    tourDuration: "7 Nights 8 Days",
  },
  {
    id: 10,
    img: tourImgThree,
    tourLocation: "Gorakhpur - Pokhara - Kathmandu - Lumbini",
    tourRating: "4.9",
    tourRatingCount: 180,
    tourTitle: "Buddhist Circuit: Lumbini & Beyond",
    tourPrice: 13500.0,
    days: "5",
    tourDuration: "4 Nights 5 Days",
  },
  {
    id: 11,
    img: tourImgTwo,
    tourLocation: "Gorakhpur - Pokhara - Kathmandu",
    tourRating: "4.5",
    tourRatingCount: 100,
    tourTitle: "Essence of Nepal: Pokhara & Kathmandu",
    tourPrice: 9500.0,
    days: "6",
    tourDuration: "5 Nights 6 Days",
  },
  {
    id: 12,
    img: tourImgOne,
    tourLocation: "Kathmandu - Pokhara - Muktinath",
    tourRating: "4.8",
    tourRatingCount: 130,
    tourTitle: "Divine Muktinath Yatra",
    tourPrice: 26000.0,
    days: "6",
    tourDuration: "5 Nights 6 Days",
  },
  
];
