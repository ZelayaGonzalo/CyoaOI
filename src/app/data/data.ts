import { Mirror } from "../models/Mirror";

export const intros:Mirror[]=[
    {
        id:0,
        title:'Type of Otome Isekai',
        image:'https://i.postimg.cc/cLVvn4cn/index.jpg',
        description:'First, we must figure out how you ended up here at the crossroads. I’m sure you’re aware that there are different ways one finds themselves isekai’d. It might not seem important to you but it’s necessary to calculate how much karma your soul contains. Karma is what we use to figure out what your destiny is. Just because you may like something, if your karmic value doesn’t allow it, then it was simply never your fate.<br><br> Don’t worry, this isn’t the only choice where you can earn karma. You’ll find many choices down the line that may reward or take away your karma. The most important thing to remember is to never have zero karma or else you can never move forward on the crossroads. Again, just pick whichever your soul resonates with. Please, tell me how you ended up here.',
        karmaValue:0,
        type:'intro',
        requires:[],
        incompatible:[]
    },
    {
        id:1,
        title:"The World's Setting",
        image:'https://i.postimg.cc/cLVvn4cn/index.jpg',
        description:'Now that we figured out how you got here, we must pinpoint where you’re going. Look into my mirror and tell me which setting you’re drawn to. This is the first step we must take in finding the correct world. ',
        karmaValue:0,
        type:'intro',
        requires:[],
        incompatible:[]
    },
    {
        id:2,
        title:"Where did you Isekai'd to?",
        image:'https://i.postimg.cc/cLVvn4cn/index.jpg',
        description:"That’s right, this place seems familiar to you.<br><br>Good. It looks like we'll have no trouble getting you to your rightful place. Tell me, where have you seen this world before?",
        karmaValue:0,
    type:    'intro'
,    requires:[],
    incompatible:[]
    },
    {
        id:3,
        title:"Your Role",
        image:'https://i.postimg.cc/cLVvn4cn/index.jpg',
        description:"Now that we found your world, we now need to make the body you’ll be inhabiting. Unfortunately, your form right now is ill-suited for multi-dimensional travel. If you try with how you look like right now, your body will spontaneously combust and you’ll have no body to contain your soul. Fortunately, we have ways to get around it.<br><br>First, we must confirm with the world you’re entering on what your role would be when you enter. I'm sure you understand what I mean by this. Once again, please pick the option you relate to the most.",
        karmaValue:0,
    type:    'intro'
,    requires:[],
    incompatible:[]
    },
    {
        id:4,
        title:"Who are you?",
        image:'https://i.postimg.cc/cLVvn4cn/index.jpg',
        description:"Now that we know what your role is, we can pick the body you’ll be entering. Please note, depending on your role selection, it will affect who you can and can’t be. Not everyone you will see in this mirror is a villainess or side character. We have several bodies you can choose from and everything in between.<br><be>Please chose who you resonate with the most.",
        karmaValue:0,
    type:'intro',    
    requires:[],
    incompatible:[]
    },
    {
        id:5,
        title:"Perks",
        image:'https://i.postimg.cc/cLVvn4cn/index.jpg',
        description:"Surprised that you’re still here? Of course, you’re free to leave now since you fulfilled the minimum requirements. You have your world and you have your body. But those who find themselves at the crossroads tend to have a deity’s bias. Regardless of if it’s negative or positive, a deity would give a human blessing or two to give them a fighting chance. With that in mind, I extend that same curtsey to you.<br><br>I’m sure you understand the concept of karma. For every bad thing that happens to you, you earn credit for something good to eventually happen. Vice versa, for every bad thing you do then you are cementing a negative repercussion. It doesn’t happen all the time, but at least here at the crossroads, you will face fairness. ",
        karmaValue:0,
        type:'intro',    
        requires:[],
        incompatible:[]
    },
    {
        id:6,
        title:"Rewards",
        image:'https://i.postimg.cc/cLVvn4cn/index.jpg',
        description:"You know, human. Before you go, let me offer you the chance to get a few more gifts. Consider this the boon of the guide. Destiny works in mysterious ways. It’s an ever-changing path with you walking on it with your intuition as your only map. As a guide, it seems unfit of me to leave you lost like this. With your last remaining points, you can purchase your final destiny. The options you see here are all possible but not guaranteed. If you buy one, I can entwine it with your soul. Naturally, no matter where you go, you will eventually come to this resolution. <br><br> If you have enough points, you can purchase as many as you can but know that the prices for this are hefty. Now please, one last time, pick the options that resonate with you.",
        karmaValue:0,
        type:'intro',    
        requires:[],
        incompatible:[]
    },
    {
        id:7,
        title:"The end",
        image:'https://i.postimg.cc/cLVvn4cn/index.jpg',
        description:"Finally, we reached the end of the crossroads. Before you is your final destination. You don’t need to do anything special.  All you need to do is take a deep breath, close your eyes, and step forward. When you open them again, you’ll find yourself in your new world.<br><br> Good luck and farewell. ",
        karmaValue:0,
        type:'intro',    
        requires:[],
        incompatible:[]
    },

]


export const types: Mirror[] =[
    {
        id:11,
    title:'Traditional Isekai',
    image:'https://i.postimg.cc/nrHjhRGS/1.jpg',
    description:"Ah,description: the traditional way to be isekai’d. <br><br> Doesn't matter how you ended up here. Be it falling asleep in class or getting hit by a truck, you are now here as yourself. Sometimes you would meet a deity who tells you that you met an unfortunate fate or you face a prince who tells you that you’re a prophesied maiden. Either way, you’re destined for something great… <br><br> … Or maybe you want to open a café instead of defeating the demon lord. Regardless, this new world is your oyster. <br><br>By default, you're the Main Character of the world and have the foundation perk, Magic Expertise I, for free.",
    karmaValue:60,
    type:   'type',
    requires:[],
    incompatible:[]
    },
    {
        id:12,
        title:'Transmigration',
        image:'https://i.postimg.cc/vH2gGvgX/2.jpg',
        description:"I see… you’re an unfortunate soul that found themselves in a body that doesn’t belong to you. <br><br> Unlike an age regressor or a reincarnator, you were once an ordinary human before suddenly getting pulled into a world that you don’t originate in. Your life there starts at the exact point you woke up in your new body. All evidence of the past soul is now erased and the only one who remains is yourself. A challenging start since you don’t necessarily have the same foundation as the others.<br><br> You might not have a free perk like the other options, but you're a wild card. With extra points, you can make the person who you want to be.",
        karmaValue:65,
        type:'type',
        requires:[],
        incompatible:[]
    },
    {
        id:13,
        title:'Age Regression',
        image:'https://i.postimg.cc/j56nK0PJ/3.jpg',
        description:'Aren’t you a cute little thing?<br><br>Similar to a transmigrator and a reincarnator, you wake up in the body of a little child. You were unfortunately killed in your past life and reincarnated into a new one. But you seem to regain your memories a bit too early to be considered a normal reincarnator. Overwriting what would have been a normal kid you are now an adult in a child’s body. It does come with its advantage.<br><br>You’re now capable of learning about your new world at a slower and more reasonable pace. You should worry about possible child endangerment but because you’re so darn cute and clever for your age, everyone can’t help but dote on you! Just a side comment, you’re only considered as a genius when you’re still a child since you have an adult mind but it will eventually even out once you grow up unless you decide to pursue further education.<br><br>With this selection, you get the Charming perk for free. ',
        karmaValue:60,
        type:'type',
        requires:[],
        incompatible:[]
    },
    {
        id:14,
        title:'Mary Sue Mode',
        image:'https://i.postimg.cc/zXGHmQBV/4.jpg',
        description:'Fuu… so you think you’re perfect, huh?<br><br>Unfortunately, this genre rewards characters such as yourself. It doesn’t matter how you got here. You simply belong here and you will get everything you desire. Run along now with your karma points and take what you want. But please know that it isn’t fun if you get everything you ever want with no challenge whatsoever. As you are a perfect Mary Sue, you are locked out of the Drawback section.',
        karmaValue:500,
        type:'type',
        requires:[],
        incompatible:[]
    },
    {
        id:15,
        title:'System Transmigration',
        image:'https://i.postimg.cc/yxvJgmf1/5.jpg',
        description:'A system transmigrator? It seems like it was fate for us to meet then. We’ll be getting acquainted with each other as you use the crossroads to go to your missions.<br><br> Just as challenging as being a regular transmigrator, a system latched on to you to fulfill the wishes of wronged characters. To do so, you enter the bodies of a character and complete your mission. In return, you earn points that you can either save or purchase items to invest back into the system. Either way, you have a goal in mind that you wish to achieve. But please remember that being an agent is dangerous. One mistake and you’ll be dead forever.<br><br>With this selection, you get a system for free and the system exclusive add-on of having an AI companion.  ',
        karmaValue:50,
        type:'type',
        requires:[],
        incompatible:[]
    },
    {
        id:16,
        title:'Reincarnation',
        image:'https://i.postimg.cc/CMNnQ0w3/6.jpg',
        description:'So… you become the mentally conflicting reincarnator.<br><br>Unlike the transmigrator, you recover your past life’s memory after going through a traumatizing experience in your new life. Here, like the age regressor, you were reborn and experienced a new life.  Are you the same person in your past life or do you embrace your identity as the current you? That is up to you to decide. Regardless, with your newfound perspective, perhaps you can now change your sad fate.<br><br>By being a reincarnator, you get the Noble Etiquette perk for free. ',
        karmaValue:60,
        type:'type',
        requires:[],
        incompatible:[]
    }
]

