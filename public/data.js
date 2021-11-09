export const ABOUTME_DATA = {
    name: "Xaver",
    surname: "Gruber",
    birthday: "16.11.1992",
    portrait: "bild",
    description: "Hi my name is Xaver and i am an aspiring Web Developer from Vienna."
};

export const SKILLS_DATA = {
    skills: [{
            skill: "HTML",
            icon: "html.svg"
        },
        {
            skill: "CSS",
            icon: "css.svg"
        },
        {
            skill: "JAVASCRIPT",
            icon: "javascript.svg"
        },
        {
            skill: "JAVA",
            icon: "java.svg"
        },
        {
            skill: "SQL",
            icon: "sql.svg"
        },
        {
            skill: "ARDUINO",
            icon: "arduino.svg"
        }
    ],
};

export const WORK_EXPERIENCE_DATA = [{
        start: "April 2019",
        end: "Octobre 2019",
        description: "Tourist Guide",
        name: "Wiener Tourismusverband",
        location: "Airport Vienna, Austria",
    },
    {
        start: "September 2018",
        end: "February 2019",
        description: "Cashier and Customer Service",
        name: "Peek & Cloppenburg",
        location: "Berlin Leipziger Platz, Germany"
    },
    {
        start: "November 2010",
        end: "September 2018",
        description: "Cashier and Customer Service",
        name: "Peek & Cloppenburg",
        location: "Vienna, Austria"
    },
];

export const EDUCATION_DATA = [{
        start: "2021",
        end: "2022",
        description: "Certificate Course for Web Development",
        name: "FH Kärnten",
        location: "Kärnten, Austria"
    },
    {
        start: "2019",
        end: "ongoing",
        description: "College for Information Technology",
        name: "HTL Wien West",
        location: "Vienna, Austria"
    },
    {
        start: "2009",
        end: "2011",
        description: "High School",
        name: "BRG Hegelgasse 14",
        location: "Vienna, Austria"
    },
    {
        start: "2003",
        end: "2009",
        description: "High School",
        name: "BG Tulln an der Donau",
        location: "Tulln an der Donau, Austria"
    },
    {
        start: "1999",
        end: "2003",
        description: "Elementary School",
        name: "Volksschule Sieghartskirchen",
        location: "Sieghartskirchen, Austria"
    }
];

export const INTERESTS_DATA = [{
        hobby: "Playing Guitar",
    },
    {
        hobby: "Reading",
    },
    {
        hobby: "Running",
    },
    {
        hobby: "Bouldering",
    }
];

const PROJECTS_DATA = [{
        type: "webapp",
        name: "xaver.com",
        picture: "beach.jpg",
        description: "this is a   blabla",
        link: "url",
    },
    {
        type: "blogsite",
        name: "nkl.com",
        picture: "banana.jpg",
        description: "this is a site  blabla",
        link: "url",
    },
    {
        type: "ecommerce",
        name: "löll.com",
        picture: "wireframing.jpg",
        description: "this  a site  blabla",
        link: "url",
    },
    {
        type: "blogsite",
        name: "nkl.com",
        picture: "computer.jpg",
        description: "this is a site  blabla",
        link: "url",
    },
    {
        type: "blogsite",
        name: "nkl.com",
        picture: "develop.jpg",
        description: "this is a   blabla",
        link: "url",
    },
    {
        type: "blogsite",
        name: "nkl.com",
        picture: "ecommerce.jpg",
        description: "this is a  about blabla",
        link: "url",
    },
    {
        type: "blogsite",
        name: "nkl.com",
        picture: "skater.jpg",
        description: "this is a  about blabla",
        link: "url",
    },
    {
        type: "blogsite",
        name: "nkl.com",
        picture: "flowers.jpg",
        description: "this is a  about blabla",
        link: "url",
    },
    {
        type: "blogsite",
        name: "nkl.com",
        picture: "purple.jpg",
        description: "this is a  about blabla",
        link: "url",
    },
];

{/* <h2>Skills</h2>
                            <div x-data="SKILLS_DATA">
                                <template x-for="skill in SKILLS_DATA">
                                    <div>
                                        <img src="`img/skills/${skill.icon}`" alt="">
                                        <div x-text="skill.skill"></div>
                                    </div>



                            </div>  */}