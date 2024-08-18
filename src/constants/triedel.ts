import type {Component} from "vue";
import {
    IconCockroachDB, IconElectron, IconGit,
    IconGolang,
    IconJavaScript,
    IconLinkedIn, IconMySQL, IconNodeJS, IconNpm,
    IconOracle, IconPostgreSQL, IconSpringBoot,
    IconTailwindCSS,
    IconTypeScript,
    IconVueJS,
    IconXing
} from "@/assets/icons/fill";

interface PersonalData {
    firstname: string;
    lastname: string;
    birthday: Date;
    birthplace: string;
    nationality: string;
    languages: LanguageData[];
    street: string;
    zipCode: string;
    city: string;
    email: string;
    mobile: string;
    socials: SocialData[];
    skillset: Skill[];
    career: CareerData[];
}
interface LanguageData {
    language: string;
    level: string;
}

interface SocialData {
    name: string;
    icon: Component | string;
    url: string;
}

interface Skill {
    name: string;
    short: string;
    icon?: Component | string;
    strength: number;
}

interface CareerData {
    title: string;
    subtitle?: string;
    institution?: {
        title: string;
        url: string;
    };
    finalGrade?: number;
    description?: string;
    start: string;
    end?: string;
    ongoing?: boolean;
}

export const Triedel: PersonalData = {
    firstname: "Thomas",
    lastname: "Riedel",
    birthday: new Date("04-04-1997"),
    birthplace: "Oldenburg",
    nationality: "german",
    languages: [
        {
            language: "german",
            level: "native",
        },
        {
            language: "english",
            level: "fluent",
        },
        {
            language: "russian",
            level: "basic",
        },
    ],
    street: "Pellwormer Weg 1",
    zipCode: "26131",
    city: "Oldenburg",
    email: "thomasriedel.privat@gmail.com",
    mobile: "+49 162 219 2591",
    socials: [
        {
            name: 'LinkedIn',
            icon: IconLinkedIn,
            url: 'https://www.linkedin.com/in/thomas-riedel-b8a35a312/'
        },
        {
            name: 'XING',
            icon: IconXing,
            url: 'https://www.xing.com/profile/Thomas_Riedel034162'
        },
    ],
    skillset: [
        {
            name: "Vue.js",
            short: "Vue",
            icon: IconVueJS,
            strength: 5,
        },
        {
            name: "TypeScript",
            short: "TS",
            icon: IconTypeScript,
            strength: 5,
        },
        {
            name: "JavaScript",
            short: "JS",
            icon: IconJavaScript,
            strength: 5,
        },
        {
            name: "Tailwind CSS",
            short: "CSS",
            icon: IconTailwindCSS,
            strength: 5,
        },
        {
            name: "Node.js",
            short: "Node",
            icon: IconNodeJS,
            strength: 5,
        },
        {
            name: "NPM",
            short: "NPM",
            icon: IconNpm,
            strength: 5,
        },
        {
            name: "Java",
            short: "Java",
            icon: IconOracle,
            strength: 4,
        },
        {
            name: "Go",
            short: "Go",
            icon: IconGolang,
            strength: 3,
        },
        {
            name: "MySQL",
            short: "SQL",
            icon: IconMySQL,
            strength: 4,
        },
        {
            name: "PostgreSQL",
            short: "SQL",
            icon: IconPostgreSQL,
            strength: 4,
        },
        {
            name: "Cockroach DB",
            short: "DB",
            icon: IconCockroachDB,
            strength: 4,
        },
        {
            name: "Spring Boot",
            short: "Spring",
            icon: IconSpringBoot,
            strength: 3,
        },
        {
            name: "Electron",
            short: "Electron",
            icon: IconElectron,
            strength: 4,
        },
        {
            name: "Domain-driven Design",
            short: "DDD",
            strength: 3,
        },
        {
            name: "CPUX-F",
            short: "UX",
            strength: 3,
        },
        // Removed GIT for a cleaner grid in resume view
        // {
        //     name: "GIT",
        //     short: "GIT",
        //     icon: IconGit,
        //     strength: 3,
        // },
    ],
    career: [
        {
            title: "Allgemeine Hochschulreife",
            institution: {
                title: "Neues Gymnasium Oldenburg",
                url: "https://www.neuesgymnasium.eu/",
            },
            finalGrade: 2.4,
            description: "Prüfungsfächer: Informatik, Mathematik, Physik, Englisch, Religion",
            start: "2007",
            end: "2015",
        },
        {
            title: "Bachelor of Science, Informatik",
            institution: {
                title: "Carl von Ossietzky Universität Oldenburg",
                url: "https://uol.de/",
            },
            finalGrade: 1.7,
            description: "Schwerpunkt: Softwareentwicklung, Internettechnologien",
            start: "2015",
            end: "2019"
        },
        {
            title: "CPUX-F Zertifizierung",
            subtitle: "UXQB® Certified Professional for Usability and User Experience – Foundation Level (CPUX-F)",
            start: "2022",
            description: "Grundlagenwissen zu den Themen Anforderungsanalyse, UX, UI, Usability, Accessibility"
        },
        {
            title: "Software Entwickler",
            institution: {
                title: "worldiety GmbH",
                url: "https://www.worldiety.de/",
            },
            description: "Schwerpunkt: Frontend, Full Stack",
            start: "2019",
            ongoing: true,
        },
    ]
};