export const worlds: Mirror[] =[
    {
        id:17,
        title:'Stereotypical OI',
        image:'https://i.postimg.cc/N0xLzhXJ/w1.jpg',
        desktopImage:'https://i.ibb.co/ZSr9SqB/w-Sd-JKuh-fantasy-city-wallpaper.jpg',
        description:'The classic otome isekai setting. It isn’t factually accurate to the medieval setting that it’s inspired by. It’s a melting pot of popular tropes. No promises of the tropes following historical logic either. The world may or may not have magic in it depending on the level of convenience. ',
        karmaValue: 0,
        type:'world',
        requires:[],
        incompatible:[]
    },
    {
        id:18,
        title:'Standard Medieval',
        image:'https://i.postimg.cc/xTWkk3YR/w2.jpg',
        desktopImage:'https://i.ibb.co/ZSr9SqB/w-Sd-JKuh-fantasy-city-wallpaper.jpg',
        description:'This setting can be considered a more realistic take of the OI setting. Most of the tropes are factually accurate to the setting and the quality of life is considerably harsher. There’s magic in this world but it may depend on if you decide if the world is low-fantasy or high-fantasy. You can pick a different "medieval" location such as Russia or Italy.',
        karmaValue: 0,
        type:'world',
        requires:[],
        incompatible:[]
    },
    {
        id:19,
        title:'Ancient Asia',
        image:'https://i.postimg.cc/1zSfBR8V/w3.jpg',
        desktopImage:'https://i.ibb.co/TKNWrGT/asian.jpg',
        description:'A setting inspired by East Asia. While ancient China or feudal Japan comes to mind, you could pick other Asian countries such as India or Mongolia. Instead of magic, this world has mysticism or wuxia. Difficulty can vary on being realistic or not.',
        karmaValue: 0,
        type: 'world',
        requires:[],
        incompatible:[]
    },
    {
        id:20,
        title:'Steampunk',
        image:'https://i.postimg.cc/zXLbXcmv/w4.jpg',
        desktopImage:'https://i.ibb.co/Fb8RW9r/steampunk1.jpg',
        description:'A rather unique setting. Taking place in an industrial revolution, this world has quirky and intriguing mechanisms all over. But due to this, the world suffers from heavy pollution. Unfortunately, magic doesn’t exist here but the hundreds of machines created every day makes the standard of living a lot more bearable to a modern person. Modeled after England’s industrial revolution, you could pick a different location if you wanted.',
        karmaValue: 0,
        type:'world',
        requires:[],
        incompatible:[]
    },
    {
        id:21,
        title:'Modern',
        image:'https://i.postimg.cc/gJSjGvN3/w5.jpg',
        desktopImage:'https://i.ibb.co/B2pXvst/modern.jpg',
        description:'Similar to the world you came from but isn’t quite it, you entered a parallel world. Up to you if it’s urban fantasy or not. Undoubtedly an easy world to travel to as you know how things work here. You can pick where you end up to. ',
        karmaValue: 0,
        type:'world',
        requires:[],
        incompatible:[]
    },
    {
        id:22,
        title:'Futuristic',
        image:'https://i.postimg.cc/d1tDMWmq/w6.jpg',
        desktopImage:'https://i.ibb.co/7KMvR6S/futuristic.jpg',
        description:'Blowing past modern times, you go straight to the future. Shining lights and robots who perform unwanted labor, you’ll never have to lift a finger if you can afford it. The world may or may not secretly be a dystopian society. You may pick the location. Planted with a chip, you have a chance to get the exclusive  AI assistant add-on if you were to purchase the System Perk. If not, the chip is only used for identifying and purchasing purposes in this world.',
        karmaValue: 0,
        type:'world',
        requires:[],
        incompatible:[]
    },
    {
        id:23,
        title:'Post-Apocalypse',
        image:'https://i.postimg.cc/4xVYpHxT/w7.jpg',
        desktopImage:'https://i.ibb.co/FwLGcmx/postapocalypse.jpg',
        description:'After the collapse of their society, this world became a hostile land to the living. You may decide what sort of apocalypse it faced: it could be zombies, nuclear war, or robots. Regardless of what it was, you’ll be living a difficult life if you don’t have a group to rely on. Perhaps you can create society again. ',
        karmaValue: 0,
        type:'world',
        requires:[],
        incompatible:[]
    },
    {
        id:24,
        title:'You decide',
        image:'https://i.postimg.cc/wxrMPQtp/w8.jpg',
        desktopImage:'https://i.ibb.co/fMrdMxN/Fantasy-world-beautiful-trees-starry-man-1920x1200.jpg',
        description:'If none of these settings catch your eyes, you’re free to create your own setting but please know that making your own setting has a price.',
        karmaValue: -15,
        type:'world',
        requires:[],
        incompatible:[]
    }
]

export const worldTypes:Mirror[] =[
    {
        id:25,
        title:'Original',
        image:'https://i.postimg.cc/pX55C6L8/o1.jpg',
        description:'So, the world you’re going to was something you created before? Or maybe you want to make something up on the spot? Either way, this world was crafted by you and you know it by heart. Gain the Script perk for free.',
        karmaValue: -10,
        type:'world',
        requires:[],
        incompatible:[]
    },
    {
        id:26,
        title:'Novel',
        image:'https://i.postimg.cc/Qt6KYL7g/o2.jpg',
        description:'This world was based on a novel you once read. Was it an officially published book or was it a webnovel? Please note that you can pick a real-world work or it can be an original novel. ',
        karmaValue:0,
    type:    'world'
,    requires:[],
    incompatible:[]
    },
    {
        id:27,
        title:'Video Game',
        image:'https://i.postimg.cc/G35skCdd/03.jpg',
        description:'This world was based on a game you once played. Was it a generic video game or are we talking about otome game? Please note that you can pick a real-world work or it can be an original game.',
        karmaValue:0,
    type:    'world'
,    requires:[],
    incompatible:[]
    },
    {
        id:28,
        title:'Comic',
        image:'https://i.postimg.cc/B6Z1CZjQ/04.jpg',
        description:'Hey, don’t get your panties in a twist. When this option reads ‘comics’ we’re talking about anything that falls under this umbrella. This world can be based on traditional comics, webtoons, or manga. Please note that you can pick a real-world work or it can be an original comic.',
        karmaValue:0,
    type:    'world'
,    requires:[],
    incompatible:[]
    },
    {
        id:29,
        title:'TV show',
        image:'https://i.postimg.cc/Zn2BZrVC/05.jpg',
        description:'This world can be based on any show that would be presented on television. It can be anime, cartoon, kdrama, and more. Movies do not count. Please note that you can pick a real-world work or it can be an original show.',
        karmaValue:0,
    type:    'world'
,    requires:[],
    incompatible:[]
    },
    {
        id:30,
        title:'Movie',
        image:'https://i.postimg.cc/C5zBWvC3/06.jpg',
        description:'A rare and unused option for the type of world you can enter. It is based on a movie you once watched. It can either be animated, live-action, or come from a play. Please note that a movie adaptation wouldn’t necessarily follow the novel it is based on. Due to the challenge as a movie isn’t as in-depth as a novel or comic, you will be rewarded with points. You can pick a real-world work or it can be an original movie.',
        karmaValue:0,
    type:    'world'
,    requires:[],
    incompatible:[]
}
]

export const roles:Mirror[] = [
    {
        id:31,
        title:'Main Character',
        image:'https://i.postimg.cc/nLGHTvmq/r1.jpg',
        description:'So, you’re the main character? I wonder if you’re simply entering the body of a main character or were you always a main character? Aren’t we all main characters in our individual stories? It’s a matter of perspective in the end.<br><br>This is a fairly standard role. Good things are undoubtedly going to happen to you whether you deem them as beneficial or not. Most people would die to be in your shoes and plenty more would kill you to take your shoes. I wonder what kind of path you’ll carve with the points you’re given.',
        karmaValue:15,
        type:'role',
        requires:[],
        incompatible:[]
    },
    {
        id:32,
        title:'Villainess',
        image:'https://i.postimg.cc/J0GM1v2Q/r5.jpg',
        description:'So, you decided to become the villainess then. Quite the popular selection... not that I blame you for picking it. It is quite fun to play the bad guy… No? You don’t want to?<br><br>Regardless, this is a challenging role to take on but not impossible. Will you be able to escape your pre-written destiny? I believe in you. As a guide, trust me when I say that your path isn’t set in stone.',
        karmaValue:20,
        type:'role',
        requires:[],
        incompatible:[]
    },
    {
        id:33,
        title:'Side Character',
        image:'https://i.postimg.cc/yNjH07qP/r3.png',
        description:'A side character? A rather realistic selection, don’t you think? Not everyone is born special… but isn’t that highly subject? I’m sure no one would say that their day-to-day life is meaningless compared to the presumed main characters.<br><br>A surprisingly easy role as long as you keep your head down and mind your own business. But, as I guide, I know that there’s no such thing as an easy path. Perhaps destiny has something in mind for you.',
        karmaValue:20,
        type:'role',
        requires:[],
        incompatible:[]
    },
    {
        id:34,
        title:'Canon Fodder',
        image:'https://i.postimg.cc/5y0NX66L/r4.jpg',
        description:'Ah, the unfortunate cannon fodder. What a tragic destiny to have. Unlike the villainess, your ending seems unjust and cruel. You are just an accessory to the other characters’ backstories. Worry not, you can change your destiny.<br><br> Due to the challenge, you’re given extra points but be wise in what you do with it.',
        karmaValue:25,
        type:'role',
        requires:[],
        incompatible:[]
}
]


