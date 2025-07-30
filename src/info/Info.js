import self from "../img/self.png"
import socialFast from "../img/socialFast.png"
import liveWord from "../img/liveWord.png"
import game from "../img/game.png"
import tracker from "../img/tracker.png"
import hospitEase from "../img/hospitEase.png"
import IdVerification from "../img/IdVerification.png"
import jainCatering from "../img/jainCatering.png"
import job from "../img/job.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export let singlePage = false;

export const info = {
    firstName: "Md Azam",
    lastName: "Siddiqui",
    initials: "W", 
    position: "A Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the India'
        },
        {
            emoji: "💼",
            text: "Final Year Student Of MAIT"
        },
        {
            emoji: "📧",
            text: "azamnba1@gmail.com"
        },   
    ],
    socials: [
        // {
        //     link: "https://www.instagram.com/_aazam_s/",
        //     icon: 'fa fa-facebook',
        //     label: 'facebook'
        // },
        {
            link: "https://www.instagram.com/_aazam_s/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "http://github.com/AzamSiddiq/",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://drive.google.com/file/d/1NkJ_rTekNa32DoR-IbCLPaY5hvcWSf1j/view?usp=drive_link", // Replace with the actual URL to your resume (e.g., a PDF hosted online)
            icon: "fa fa-file",
            label: 'Resume'
        },
        {
            link: "https://www.linkedin.com/in/md-azam-siddiqui-120229230/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://x.com/_aazam_s",
            icon: "fa fa-twitter",
            label: 'twitter'
        },

    ],
    bio: "👋 Hi, I'm Azam siddiqui! \n I'm a final year student at MAIT with a passion for blending business and technology. \nFascinated by AI, I explore how it transforms industries and solves real-world problems.🚀 With curiosity and an eye for innovation, I'm ready to turn ideas into impactful solutions.Let's connect and build the future!",
    skills:
        {
            proficientWith: ['javascript','java', 'react', 'git', 'github', 'nodejs', 'express','AWS', 'MongoDb', 'Google Sheet'],
            exposedTo: ['python','tailwind', 'VS Code', 'Postgress', 'numpy', 'mongoDb','excel']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'travelling',
            emoji: '🌄'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'listeing music',
            emoji: '🎧'
        }

    ],
    portfolio: [
        {
            title: "JobRem: project to maintain track of applied jobs",
            live: "youtube link", 
            source: "https://github.com/AzamSiddiq/JobRem",
            image: job
        },
        {
            title: "Digital Id Verification",
            image: jainCatering
        },
    ]
}
