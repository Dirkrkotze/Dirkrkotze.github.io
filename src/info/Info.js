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


export const info = {
    firstName: "Dirk",
    lastName: "Kotze",
    initials: "DRK", 
    position: "interested in:",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(110deg, ${colors})`, 
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
    ],
    bio: "Hello! I'm Dirk. I'm an Actuarial Science graduate specialising in the fields of Actuarial Science, Mathematical statistics, Statistical Learning, Financial Analyis. I am excited to apply myself in the financial world combining the concepts taught in Actuarial Science with data science and quantitative analysis. As the fourth industrial revolution dawns upon us with AI and machine learning leading the way, I am looking forward to seeing how I can provide value to you by applying the knowledge and skills that I have accumulated. ",
    skills:
        {
            proficientWith: ['Python', 'R', 'Statistica', 'VBA', 'Java', 'Latex', 'SAS' , 'html', 'css'],
            exposedTo: ['nodejs', 'VIM', 'Github', 'pandas']
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
            title: "Projects are not available at this point in time",
            source: "https://github.com/dirkrkotze", // this should be a link to the **repository** of the project, where the code is hosted.
            image: projects
        }

    ],
    contact: [
        <form>
            <input type= "text" name= "sender_name" required placeholder= "your name"/>
            <input type= "email" name= "sender_email" required placeholder="your email address"/>
            <textarea name= "message" required placeholder="your message"/>
            <button type="submit" > Submit message</button>
        </form>


    ]
    
}