export const characters:Mirror[] =[
    {
        id:35,
        title:'Be Yourself',
        image:'https://i.postimg.cc/1t4D5wZN/z1.jpg',
        description:"You might find it boring but you could enter the world as yourself. This is an option exclusive to traditional isekai entries. To make this option sound more appealing, I'll clear any illness or disease your former body had and give you a chance to remove three flaws you don't like about yourself. I will also reward you with some points.",
        karmaValue:0,
        type:'character',
        isBroken : false,
        requires:['Traditional Isekai'],
        incompatible:[]
    },
    {
        id:36,
        title:'Customize Yourself',
        image:'https://i.postimg.cc/ZYCLTtTD/z2.jpg',
        description:"This must come as a surprise to some but I can let you craft your new body for a price. I'll open up the salon down below and you can build your body. You don't need to think too much about the technicalities, I'll work behind the scenes to make sure your body matches the role you enter.",
        karmaValue: -10,
        type:'character',
        requires:[],
        incompatible:[]
    },
    {
        id:37,
        title:'An Animal?!',
        image:'https://i.postimg.cc/RCyLhshC/z3.jpg',
        description:"Now, this is a new option being offered to those getting isekai'd. If you like, I can place you into the body of any animal of your choosing. You'll be like that for a while, unable to communicate with humans. But after some time, you'll encounter an event that lets you switch between your animal form and human form.",
        karmaValue:-5,
        type:'character',
        requires:[],
        incompatible:[]
    },
    {
        id:38,
        title:'A Monster?!',
        image:'https://i.postimg.cc/FsSgLyky/z3-1.jpg',
        description:"If you like, instead of being turned into an animal, we can turn you into a lesser monster instead. It'll take a while for you to take on a human form and you'll likely get hunted for the time being. But being part monster comes with more power than being just an animal. Please note that this is just the lesser form of the monster you chose. A full-fledged dragon is still stronger than you if you're a dragonkin or a true demon can command you if you're an imp.",
        karmaValue:-10,
        type:'character',
        requires:[],
        incompatible:[]
    },
    {
        id:39,
        title:'Lucinda Nicholls',
        image:'https://i.postimg.cc/g0zvQ1Ss/z4.jpg',
        description:"Locked inside a sprawling tower, the depraved witch Lucinda Nicholls looked down on the land from behind these ivory walls. She wasn't always a hermit, as she was once the most popular lady in the kingdom. A powerful witch and a fiery beauty as well, she was not a presence to ignore. But unfortunately, she fell in love with the wrong person. The noble prince. She couldn't look away from his shining aura and did anything for his affection. She took down kingdoms and slayed dragons for him. But she soon lost her usefulness. The prince intended to just keep her by his side but after she attempted to kill his fiance, he ended up locking her away in the one prison that can hold her. This tower. Made to sap the magic and lifeforce from the inhabitant. Now she would be forever useful until her death...",
        karmaValue: 0,
        type:'character',
        requires:['Standard Medieval','Stereotypical OI','Steampunk','You decide'],
        incompatible:['Traditional Isekai']
    },
    {
        id:40,
        title:'Morgan Whiteford',
        image:'https://i.postimg.cc/8c6W7KFh/z5.jpg',
        description:"As the eldest child of the Duke of Westwood, it was expected of Morgan to take over the title of duke yet he was affected by a strange curse ever since they were a child. On the night of the blue moon, they are overcome with a bloodthirsty madness. It's a mystery where it came from but it's suspected that it was a curse placed upon them by their late mother; an odd woman from the fae wild. She deeply hated their father after he kidnapped her from her home. Locked away, deep in the manner, they're forced to live out their days bedridden.",
        karmaValue: 0,
        type:'character',
        requires:['Standard Medieval','Stereotypical OI','Steampunk','You decide'],
        incompatible:['Traditional Isekai']
    },
    {
        id:41,
        title:'Elijah Rowland',
        image:'https://i.postimg.cc/9zH9ZdTs/z6.jpg',
        description:"As the master of the mage tower, Elijah is one of the most important existence out there. He is often consulted by surrounding nobles for their feuds and settled fights between humans and the supernatural. Yet despite his power, he had failed to break the spell that enthralls his younger sibling. Elijah has been taking care of their comatose sibling for half his life yet suddenly, they woke up. He was initially overjoyed but he soon realized that the person before them was not the same. Someone foreign. A monster. But before he can seal this beast, it cursed him with the same curse that was cast on his sibling. ",
        karmaValue: 0,
        type:'character',
        requires:['Standard Medieval','Stereotypical OI','Steampunk','You decide'],
        incompatible:['Traditional Isekai']
    },
    {
        id:42,
        title:'Jia Isayama',
        image:'https://i.postimg.cc/65Cn3BFz/z7.jpg',
        description:"The fourth daughter to the Emperor, Jia was expected to marry off for the sake of peace or for a treaty. She was considered the perfect wife and the best among her siblings. She can seemingly do anything from painting, etiquette, and even music. Her father deeply cherished her while her siblings grew jealous of the attention their father gave her. Her father found her an excellent marriage prospect with the man she loved when suddenly, the temple proclaimed that she must be sacrificed to the gods if they wish for the nation to survive the next thousand years. Her father was skeptical but finally gave in to public demand. Dropped into the divine river, Jia can only watch several spirits and deities surround her as she drowns. ",
        karmaValue:0,
        type:'character',
        requires:['Stereotypical OI','Ancient Asia','Steampunk','You decide'],
        incompatible:['Traditional Isekai']
    },
    {
        id:43,
        title:'Kiran',
        image:'https://i.postimg.cc/hG29BMNB/z8.jpg',
        description:"The eccentric owner of the largest brothel in the red light district, Kiran is a loved person among the courtesan and their customers. They lived in this brothel all their life as they were raised by the former owner after their mother passed away. They raised through the ranks through their own work and it shows. Behind the scene, they often house their friend who was the most wanted assassin in the empire. The love they held for their friend was more than platonic love yet they never saw it as they one day brought in a mysterious stranger. Only wishing them the best, Kiran turned their gaze and protected their happiness. All the way to the end as they stood among the flames of their burning brothel to stop the guards from advancing.",
        karmaValue:0,
        type:'character',
        requires:['Stereotypical OI','Ancient Asia','Steampunk','You decide'],
        incompatible:['Traditional Isekai']
    },
    {
        id:44,
        title:'Aki',
        image:'https://i.postimg.cc/sg9Yn3c1/z9.jpg',
        description:"The evil tyrant of the east, Aki, the ruler of demons spread bloodshed where ever he went. Born from a human mother and monster father, he was ashamed of being a half-blood. On a journey to remove that human heart, Aki committed unspeakable acts to become a full demon. He thought he succeeded as he felt this gaping hole in his heart yet he never feel fulfilled. Wallowing in despair, he locked himself in his room as the divine warrior banged outside of his door to defeat him once and for all.",
        karmaValue:0,
        type:'character',
        requires:['Stereotypical OI','Ancient Asia','Steampunk','You decide'],
        incompatible:['Traditional Isekai']
    },
    {
        id:45,
        title:'Olivia Myers',
        image:'https://i.postimg.cc/wvPLtM64/z10.jpg',
        description:"Olivia Myers, the youngest and spunky journalist in her college's newspaper. She is well-liked among her peers though most people complain that she's too nosy and invasive with her journalism. Her childhood friend preaches that the most and often warn her that one of these days, she'll find a scoop that she'll die for. Finding it nonsense, she decided to have a surprise visit to her friend's place to have some fun. What she stumbled upon was her worst nightmare. A dead body and blood everywhere. In the center of it was her friend... with an ax in their hands. They were right. She was going to find something out and die for it. ",
        karmaValue:0,
        type:'character',
        requires:['Steampunk','Modern','Post-Apocalypse','You decide'],
        incompatible:['Traditional Isekai']
    },
    {
        id:46,
        title:'Quinn Aston',
        image:'https://i.postimg.cc/2SfdF1nP/z11.jpg',
        description:"Quinn Aston. Model. Idol. Actor. They did it all and had their face plastered all over the side of billboards and magazine covers. They are currently the most popular celebrity out there and have rows of contracts available to choose from. Unfortunately, for that beautiful face of theirs, it hides an ugly personality. Those who work with them aren't shy in calling them what they are: a primadonna, a bitch, a bastard, a stuck-up piece of shit. Their co-stars hate them the most. Quinn is notorious for bullying rising stars and kissing up to directors. So, it was only fitting when they woke up to the biggest scandal of a lifetime. A video of them splashing hot coffee on an upcoming young actress. But the nail of their coffin was an expose of their past; how they were formerly from the country and had plastic surgery for their looks. Humiliated, they went into hiding. Will Quinn come back to the spotlight?",
        karmaValue:0,
        type:'character',
        requires:['Steampunk','Modern','Post-Apocalypse','You decide'],
        incompatible:['Traditional Isekai']
    },
    {
        id:47,
        title:'Mason Watkins',
        image:'https://i.postimg.cc/MHQR1wH6/z12.jpg',
        description:"Mason Watkins. Local bad boy and secret son to the president of Spiderwells Company. Born from the affair between his father and maid mother, he lived somewhere in the middle of being recognized as a legitimate son and bastard son. Mason spent most of his days raising hell and giving his older brother a tough time. After saving his brother's fiance, his world was turned upside down as his lonely days were spent having fun with his brother's fiance. He called it love but she says it's puppy love. But soon enough, those days soon came to an end as his brother's ex attempted to kill her. Standing in the way, Mason gave her a chance to run away while he held back the hired thugs. Hopefully, she'll return with reinforcements... soon.",
        karmaValue:0,
        type:'character',
        requires:['Steampunk','Modern','Post-Apocalypse','You decide'],
        incompatible:['Traditional Isekai']
    },
    {
        id:48,
        title:'Mila (M114)',
        image:'https://i.postimg.cc/Qds5KR3D/z13.jpg',
        description:"Mila, also known as Model 114 (M114), is an assistant model android. Her typing is commonly bought as helpers for the upper echelon of society due to their beauty and grace. Own by the CEO of Voltaire Enterprise, her day consists of playing maid, secretary, and personal assistant. All without breaking a sweat or having any facial reaction. She is supposedly well-cared for by the CEO but it's hard to tell since he is just as inexpressive as her. But word from the grapevine is that Mila is soon to be replaced by a human girl, of all things. Decommissioned androids are a dime a dozen in this society and it's only expected for Mila to be returned to her manufacturer to be recycled for parts. Only being made up of code and binary, she shouldn't care about that... right?<br><br> What? Don't look at me like that. Is it really that surprising that even androids could have souls? Do you really want to get into that debate right now? You can be a living example of it and debate for yourself.",
        karmaValue:0,
        type:'character',
        requires:['Steampunk','Futuristic','Post-Apocalypse','You decide'],
        incompatible:['Traditional Isekai']
    },
    {
        id:49,
        title:'Zion Ashford',
        image:'https://i.postimg.cc/jqwypHXp/z14.jpg',
        description:"Zion Ashford. Ruler of the underground black market and the mafia boss of the biggest gang in the city. They are the thorn in the side of all law enforcement and politician. Their past is shrouded in mystery but supposedly they didn't get this power through family ties. Zion rules with an iron fist but is fair for a mafia boss. Plenty of people love them but more people hate them. They escape several assassination plots but it seems like this time, escape isn't an option after the betrayal of their right-hand man.<br><br>You can pick which preferred pronouns Zion uses as long as one of them is they/them. Yes, Zion is non-binary.",
        karmaValue:0,
        type:'character',
        requires:['Steampunk','Futuristic','Post-Apocalypse','You decide'],
        incompatible:['Traditional Isekai']
    },
    {
        id:50,
        title:'Cain Silvius',
        image:'https://i.postimg.cc/c1pf0vkr/z15.jpg',
        description:"Former special agent Cain Silvius went rogue after being framed for the murder of his partner. He witnessed something that should never be released to the public. The dirty secret that this city hides to keep things running. He used to blindly believe in justice and the integrity of law enforcement. But now he knew that he was living in nothing more but a rotting city. Escaping his wardens, he tried searching for the resistant group but found himself pinned down in a gunfight with his former agents.",
        karmaValue:0,
        type:'character',
        requires:['Steampunk','Futuristic','Post-Apocalypse','You decide'],
        incompatible:['Traditional Isekai']
    },
    
]

