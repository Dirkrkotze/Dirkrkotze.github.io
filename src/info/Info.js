import self from "../img/self.png"
import projects from "../img/projects.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
export let theme = {
    backgroundColor: '#151515',
    textColor: '#ffffff',
    navColor: '#2f2f2f',
    pageNav: '#444444',
    navOpacity: 0.8,
    activeButton:'#888888',
    inactiveButton:'#bbbbbb',
    form:'#e5e5e5'
};
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Dirk",
    lastName: "Kotze",
    initials: "DRK", // the example uses first and last, but feel free to use three or more if you like.
    position: "interest in:",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(110deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '✔',
            text: 'Actuarial Science and Financial Risk Management'
        },
        {
            emoji: '✔',
            text: 'Mathematical Statistics',
            pagesIndex:1
        },
        {
            emoji: "✔",
            text: "Machine learning and Statistical learning",
            pagesIndex:2
        },
        {
            emoji: "✔",
            text: "Investment management and Quantitative/Financial Analysis"
        }
    ],
    socials: [
        {
            link: "https://instagram.com/dirkrkotze",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/dirkrkotze",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Dirk. I'm an Actuarial Science graduate specialising in the fields of Actuarial Science, Mathematical statistics, Statistical Learning, Financial Analyis. I am excited to apply myself in the financial world combining the concepts taught in Actuarial Science with data science and quantitatice analysis. As the fourth industrial revolution dawns upon us with AI and machine learning leading the way, I am looking forward to seeing how I can provide value to you by applying the knowledge and skills that I have accumulated. ",
    skills:
        {
            proficientWith: ['Python', 'R', 'Statistica', 'VBA', 'Java', 'Latex', 'SAS' , 'github', 'html5', 'css3'],
            exposedTo: ['nodejs', 'VIM', 'pandas']
        },
        hobbies: [
            {
                label: 'Golf, rowing, rock climbing',
                
            },
            {
                label: 'Sudoku, riddles, logic puzzles',
                
            },
            {
                label: 'Catching up with friends, meeting new people',
                
            }
        ],
    portfolio: [
        {
            name: "Tea Grading Scorecard",
            //image: proj4,
            desc: 'The "Scorecard" application is a paid project financed by the faculty of AgriScience, at Stellenbosch University. The department expressed the need to digitize their research and development pipeline concerning the manufacturing of tea products. The application provides an interface for experts to complete an e-scorecard which is stored directly on the application. Completed scorecards can be either individually or bulk exported to customized PDF or XLSX documents. The application also provides a robust sorting and searching algorithm to identify completed e-scorecards. The project source code can not be made public as this is a paid project, though a viewing may be arranged at the request of a future potential employer.',
            tags: ['tag1', 'tag2']
        },
    ],
    
    //hobbies: [
      //  {
        //    label: 'reading',
          //  emoji: '📖'
        //},
        //{
        //    label: 'theater',
 //           emoji: '🎭'
 //       },
 //       {
 //           label: 'movies',
 //           emoji: '🎥'
 //       },
 //       {
 //           label: 'cooking',
 //           emoji: '🌶'
 //       }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
   // ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Projects are not available at this point in time",
            source: "https://github.com/dirkrkotze", // this should be a link to the **repository** of the project, where the code is hosted.
            image: projects
        }
    ]
}