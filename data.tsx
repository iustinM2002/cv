type data = [
    page : {enText:string[],roText:string[]},
    page2 : {enText:string[],roText:string[]},
    page3 : {enText:string[],roText:string[]},
    page4 : {enText:string[],roText:string[]},
    page4 ? : {enText:string[],roText:string[]},
];
export interface dataContact{
    email:string,
    password?:string
  }
export interface FormValues extends Record<string,any>{
    email:string,
    password?:string
  }

export const Data:data = [
        
        {
            enText:['Enjoy on TV','Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.'],
            roText:['Vizionare pe TV','Vizionare pe Smart TV, PlayStation, Xbox, Chromecast, Apple TV, playere Blu-ray si altele'],
            
        },
        {
            enText:['Download your programmes to watch offline.','Save your favourites easily and always have something to watch.'],
            roText:['Descarcă serialele preferate pentru a le viziona offline.','Salvează cu ușurință titlurile preferate și vei avea mereu ceva de vizionat.'],
            
        },
        {
            enText:['Watch everywhere.','Watch anywhere. Cancel anytime.Stream unlimited films and TV programmes on your phone, tablet, laptop and TV without paying more.'],
            roText:['Vizioneaza oriunde','Vizionează nelimitat filme și seriale pe telefon, tabletă, laptop și televizor, fără alte costuri.'],
            
        },
        {
            enText:['Create profiles for children.','Send children on adventures with their favourite characters in a space made just for them – free with your membership.'],
            roText:['Creează profiluri pentru copii.','Trimite copiii în aventuri alături de personajele favorite, într-un spațiu creat special pentru ei, inclus gratuit în abonament.'],
            
        },
]
        

export const faqData:data = [
        {
            enText:['What is Netflix?',`Netflix is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more – on thousands of internet-connected devices.  You can watch as much as you want, whenever you want, without a single advert – all for one low monthly price. There's always something new to discover, and new TV programmes and films are added every week!`],
            roText:['Ce este Netflix ?',`Netflix este un serviciu de difuzare online care le permite abonaților să vizioneze o gamă largă de titluri premiate, seriale, filme, animeuri, documentare și multe altele pe mii de dispozitive conectate la internet.

            Vizionează oricât, oricând și fără nicio reclamă, la un tarif avantajos. Întotdeauna descoperi ceva nou, deoarece adăugăm seriale și filme noi în fiecare săptămână.`],
           
        },
        {
            enText:['How much netflix cost ? ',`Watch Netflix on your smartphone, tablet, smart TV, laptop or streaming device, all for one fixed monthly fee. Plans range from £6.99 to £15.99 a month. No extra costs, no contracts.`],
            roText:['Cat coste serviciul Netflix?',`Vizionează Netflix pe smartphone, tabletă, Smart TV, laptop sau orice dispozitiv de difuzare online, întregul conținut fiind disponibil pentru un tarif lunar fix. Tariful abonamentelor variază de la 7,99 EUR la 11,99 EUR pe lună. Fără costuri suplimentare, fără contracte.`],
            
        },
        {
            enText:['Where can I watch ?',`Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite programmes with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`],
            roText:['Unde  pot viziona?',`Vizionează oriunde, oricând. Conectează-te la contul Netflix pentru a viziona imediat conținutul, fie online pe netflix.com de pe computerul personal, fie de pe un dispozitiv conectat la internet cu aplicația Netflix, inclusiv dispozitive Smart TV, smartphone-uri, playere media de difuzare online, tablete sau console de jocuri.

            Poți și să descarci serialele preferate pe dispozitivul mobil iOS sau Android ori pe computerul sau tableta cu Windows 10. Folosește opțiunea de descărcare a titlurilor pentru a viziona oriunde te-ai afla, fără conexiune la internet. Vizionează Netflix oriunde.`],
            
        },
        {
            enText:['How do I cancel ?',`Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account at any time.`],
            roText:['Cum anulez?',`Netflix este un serviciu flexibil. Nu există clauze ascunse sau obligații. Poți anula cu ușurință contul din două clicuri. Nu există taxe de anulare. Poți activa sau anula contul în orice moment.`],
            
        },
        {
            enText:['Is Netflix good for children ?',`The Netflix Children's experience is included in your membership to give parents control while children enjoy family-friendly TV programmes and films in their own space.

            Children's profiles come with PIN-protected parental controls that let you restrict the maturity rating of content children can watch and block specific titles you don’t want children to see.`],
            roText:['Este netflix adecvat copiilor ? ',`Interfața Netflix pentru copii este inclusă în abonament pentru a le oferi părinților siguranța că cei mici se bucură de seriale și filme adecvate, într-un spațiu creat special pentru ei.

            Profilurile pentru copii au funcția de control parental pe bază de cod PIN, care permite restricționarea categoriei de vârstă a conținutului pe care îl pot viziona copiii și blocarea anumitor titluri pe care nu dorești să le vadă.`],
            
        },
    ]
export const footerData : string[][] = [
        ['FAQ', 'Investors Relations' , 'Ways to Watch' , 'Corporate Information' , 'Only on Netflix'],
        ['Help Center', 'Jobs', 'Terms of Use', 'Contact Us'],
        ['Account', 'Redeem gift cards', 'Privacy', 'Speed Test'],
        ['Media Centre', ' Buy gift cards', 'Cookie Preferences', 'Legal Notices'],

    ]