/*







*/

export const perks:Mirror[] = [
    {
        id:61,
        title:'System',
        image:'https://i.ibb.co/ZBqRzk4/p1.jpg',
        description:"Similar to the user interface a video game might have, you are now granted the ability to see the world as a video game. It has several helpful features such as identifying items, maps, and mission advice. Please note that this is a system that grows with you. You can consider it as both a blessing and a drawback. Besides the mission advice, things such as identifying times or maps depend on your own knowledge. You can’t search for poison in a drink without knowing the types of poisons in the world. That said, you don’t need to have a perfect memory for this to work. As long as you encounter it once, the system will update accordingly. It can be incredibly strong when given a chance to grow.<br><br> If you are a system transmigrator or live in the future, in addition to having a system, you now have an AI to help you. A lot of the things you must research to help grow the system can be allocated to your AI. As it starts out as infantile, you may need to help train your AI until it is capable of self-control. ",
        karmaValue:-45,
        type:'perk',
        requires:[],
        incompatible:[]
    },
    {
        id:62,
        title:'Storage Space',
        image:'https://i.ibb.co/dL0xGZf/p2.jpg',
        description:" This grants you the ability to have a storage space where you may contain inorganic items. While you could carry anything, you can’t put any organic material inside. People, plants, animals, and food are until to cross the threshold. It is also limited as to what you can store. You can store a bed but not an entire house or a cart. Your space can contain a generous room amount of space.",
        karmaValue:-30,
        type:'perk',
        requires:[],
        incompatible:[]
    },
    {
        id:63,
        title:'Pocket Realm',
        image:'https://i.ibb.co/TwwbTnH/p3.jpg',
        description:"You can consider this as an upgrade to your storage space. With this, you can now house organic materials in your pocket dimension. Time does not pass here as it does in the outside world. Food does not expire and you can read a library worth of books one-third of the time compared to the outside. While you still can’t insert a whole house or castle in this pocket dimension, it comes with its own residency that you and guests can use. Please know that it does have a finite amount of safe space. If you chose to expand your pocket dimension to house more, please note that you risk inviting Them. Your pocket dimension won’t just belong to you anymore but Them.",
        karmaValue:-35,
        type:'perk',
        requires:['Storage Space'],
        incompatible:[]
    },
    {
        id:64,
        title:'Magic Expertise I',
        image:'https://i.ibb.co/5TJ5gVs/p4.jpg',
        description:"This is the entry-level skill needed to be able to use magic. You’re capable of creating water and minor feats of magic. While you don’t need the upgrades to become a master magic user, you’ll take just as long as a common user to learn how to use magic. If taken with the Frail and similar drawbacks, you’ll be unable to develop your magic skill. ",
        karmaValue:-5,
        type:'perk',
        requires:[],
        incompatible:['Magically Inept'],
        upgrade:'Magic Expertise II'
    },
    {
        id:65,
        title:'Magic Expertise II',
        image:'https://i.ibb.co/YfhqGX4/p5.jpg',
        description:"This is the standard skill of the majority of spellcasters. You can do basic skills such as creating or destroying water and more advanced skills such as enchanting items with lesser charms. Instead of learning from scratch, you have an established magical foundation. While you don’t need the final upgrade to become a master magic user, you still have to train rigorously if that is your goal. Even then, it isn't guaranteed to happen. ",
        karmaValue:-15,
        type:'perk',
        requires:['Magic Expertise I'],
        incompatible:[],
        upgrade:'Magic Expertise III'
    },
    {
        id:66,
        title:'Magic Expertise III',
        image:'https://i.ibb.co/r3KFNSs/p6.jpg',
        description:"This is the cap level a magic-user can reach. Your magic ability can rival a master magician or a kingdom’s wizard. At this level, you can cast hurricanes and enchant items that can be as strong as a divine weapon. You’re a genius in this field and you didn’t even have to work for it. While you are one of the strongest, you aren’t alone with that title.",
        karmaValue:-25,
        type:'perk',
        requires:['Magic Expertise II'],
        incompatible:[]
    },
    {
        id:68,
        title:'Martial Artist I',
        image:'https://i.ibb.co/NCDstwk/p7.png',
        description:"This is the entry-level needed for hand-to-hand combat. You know the basic moves to defend yourself from attacks but you’re still capable of being overpowered by a strong enemy or by numbers. You don’t need to take the upgrades for this skill to become better at fighting but you are expected to train to earn that skill. ",
        karmaValue:-5,
        type:'perk',
        requires:[],
        incompatible:['Frail']
    },
    {
        id:69,
        title:'Martial Artist II',
        image:'https://i.ibb.co/DDVmGmj/p8.jpg',
        description:"This is the standard level of skill most martial artists have. You have no trouble in taking on two to three men at a time but you can still be overpowered if you can’t keep up the stamina to fight. This is also the required stage needed to incorporate magic or mysticism into your fighting style if you own the necessary skill. But please know that, if you’re capable of doing that, so is the enemy. <br><br>You don't need the additional upgrade to become a master in hand-to-hand combat but you are expected to train rigorously if you desire to become a master. Even then it doesn't guarantee your success.",
        karmaValue:-15,
        type:'perk',
        requires:['Martial Artist I'],
        incompatible:[]
    },
    {
        id:70,
        title:'Martial Artist III',
        image:'https://i.ibb.co/JQdBhqH/p9.jpg',
        description:"This is the cap level one can achieve in becoming a martial artist. You can take on a reasonably sized militia by yourself and people will find that only an army can take you down if you’re capable of incorporating magic into your fighting. People might think of you as a monster or a champion due to your skills and you didn’t even need to work for it. While you are the strongest around, you aren’t alone with this title. ",
        karmaValue:-25,
        type:'perk',
        requires:['Martial Artist II'],
        incompatible:[]
    },
    {
        id:71,
        title:'Weapon Mastery I',
        image:'https://i.ibb.co/BBTN7wN/p10.jpg',
        description:"This is the entry-level needed for using a weapon. You know the basic moves to defend yourself from attacks but you’re still capable of being overpowered by a strong enemy or by numbers. You don’t need to take the upgrades for this skill to become better at fighting but you are expected to train to earn that skill. <br><br>Please note that it doesn’t necessarily have to be swords. You can switch out your desired weapon to be an ax or a gun (if it exists in your world). Either way, this option only allows beginner-level knowledge of how to use the weapon.",
        karmaValue:-5,
        type:'perk',
        requires:[],
        incompatible:['Frail']
    },
    {
        id:72,
        title:'Weapon Mastery II',
        image:'https://i.ibb.co/wL0bM41/p11.jpg',
        description:"This is the standard level of skill most weapon fighters have. You have no trouble in taking on two to three men at a time but you can still be overpowered if you can’t keep up the stamina to fight. This is also the required stage needed to incorporate magic or mysticism into your fighting style if you own the necessary skill. But please know that, if you’re capable of doing that, so is the enemy. <br><br>You don't need the additional upgrade to become a master in fighting with weapons but you are expected to train rigorously if you desire to become a master. Even then it doesn't guarantee your success.",
        karmaValue:-15,
        type:'perk',
        requires:['Weapon Mastery I'],
        incompatible:[]
    },
    {
        id:73,
        title:'Weapon Mastery III',
        image:'https://i.ibb.co/QJd01Vb/p12.jpg',
        description:"This is the cap level one can achieve in becoming a weapon user. You can take on a reasonably sized militia by yourself and people will find that only an army can take you down if you’re capable of incorporating magic into your fighting. People might think of you as a monster or a champion due to your skills and you didn’t even need to work for it. While you are the strongest around, you aren’t alone with this title. ",
        karmaValue:-25,
        type:'perk',
        requires:['Weapon Mastery II'],
        incompatible:['Needles scare me!']
    },
    {
        id:74,
        title:"Isekai'd with your phone?!",
        image:'https://i.ibb.co/tZRWjHg/p13.jpg',
        description:"Somehow, you managed to have your phone tag along in your isekai adventures. Unless you live in a modern world or in a futuristic one where you have access to the internet, you won’t be able to contact other people with it. It still has almost all other functions though and it seems to never run out of battery. You can at least play the games on your phone and the apps work on it. You can even play music with it and record videos. But you can’t download any new information or access the internet. <br><br>When taking this option, make sure you sign the terms and agreements. Your phone has an unlimited warranty. If it were to break, you will be sent a new one in five to ten business days. This warranty does not cover if it was stolen. You need to confirm the broken device to collect the insurance on it. We are also not liable for any disturbance it may cause in your new world. ",
        karmaValue:-25,
        type:'perk',
        requires:[],
        incompatible:[]
    },
    {
        id:75,
        title:"Isekai'd with your laptop?!",
        image:'https://i.ibb.co/3yxBzqX/p14.jpg',
        description:"Somehow, you managed to have your computer tag along in your isekai adventures. Unless you live in a modern world or in a futuristic one where you have access to the internet, you won’t be able to contact other people with it. It still has almost all other functions though and it seems to never run out of battery. It does seem capable of searching up things on some kind of database but it has limited usage per month. Depending on what you have installed on your laptop, you are capable of using those applications such as playing games or playing music. <br><br>When taking this option, make sure you sign the terms and agreements. Your laptop has an unlimited warranty. If it were to break, you will be sent a new one in five to ten business days. This warranty does not cover if it was stolen. You need to confirm the broken device to collect the insurance on it. We are also not liable for any disturbance it may cause in your new world.",
        karmaValue:-30,
        type:'perk',
        requires:[],
        incompatible:[]
    },
    {
        id:76,
        title:'Gifted with the script',
        image:'https://i.ibb.co/Gv2v7fq/p15.jpg',
        description:"This is an option that only works if you were transported into a world based on something you once read or watched.  This perk grants you a physical copy of the story. If the story was based on a show or movie, you are granted the script. Once things begin to change in the plot, please know that the copy does not shift with the story. <br><br>Please know that we are also not liable if the copy were to fall into someone else’s hands. But if it were to be destroyed, you will gain a new copy in five to ten business days.  ",
        karmaValue:-15,
        type:'perk',
        requires:[],
        incompatible:[]
    },
    {
        id:77,
        title:'Stamina',
        image:'https://i.ibb.co/B6dyRsp/p16.jpg',
        description:"I can bless your body with superhuman stamina. You'll never get sick and you always have enough energy to pull an all-nighter. But this boost does not grant you invincibility. You can still die from poisoning and you can still get burnt out after days of no sleep.",
        karmaValue:-5,
        type:'perk',
        requires:[],
        incompatible:['Frail']
    },
    {
        id:78,
        title:'Strength',
        image:'https://i.ibb.co/L9vdDG7/p17.jpg',
        description:"I can bless your body with superhuman strength. You can lift boulders and send men twice your height flying. But this boost does not grant you invulnerability. You can still die from sustaining too many injuries and you can't lift an entire manor. ",
        karmaValue:-5,
        type:'perk',
        requires:[],
        incompatible:['Frail']
    },
    {
        id:79,
        title:'Intelligence',
        image:'https://i.ibb.co/2kkJ4Ks/p18.jpg',
        description:"I can bless your mind with extraordinary intelligence. You have picture-perfect memory and you're able to see patterns in things that people normally wouldn't. But this boost does not make you omnipotent. You can't make the knowledge you don't know to appear in your mind nor does it make your judgment flawless. You still need to research if you want to be knowledgeable on a subject and you're still human, you can make mistakes in your decisions based on personal biases or opinions.",
        karmaValue:-5,
        type:'perk',
        requires:[],
        incompatible:['Baka!']
    },
    {
        id:80,
        title:'Beauty',
        image:'https://i.ibb.co/zJpN1h4/p19.jpg',
        description:"I can bless your body with otherworldly beauty. People will consider you as the jewel of the kingdom. You'll find that people are more willing to listen to you or curry your favor simply because of your looks. This doesn't mean that everyone will fall for your looks. This blessing can't force people to be attracted to you nor can it force people to obey you. You can still spoil your good looks with a terrible personality.",
        karmaValue:-5,
        type:'perk',
        requires:[],
        incompatible:[]
    },
    {
        id:81,
        title:'Artistic Enlightenment',
        image:'https://i.ibb.co/K9rKk0G/p20.jpg',
        description:"I can bless your mind with artistic enlightenment. You'll be able to craft superior painting, poetry, or any other artistic craft you wish to pursue. Be wary of having artist block. Don't let the praises go to your head though. This blessing can't force everyone to like your work if it isn't their cup of tea.",
        karmaValue:-5,
        type:'perk',
        requires:[],
        incompatible:['Artistically Illiterate']
    },
    {
        id:82,
        title:'Noble Etiquette',
        image:'https://i.ibb.co/2sWDX28/p21.jpg',
        description:"I can bless your mind with the knowledge of noble etiquette. You're naturally aware of the noble etiquette of the kingdoms and are instinctually pushed into doing the proper social actions in front of others.  You can expect it to not make you look like a fool and people will find it impossible to critique your manners. This blessing doesn't mean that you're actions will always be received positively or charming depending on the person you're with. Maybe they were just expecting the unexpected?",
        karmaValue:-5,
        type:'perk',
        requires:[],
        incompatible:['Offensive Manners']
    },
    {
        id:83,
        title:'Master Chef',
        image:'https://i.ibb.co/ZLfXS4h/p22.jpg',
        description:"I can bless your mind with amazing cooking skills. You'll be able to fry, grill, bake, and whatever cooking technique perfectly. For the most part, you're almost always guaranteed a delicious meal if you decided to make up a recipe or experiment. But you can't just make a perfect replica of a dish if you don't know how or without trial-and-error. This blessing can't force people to like your cooking.",
        karmaValue:-5,
        type:'perk',
        requires:[],
        incompatible:['Kitchen Disater']
    },
    {
        id:84,
        title:'Musical Genius',
        image:'https://i.ibb.co/BNNxcDN/p23.jpg',
        description:"I can bless your mind with remarkable musical skills. You'll be able to play any instrument you chose and be guaranteed to sound amazing. This also allows you to be a fantastic singer. Be wary of having artist block or straining yourself. Don't let the praises go to your head though. This blessing can't force everyone to like your work if it isn't their cup of tea. ",
        karmaValue:-5,
        type:'perk',
        requires:[],
        incompatible:['Tone Deaf']
    },
    {
        id:85,
        title:'Charming',
        image:'https://i.ibb.co/Bg5NQtV/p24.jpg',
        description:"I can bless your actions to always come across as charming. This doesn't mean that you'll always do the correct thing in social situations or talk with grace. If you were to make a mistake, most people are willing to overlook it because you were cute and other people find it hard to punish you because of your charm. People just find you naturally loveable and view your actions in a positive light. But please note that this blessing doesn't make people mindless. If you were caught doing a heinous crime or something unforgivable, you will still be harshly punished.",
        karmaValue:-5,
        type:'perk',
        requires:[],
        incompatible:['Everybody Hates Me','Dreary']
    },
    {
        id:86,
        title:'Divine Doctor',
        image:'https://i.ibb.co/nrxz1MG/p25.jpg',
        description:"Picking this blessing, I can grant you the skill of world-renowned doctors. You'll be capable of treating wounds and performing surgery. While this doesn't mean you can make the impossible happen, such as reviving the death or age rejuvenation, you can cure things that others have given up on.",
        karmaValue:-25,
        type:'perk',
        requires:[],
        incompatible:[]
    },
    {
        id:87,
        title:'CEO',
        image:'https://i.ibb.co/MGjt5Vv/p26.jpg',
        description:"With this blessing, I can grant you the keen mind needed to start and manage a business. This is purely for making a business and not mastery of the thing you are selling. If you are selling jewelry, it doesn't mean you can now make jewelry. You will have the makings of a successful CEO but this doesn't mean that business will always go smoothly. I simply give you the tools, it's up to you to use them.",
        karmaValue:-25,
        type:'perk',
        requires:[],
        incompatible:[]
    },
    {
        id:88,
        title:'Loving Home',
        image:'https://i.ibb.co/PMDgcbq/p27.jpg',
        description:"With this blessing, I can ensure you enter a kind household with those who would love and care for you. They may smother you a bit if you take on other blessings like Charming but for the most part, these people will love you unconditionally. This also extends to the staff. Your new family will tolerate a lot of your negative actions but if you end up treating them with hostility, they will distance themselves from you.",
        karmaValue:-10,
        type:'perk',
        requires:[],
        incompatible:['Everybody Hates Me','Mistrustful Household','Nobody Remembers Me']
    },
]

export const drawbacks:Mirror[] = [
    {
        id:90,
        title:'Everybody Hates Me',
        image:'https://i.ibb.co/vc2yLdb/d1.jpg',
        description:"Picking this drawback makes it that the people surrounding you view you in a negative light. They are naturally suspicious of you and are always critical of your actions. While it doesn't mean you can't make friends or even fall in love, it's an uphill battle as you try to prove your character to them. Just the slightest bit of mistrust can grow the gap you are trying to close.",
        karmaValue:50,
        type:'drawback',
        requires:[],
        incompatible:['Charming','Loving Home','Mary Sue Mode']
    },
    {
        id:91,
        title:'Nobody Remembers Me',
        image:'https://i.ibb.co/CtpmySb/d2.jpg',
        description:"Picking this drawback gives you a particular curse that you can't remove. Those who aren't around you for longer than three days end up forgetting who you are. Meeting them after this period ends up becoming a new experience for them. While you remember those you met, they never remember you if you don't stay close to remind them of your existence. This is great if you want to disappear but not so much if you want to make friends.",
        karmaValue:30,
        type:'drawback',
        requires:[],
        incompatible:['Everybody Knows Me','Loving Home','Mary Sue Mode']
    },
    {
        id:92,
        title:'Everybody Knows Me',
        image:'https://i.ibb.co/pbt6yBH/d3.jpg',
        description:"While this may seem like a blessing, this is very much a drawback. Your popularity is worldwide and everyone knows about you. Anything you do will spread like wildfire, good publicity or bad. Everyone will know when you visited the grocery store or accidentally trip over a stone. Nobody respects your privacy and you even have a fanatic Fanclub that stalks outside your home.",
        karmaValue:25,
        type:'drawback',
        requires:[],
        incompatible:['Nobody Remembers Me','Mary Sue Mode']
    },
    {
        id:93,
        title:'Magically Inept',
        image:'https://i.ibb.co/vQ9RGtS/d4.jpg',
        description:"By picking this drawback, you agree to lose your ability to learn magic. You can't even cast magic that's considered common knowledge among the populace. Your body is simply incompatible with it.<br><br>This is incompatible with Magic Expertise.",
        karmaValue:25,
        type:'drawback',
        requires:[],
        incompatible:['Magic Expertise I','Mary Sue Mode']
    },
    {
        id:94,
        title:'Pacifist',
        image:'https://i.ibb.co/hfHDtmZ/d5.jpg',
        description:"By picking this drawback, you dedicate your life to pacifism. You refuse to engage in any form of fighting and you always try to find a peaceful solution. You're expected to forgive those who do you wrong and give the benefit of the doubt. If you chose to go against this, you'll suffer excruciating pain in your heart until you find a peaceful solution. If you continue to push against your nature, you end up dying from a heart attack.",
        karmaValue:15,
        type:'drawback',
        requires:[],
        incompatible:['Mary Sue Mode']
    },
    {
        id:95,
        title:'Needles scare me!',
        image:'https://i.ibb.co/BrrtsDS/d6.jpg',
        description:"By picking this drawback, you gain a fear of sharp objects. Unable to pick up the sword or any other weapons that have a point, you're limited with what weapons you learn with the Weapon Mastery blessing. This makes Weapon Mastery III unattainable. This also includes cooking knives. While this doesn't lock you out of the Master Chef blessing, you will be expected to think of some workarounds with this. <br><br> Unfortunately, this is one phobia you can't get around. ",
        karmaValue:5,
        type:'drawback',
        requires:[],
        incompatible:['Weapon Mastery III','Mary Sue Mode']
    },
    {
        id:96,
        title:'Frail',
        image:'https://i.ibb.co/MZmMYqW/d7.jpg',
        description:"By picking this drawback, your body becomes sickly and frail. You find it difficult to build your strength and a common cold can leave you bedridden for a couple of days. While you could see this as a twisted boon in garnering pity from those who surround you, it'll be quite a pain to rely on others to get most things done. Unfortunately, this state isn't something you can improve with magical items or medicine. <br><br>This is incompatible with Stamina, Strength, Martial Art, and Weapon Mastery",
        karmaValue:35,
        type:'drawback',
        requires:[],
        incompatible:['Stamina','Strength','Martial Artist I','Weapon Mastery I','Mary Sue Mode']
    },
    {
        id:97,
        title:'Baka!',
        image:'https://i.ibb.co/rtkSLkp/d8.png',
        description:"By picking this drawback, your IQ drops to average (if you weren't above average) and you find yourself a little denser to things going around you. People call you a lot of things: An airhead, dull, simple... all of which are now true of you. This doesn't mean you are stupid, per see, but you are selective in your attention span. <br><br>This is incompatible with Intelligence.",
        karmaValue:5,
        type:'drawback',
        requires:[],
        incompatible:['Intelligence','Mary Sue Mode']
    },
    {
        id:98,
        title:'Clumsy',
        image:'https://i.ibb.co/fnhWxw8/d9.jpg',
        description:"This is the classic drawback heroines like to take on. You're clumsy at all the wrong times and trip on thin air. While this doesn't lock you out of having Noble Etiquette or other graceful blessings, this does make your actions a 50/50 on things ending up messy.",
        karmaValue:5,
        type:'drawback',
        requires:[],
        incompatible:['Mary Sue Mode']
    },
    {
        id:99,
        title:'Tone Deaf',
        image:'https://i.ibb.co/1rNSKPC/d10.jpg',
        description:"By taking this drawback, you become naturally tone-deaf. Your singing talent isn't all that great and any instrument in your hands sounds like nails on a chalkboard. Not even magical items that are supposed to sound good turn into noise pollution in your hands.<be><br>This is incompatible with Musical Genius.",
        karmaValue:5,
        type:'drawback',
        requires:[],
        incompatible:['Musical Genius','Mary Sue Mode']
    },
    {
        id:100,
        title:'Kitchen Disater',
        image:'https://i.ibb.co/fppWLjH/d11.png',
        description:"By taking this drawback, you become a mess in the kitchen. No matter what you do and despite any prior cooking knowledge, anything you try to make turns into an undiscernible charred nightmare. You can consider this drawback as a weapon if you think accidental food poisoning counts. <br><br>This is incompatible with Master Chef.",
        karmaValue:5,
        type:'drawback',
        requires:[],
        incompatible:['Master Chef','Mary Sue Mode']
    },
    {
        id:101,
        title:'Dreary',
        image:'https://i.ibb.co/mFQwKK3/d12.jpg',
        description:"Taking this drawback, your mannerisms are considered rather eerie and a bit scary. Even if you were doing something peaceful like knitting, people see it as a demonic summoning or placing a curse on someone you hate. While some people can learn to see past that bias, you can't change everyone's mind.<br><br> This is incompatible with Charming.",
        karmaValue:5,
        type:'drawback',
        requires:[],
        incompatible:['Charming','Mary Sue Mode']
    },
    {
        id:102,
        title:'Yandere Lover(s)',
        image:'https://i.ibb.co/fMvvTnn/d13.jpg',
        description:"By taking this drawback, any significant other you decide to date or marry ends up being a yandere. While they wouldn't kill you or harm you in any way, you'll find their obsessive tendencies to be too much. Probably a secret blessing for some people but for most, this is definitely a drawback.<br><br>This is incompatible with Bachelor(ette) Life and Forever Alone.",
        karmaValue:5,
        type:'drawback',
        requires:[],
        incompatible:['Bachelor(ette) Life','Forever Alone','Mary Sue Mode']
    },
    {
        id:103,
        title:'Bachelor(ette) Life',
        image:'https://i.ibb.co/tL934jB/d14.jpg',
        description:"By taking this drawback, you'll find that romantic love is simply impossible to achieve. Potential love interests find their soulmate in someone else and marriages end with the untimely death of your partner. It just seems like you and love are incompatible. At least you can still make friends.<br><br> You can't double this up with Forever Alone.",
        karmaValue:5,
        type:'drawback',
        requires:[],
        incompatible:['Forever Alone','Yandere Lover(s)','Mary Sue Mode']
    },
    {
        id:104,
        title:'Forever Alone',
        image:'https://i.ibb.co/6Bh4SS3/d15.jpg',
        description:"A rough drawback to take, especially if you take impacting drawbacks like Everybody Hates Me or Dreary. With this drawback, any sort of connections you make simply don't last. Friends move on with their lives, acquaintances only talk to you in passing, family forgets your existence, and romantic partners are out of the question. You'll live a silent and lonely life. <br><br>You can't double this up with The Bachelor(ette) Life.<br><br>This is incompatible with the One True Love and Harem reward.",
        karmaValue:20,
        type:'drawback',
        requires:[],
        incompatible:['Bachelor(ette) Life','One True Love','Harem','Mary Sue Mode']
    },
    {
        id:105,
        title:'Offensive Manners',
        image:'https://i.ibb.co/j68PGSG/d16.jpg',
        description:"By taking this drawback, you find it simply impossible to learn the etiquette of this new world. Which fork is for salad and which fork is for steak... it's all so difficult to learn! While this is fine for a commoner, you'll have a hard time mingling with the upper echelon. <br><br> This is incompatible with Noble Etiquette. ",
        karmaValue:5,
        type:'drawback',
        requires:[],
        incompatible:['Noble Etiquette','Mary Sue Mode']
    },
    {
        id:106,
        title:'Artistically Illiterate',
        image:'https://i.ibb.co/J5r0tVY/d17.jpg',
        description:"By taking this drawback, your art skills become laughable. You can only make vague stick figures. Anything more and people will mistake what you made. Is this a hippo? Oh, an elephant? That is certainly... creative. Even written words like poetry sound like something that belongs in a children's book.<br><br>This is incompatible with Artistic Enlightenment.",
        karmaValue:5,
        type:'drawback',
        requires:[],
        incompatible:['Artistic Enlightenment','Mary Sue Mode']
    },
    {
        id:107,
        title:'Forgetful',
        image:'https://i.ibb.co/ZMbCm6S/d18.webp',
        description:"By taking this drawback, you find important details to be a challenge to remember. Even if you study something, if it's not committed to heart, then you forget it as soon as you try to remember it. Your surface-level memory is unreliable and, while you might know what a thing is, you can't remember how it's made or what materials it uses. You need to work twice as hard to memorize anything.<br><br>This is incompatible with Intelligence.",
        karmaValue:5,
        type:'drawback',
        requires:[],
        incompatible:['Intelligence','Mary Sue Mode']
    },
    {
        id:108,
        title:'The Ultimate Rival',
        image:'https://i.ibb.co/wK4cCPq/d19.jpg',
        description:"By taking this drawback, the rival you are meant to face off doubles in difficulty. They're smarter, stronger, and faster. Yes, that does mean they are at a higher expertise if you didn't pick the upgrades to magic, weapon mastery, or martial arts. They have a lead in the race and have the blessings you didn't take. They aren't immortal or impossible to beat but you certainly got your work cut out for you.",
        karmaValue:50,
        type:'drawback',
        requires:[],
        incompatible:['Mary Sue Mode']
    },
    {
        id:109,
        title:'Your Kryptonite',
        image:'https://i.ibb.co/n0wHGRX/d20.jpg',
        description:"By taking this drawback, there is a certain object or person who's your ultimate weakness. You don't know what or who it is until you come across it but you can at least pick which version you want. If it's an object, it leaves you paralyzed in fear and saps you of your energy. And unfortunately, it isn't a one-of-a-kind object. If it's a person, you grow an instant soft spot for them and cherish them dearly. But because of that, any enemy or rival will take advantage of that and try to harm them. Seeing this person in danger makes you have tunnel vision and irrational enough to do everything you can to protect them.",
        karmaValue:15,
        type:'drawback',
        requires:[],
        incompatible:['Mary Sue Mode']
    },
    {
        id:110,
        title:"You're the yandere",
        image:'https://i.ibb.co/q7Bkfrt/d22.jpg',
        description:"By taking this drawback, we can crank up that protectiveness you feel around this special person and make you a yandere for them. For the most part, you are in control of yourself but with this person, you can't help but go a little... insane.",
        karmaValue:15,
        type:'drawback',
        requires:['Your Kryptonite','Mary Sue Mode'],
        incompatible:[]
    },
    {
        id:111,
        title:'Mistrustful Household',
        image:'https://i.ibb.co/xfSbMgY/d21.jpg',
        description:"By taking this drawback, the family you live with, in this new world, hates you. A rather traditional drawback for most heroines. This hatred extends to the staff in the home. Unfortunately, you won't be able to change their mind about you but this hatred is only located for those of the household.<br><br>This is incompatible with Loving Home.",
        karmaValue:10,
        type:'drawback',
        requires:[],
        incompatible:['Loving Home','Mary Sue Mode']
    },
   

]

export const rewards:Mirror[] = [
    {
        id:120,
        title:'Return Home',
        image:'https://i.ibb.co/SRT5PYq/e1.jpg',
        description:"Despite all the hardships you went through in your second life, you decided to return to your homeworld. I can’t fault you for that. No one can forget their first life; especially if you had friends and family that you cared about. I’m sure you noticed how pricy this selection is. Considering that this path is one-way, it takes a lot of power to send you back. We must reconstruct your body or send you back in time before your untimely disappearance. This is the only reward you can take if you pick this. <br><br>Please note, while you can use all your points to guarantee your return, you are still forced to successfully complete your second life. Since it took a lot to send you to your new world, the deities won’t let you easily return by trying to kill yourself. ",
        karmaValue:-100,
        type:'reward',
        requires:[],
        incompatible:['Stay Here Forever']
    },
    {
        id:121,
        title:'Stay Here Forever',
        image:'https://i.ibb.co/YPYXc97/e2.jpg',
        description:"So, you decided to stay in your new world forever. That was a given considering how much it cost to return home. This seems to be the default option, so you may be wondering why you can purchase it. The reason is simple: it guarantees that you won’t be sent on to a third life and avoid going through this hassle all over again. Sometimes, a particular deity would string you along for so many lifetimes before they grow bored of you. While you can’t avoid your current destiny, you can at least be assured that you’ll be left to rest at the end of your lifespan. ",
        karmaValue:-5,
        type:'reward',
        requires:[],
        incompatible:['Return Home']
    },
    {
        id:122,
        title:'One True Love',
        image:'https://i.ibb.co/NLQRT09/e3.jpg',
        description:"While the sign of this option doesn’t mean that finding love will be impossible for you, this does at least promise that the person you end up with is your soulmate. Dating is hard and surrounded by so many people, it’s hard to distinguish who to trust. By purchasing this, you can guarantee that your love is true and your ideal partner. <br><br>For those who took the Yandere Lover drawback, your one true love will always be a yandere. While this option does make your future partner exhibit traits you desire in a person, they will still contain yandere traits. At least with this option, he will always obediently obey you.",
        karmaValue:-15,
        type:'reward',
        requires:[],
        incompatible:['Forever Alone','Your Own Harem']
    },
    {
        id:123,
        title:'Your Own Harem',
        image:'https://i.ibb.co/85872LQ/e4.jpg',
        description:"Instead of having one, true love, you will have a harem of men who heeds every beck and call. While you could technically get one without this option, it doesn’t guarantee all of them getting along and fighting for your affections. By purchasing this you can have the ease of mind in knowing that they’ll all get along and equally dote on you. But it only works as long as you don’t show bias to one man. You also decide when your harem grows too big and can place a cap on how many can join.<br><br>For those who took the Yandere Lover drawback, you have at least one yandere harem member but you do not know who. He blends in well while pulling strings behind your back to be the only guy by your side. The more members you take in, the higher the odds of including another one. While this may seem dire, if you manage to discover who’s the yandere among your harem and confront him, you can re-install peace as he won’t put up any fight. ",
        karmaValue:-40,
        type:'reward',
        requires:[],
        incompatible:['One True Love','Forever Alone']
    },
    {
        id:124,
        title:'Successful Business',
        image:'https://i.ibb.co/26pyfYS/e5.jpg',
        description:"For those with a business in mind, this option guarantees the success of your business. While this option doesn’t mean it won’t happen if you don’t buy it, it just means there is a chance of your business failing if you’re not careful.",
        karmaValue:-15,
        type:'reward',
        requires:[],
        incompatible:[]
    },
    {
        id:125,
        title:'Never Ending Adventuring',
        image:'https://i.ibb.co/s2rPSQb/e6.jpg',
        description:"This is for those who desire the thrill of action and adventure. After your main mission is over, every day is an adventure where something amazing happens. You can travel the world or discover a forgotten species. While you could do all this without this option, this guarantees that all adventures are light-hearted. No matter what it is, you’ll be alive and healthy the next day for your next adventure. Of course, you can take a rest if you want. But if you’re ever bored, a helpless prince or princess might knock on your door and ask for your help.",
        karmaValue:-15,
        type:'reward',
        requires:[],
        incompatible:['Living a Simple Life']
    },
    {
        id:126,
        title:'Living a Simple Life',
        image:'https://i.ibb.co/C7vfcg5/e7.jpg',
        description:"For those who want to live a low and quiet life. No adventure and no disruption. You live a happy and healthy life until your death.",
        karmaValue:-5,
        type:'reward',
        requires:[],
        incompatible:['Never Ending Adventuring']
    },
    {
        id:127,
        title:'Noble Birthright',
        image:'https://i.ibb.co/YNJpPB1/e8.jpg',
        description:"For those who crave power, control, and prestige. This option guarantees a royal lineage or future rulership. While you could become a ruler by your own means, this option sows this outcome into your destiny. It also guarantees that your ruling will bring an era of peace and prosperity with no chance of rebellion.",
        karmaValue:-40,
        type:'reward',
        requires:[],
        incompatible:[]
    },

]

/*








 */



export const testSelection:Mirror[]  = [
    {   id: 12, title: "Transmigration", 
        image: "../../../assets/Images/2.jpeg",
        description: "I see… you’re an unfortunate soul that found themselves in a body that doesn’t belong to you. <br><br> Unlike an age regressor or a reincarnator, you were once an ordinary human before suddenly getting pulled into a world that you don’t originate in. Your life there starts at the exact point you woke up in your new body. All evidence of the past soul is now erased and the only one who remains is yourself. A challenging start since you don’t necessarily have the same foundation as the others.<br><br> You might not have a free perk like the other options, but you're a wild card. With extra points, you can make the person who you want to be.",
        ​​incompatible:  [],
        karmaValue: 65,
        requires:  [],
        selected: true,
        type: "type"
        ​},
        {description: "Similar to the world you came from but isn’t quite it, you entered a parallel world. Up to you if it’s urban fantasy or not. Undoubtedly an easy world to travel to as you know how things work here. You can pick where you end up to. ",

        desktopImage: "https://i.ibb.co/B2pXvst/modern.jpg",
        
        id: 21,
        
        image: "../../../assets/Images/w5.jpeg",
        
        incompatible: [],
        
        karmaValue: 0,
        
        requires: [],
        
        selected: true,
        
        title: "Modern",
        
        type: "world"},
        {
            description: "So, the world you’re going to was something you created before? Or maybe you want to make something up on the spot? Either way, this world was crafted by you and you know it by heart. Gain the Script perk for free.",

            id: 25,

            image: "../../../assets/Images/o1.jpeg",

            incompatible: [],

            karmaValue: -10,

            requires: [],

            selected: true,

            title: "Original",

            type: "world",

        },
        {
            description: "So, you decided to become the villainess then. Quite the popular selection... not that I blame you for picking it. It is quite fun to play the bad guy… No? You don’t want to?<br><br>Regardless, this is a challenging role to take on but not impossible. Will you be able to escape your pre-written destiny? I believe in you. As a guide, trust me when I say that your path isn’t set in stone.",

            id: 32,
            
            image: "https://i.ibb.co/WnsTPCQ/r5.jpg",
            
            incompatible: [],
            
            karmaValue: 20,
            
            requires: [],
            
            selected: true,
            
            title: "Villainess",
            
            type: "role",
            
        },
        {
            description: "Olivia Myers, the youngest and spunky journalist in her college's newspaper. She is well-liked among her peers though most people complain that she's too nosy and invasive with her journalism. Her childhood friend preaches that the most and often warn her that one of these days, she'll find a scoop that she'll die for. Finding it nonsense, she decided to have a surprise visit to her friend's place to have some fun. What she stumbled upon was her worst nightmare. A dead body and blood everywhere. In the center of it was her friend... with an ax in their hands. They were right. She was going to find something out and die for it. ",

            id: 45,

            image: "https://i.ibb.co/YPx6ny3/z10.jpg",

            incompatible: [ "Traditional Isekai" ],

            karmaValue: 0,

            requires:[ "Steampunk", "Modern", "Post-Apocalypse"],

            selected: true,

            title: "Olivia Myers",

            type: "character",
        },
        {

description: "This is the entry-level skill needed to be able to use magic. You’re capable of creating water and minor feats of magic. While you don’t need the upgrades to become a master magic user, you’ll take just as long as a common user to learn how to use magic. If taken with the Frail and similar drawbacks, you’ll be unable to develop your magic skill. ",
id: 64,

image: "https://i.ibb.co/5TJ5gVs/p4.jpg",

incompatible: [ "Magically Inept" ],

isBroken: false,

karmaValue: -5,

requires: [],

selected: true,

title: "Magic Expertise I",

type: "perk",

upgrade: "Magic Expertise II",
        },
        {
            description: "This is the standard skill of the majority of spellcasters. You can do basic skills such as creating or destroying water and more advanced skills such as enchanting items with lesser charms. Instead of learning from scratch, you have an established magical foundation. While you don’t need the final upgrade to become a master magic user, you still have to train rigorously if that is your goal. Even then, it isn't guaranteed to happen. ",

            id: 65,
            
            image: "https://i.ibb.co/YfhqGX4/p5.jpg",
            
            incompatible: [],
            
            isBroken: false,
            
            karmaValue: -15,
            
            requires: [ "Magic Expertise I" ],
            
            selected: true,
            
            title: "Magic Expertise II",
            
            type: "perk",
            
            upgrade: "Magic Expertise III",
            
        },
        {
            description: "By picking this drawback, you dedicate your life to pacifism. You refuse to engage in any form of fighting and you always try to find a peaceful solution. You're expected to forgive those who do you wrong and give the benefit of the doubt. If you chose to go against this, you'll suffer excruciating pain in your heart until you find a peaceful solution. If you continue to push against your nature, you end up dying from a heart attack.",

id: 94,

image: "https://i.ibb.co/hfHDtmZ/d5.jpg",

incompatible: [],

karmaValue: 15,

requires: [],
selected: true,

title: "Pacifist",

type: "perk",

        },
        {
            description: "This is the classic drawback heroines like to take on. You're clumsy at all the wrong times and trip on thin air. While this doesn't lock you out of having Noble Etiquette or other graceful blessings, this does make your actions a 50/50 on things ending up messy.",

            id: 98,
            
            image: "https://i.ibb.co/fnhWxw8/d9.jpg",
            
            incompatible: [],
            
            karmaValue: 5,
            
            requires: [],
            
            selected: true,
            
            title: "Clumsy",
            
            type: "perk"
            
        },
        {
            description: "This is the entry-level needed for hand-to-hand combat. You know the basic moves to defend yourself from attacks but you’re still capable of being overpowered by a strong enemy or by numbers. You don’t need to take the upgrades for this skill to become better at fighting but you are expected to train to earn that skill. ",

            id: 68,
            
            image: "https://i.ibb.co/NCDstwk/p7.png",
            
            incompatible: [ "Frail" ],
            
            isBroken: false,
            
            karmaValue: -5,
            
            requires: [],
            
            selected: true,
            
            title: "Martial Artist I",
            
            type: "perk",
        },
        {
            description: "I can bless your mind with extraordinary intelligence. You have picture-perfect memory and you're able to see patterns in things that people normally wouldn't. But this boost does not make you omnipotent. You can't make the knowledge you don't know to appear in your mind nor does it make your judgment flawless. You still need to research if you want to be knowledgeable on a subject and you're still human, you can make mistakes in your decisions based on personal biases or opinions.",

id: 79,

image: "https://i.ibb.co/2kkJ4Ks/p18.jpg",

incompatible: [ "Baka!" ],

isBroken: false,

karmaValue: -5,

requires: [],

selected: true,

title: "Intelligence",

type: "perk"
        },
        {
            description: "So, you decided to stay in your new world forever. That was a given considering how much it cost to return home. This seems to be the default option, so you may be wondering why you can purchase it. The reason is simple: it guarantees that you won’t be sent on to a third life and avoid going through this hassle all over again. Sometimes, a particular deity would string you along for so many lifetimes before they grow bored of you. While you can’t avoid your current destiny, you can at least be assured that you’ll be left to rest at the end of your lifespan. ",

id: 121,

image: "https://i.ibb.co/YPYXc97/e2.jpg",

incompatible: [],

karmaValue: -5,

requires: [],

selected: true,

title: "Stay Here Forever",

type: "reward"
        }

]




/*​

description: "This is the entry-level needed for using a weapon. You know the basic moves to defend yourself from attacks but you’re still capable of being overpowered by a strong enemy or by numbers. You don’t need to take the upgrades for this skill to become better at fighting but you are expected to train to earn that skill. <br><br>Please note that it doesn’t necessarily have to be swords. You can switch out your desired weapon to be an ax or a gun (if it exists in your world). Either way, this option only allows beginner-level knowledge of how to use the weapon."

id: 71

image: "https://i.ibb.co/BBTN7wN/p10.jpg"

incompatible: [ "Frail" ]

isBroken: false

karmaValue: -5

requires: []

selected: true

title: "Weapon Mastery I"

type: "perk"

​
11: Object { id: 69, title: "Martial Artist II", image: "https://i.ibb.co/DDVmGmj/p8.jpg", … }

description: "This is the standard level of skill most martial artists have. You have no trouble in taking on two to three men at a time but you can still be overpowered if you can’t keep up the stamina to fight. This is also the required stage needed to incorporate magic or mysticism into your fighting style if you own the necessary skill. But please know that, if you’re capable of doing that, so is the enemy. <br><br>You don't need the additional upgrade to become a master in hand-to-hand combat but you are expected to train rigorously if you desire to become a master. Even then it doesn't guarantee your success."

id: 69

image: "https://i.ibb.co/DDVmGmj/p8.jpg"

incompatible: []

isBroken: false

karmaValue: -15

requires: [ "Martial Artist I" ]

selected: true

title: "Martial Artist II"

type: "perk"

​
12: Object { id: 72, title: "Weapon Mastery II", image: "https://i.ibb.co/wL0bM41/p11.jpg", … }

description: "This is the standard level of skill most weapon fighters have. You have no trouble in taking on two to three men at a time but you can still be overpowered if you can’t keep up the stamina to fight. This is also the required stage needed to incorporate magic or mysticism into your fighting style if you own the necessary skill. But please know that, if you’re capable of doing that, so is the enemy. <br><br>You don't need the additional upgrade to become a master in fighting with weapons but you are expected to train rigorously if you desire to become a master. Even then it doesn't guarantee your success."

id: 72

image: "https://i.ibb.co/wL0bM41/p11.jpg"

incompatible: []

isBroken: false

karmaValue: -15

requires: [ "Weapon Mastery I" ]

selected: true

title: "Weapon Mastery II"

type: "perk"

​
13: Object { id: 77, title: "Stamina", image: "https://i.ibb.co/B6dyRsp/p16.jpg", … }

description: "I can bless your body with superhuman stamina. You'll never get sick and you always have enough energy to pull an all-nighter. But this boost does not grant you invincibility. You can still die from poisoning and you can still get burnt out after days of no sleep."

id: 77

image: "https://i.ibb.co/B6dyRsp/p16.jpg"

incompatible: [ "Frail" ]

isBroken: false

karmaValue: -5

requires: []

selected: true

title: "Stamina"

type: "perk"

​
14: Object { id: 79, title: "Intelligence", image: "https://i.ibb.co/2kkJ4Ks/p18.jpg", … }



​
15: Object { id: 80, title: "Beauty", image: "https://i.ibb.co/zJpN1h4/p19.jpg", … }

description: "I can bless your body with otherworldly beauty. People will consider you as the jewel of the kingdom. You'll find that people are more willing to listen to you or curry your favor simply because of your looks. This doesn't mean that everyone will fall for your looks. This blessing can't force people to be attracted to you nor can it force people to obey you. You can still spoil your good looks with a terrible personality."

id: 80

image: "https://i.ibb.co/zJpN1h4/p19.jpg"

incompatible: []

karmaValue: -5

requires: []

selected: true

title: "Beauty"

type: "perk"

​
16: Object { id: 83, title: "Master Chef", image: "https://i.ibb.co/ZLfXS4h/p22.jpg", … }

description: "I can bless your mind with amazing cooking skills. You'll be able to fry, grill, bake, and whatever cooking technique perfectly. For the most part, you're almost always guaranteed a delicious meal if you decided to make up a recipe or experiment. But you can't just make a perfect replica of a dish if you don't know how or without trial-and-error. This blessing can't force people to like your cooking."

id: 83

image: "https://i.ibb.co/ZLfXS4h/p22.jpg"

incompatible: [ "Kitchen Disater" ]

isBroken: false

karmaValue: -5

requires: []

selected: true

title: "Master Chef"

type: "perk"

​
17: Object { id: 84, title: "Musical Genius", image: "https://i.ibb.co/BNNxcDN/p23.jpg", … }

description: "I can bless your mind with remarkable musical skills. You'll be able to play any instrument you chose and be guaranteed to sound amazing. This also allows you to be a fantastic singer. Be wary of having artist block or straining yourself. Don't let the praises go to your head though. This blessing can't force everyone to like your work if it isn't their cup of tea. "

id: 84

image: "https://i.ibb.co/BNNxcDN/p23.jpg"

incompatible: [ "Tone Deaf" ]

isBroken: false

karmaValue: -5

requires: []

selected: true

title: "Musical Genius"

type: "perk"

​
18: Object { id: 85, title: "Charming", image: "https://i.ibb.co/Bg5NQtV/p24.jpg", … }

description: "I can bless your actions to always come across as charming. This doesn't mean that you'll always do the correct thing in social situations or talk with grace. If you were to make a mistake, most people are willing to overlook it because you were cute and other people find it hard to punish you because of your charm. People just find you naturally loveable and view your actions in a positive light. But please note that this blessing doesn't make people mindless. If you were caught doing a heinous crime or something unforgivable, you will still be harshly punished."

id: 85

image: "https://i.ibb.co/Bg5NQtV/p24.jpg"

incompatible: [ "Everybody Hates Me", "Dreary" ]

isBroken: false

karmaValue: -5

requires: []

selected: true

title: "Charming"

type: "perk"

​
19: Object { id: 121, title: "Stay Here Forever", image: "https://i.ibb.co/YPYXc97/e2.jpg", … }



​
length: 20
​
<prototype>: []
ending.component.ts:15:12


*/