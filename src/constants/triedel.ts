import type {Component} from "vue";
import {
    IconCockroachDB,
    IconDocker, IconElasticsearch,
    IconElectron,
    IconGit,
    IconGolang, IconJira, IconKeycloak,
    IconLinkedIn,
    IconMySQL,
    IconNodeJS,
    IconNpm,
    IconOracle,
    IconSpringBoot,
    IconTailwindCSS,
    IconTypeScript, IconVite,
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
    website: string;
    socials: SocialData[];
    mainSkills: Skill[];
    otherSkills: Skill[];
    career: CareerData[];
    certificates: Certificate[],
    importantTopics: string[];
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
    yearsOfExperience: number;
}

interface CareerData {
    title: string;
    subtitle?: string;
    institution?: {
        title: string;
        url: string;
    };
    finalGrade?: number;
    description?: string[];
    start: string;
    end?: string;
    ongoing?: boolean;
}

interface Certificate {
    title: string;
    subtitle?: string;
    institution?: {
        title: string;
        url: string;
    };
    finalGrade?: number;
    description?: string[];
    year: number;
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
    email: "kontakt@thomas-riedel.dev",
    website: "thomas-riedel.dev",
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
    mainSkills: [
        {
            name: "Vue.js",
            short: "Vue",
            icon: IconVueJS,
            strength: 5,
            yearsOfExperience: 6,
        },
        {
            name: "TypeScript",
            short: "TS",
            icon: IconTypeScript,
            strength: 5,
            yearsOfExperience: 6,
        },
        {
            name: "Tailwind CSS",
            short: "CSS",
            icon: IconTailwindCSS,
            strength: 5,
            yearsOfExperience: 3,
        },
        {
            name: "Go",
            short: "Go",
            icon: IconGolang,
            strength: 4,
            yearsOfExperience: 3,
        },
        {
            name: "Cockroach DB",
            short: "DB",
            icon: IconCockroachDB,
            strength: 4,
            yearsOfExperience: 3,
        },
    ],
    otherSkills: [
        {
            name: "Docker",
            short: "Docker",
            icon: IconDocker,
            strength: 4,
            yearsOfExperience: 6,
        },
        {
            name: "Node.js",
            short: "Node",
            icon: IconNodeJS,
            strength: 5,
            yearsOfExperience: 6,
        },
        {
            name: "NPM",
            short: "NPM",
            icon: IconNpm,
            strength: 5,
            yearsOfExperience: 6,
        },
        {
            name: "Vite",
            short: "Vite",
            icon: IconVite,
            strength: 4,
            yearsOfExperience: 3,
        },
        {
            name: "Java",
            short: "Java",
            icon: IconOracle,
            strength: 4,
            yearsOfExperience: 10,
        },
        {
            name: "MySQL",
            short: "SQL",
            icon: IconMySQL,
            strength: 4,
            yearsOfExperience: 7,
        },
        {
            name: "Spring Boot",
            short: "Spring",
            icon: IconSpringBoot,
            strength: 3,
            yearsOfExperience: 6,
        },
        {
            name: "Elasticsearch",
            short: "ES",
            icon: IconElasticsearch,
            strength: 3,
            yearsOfExperience: 1,
        },
        {
            name: "Electron",
            short: "Electron",
            icon: IconElectron,
            strength: 4,
            yearsOfExperience: 1,
        },
        {
            name: "GIT",
            short: "GIT",
            icon: IconGit,
            strength: 3,
            yearsOfExperience: 10,
        },
        {
            name: "Jira",
            short: "Jira",
            icon: IconJira,
            strength: 4,
            yearsOfExperience: 7,
        },
        {
            name: "Keycloak",
            short: "Keycloak",
            icon: IconKeycloak,
            strength: 3,
            yearsOfExperience: 4,
        }
    ].sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
        .sort((a, b) => b.yearsOfExperience - a.yearsOfExperience),
    career: [
        {
            title: "Software-Entwickler, Ausbilder",
            institution: {
                title: "worldiety GmbH",
                url: "https://www.worldiety.de/",
            },
            description: [
                "BFSG-konforme Software-Entwicklung",
                "Entwicklung von Backend-Anwendungen in Java, Go, MySQL, CockroachDB",
                "Entwicklung von Frontend-Anwendungen mit Vue.js, Tailwind CSS, TypeScript",
                "Implementierung von OAuth 2 Prozessen mit Keycloak",
                "Entwicklung von Webkomponenten mit Vue und Lit",
                "Entwicklung von Cross Platform-Anwendungen für Windows/Mac",
                "Entwicklung von Kundenwebseiten mit Craft CMS, PHP",
                "Entwicklung von Shopware-Plugins/-themes",
                "Serverseitige Software-Bereitstellung mithilfe von Docker",
                "Fehlerbehebung und Weiterentwicklung bestehender Systeme",
                "",
                "Mentoring eines Auszubildenden (Fachinformatiker für Anwendungsentwicklung)",
                "Begleitung/Koordinierung einer Ausbildungsabschlussarbeit",
                "Mentor/Ansprechpartner im Bereich Frontend-/Vue-Entwicklung",
                "Teilnahme am Rezertifizierungsprozess für die \"IHK TOP AUSBILDUNG\"-Zertifizierung",
                "Stellvertretende Moderation/Koordination in Sprintplanungsmeetings, Weeklys und Dailys",
            ],
            start: "2019",
            ongoing: true,
        },
        {
            title: "Bachelor of Science, Informatik",
            institution: {
                title: "Carl von Ossietzky Universität Oldenburg",
                url: "https://uol.de/",
            },
            finalGrade: 1.7,
            description: ["Schwerpunkt: Softwareentwicklung, Internettechnologien"],
            start: "2015",
            end: "2019"
        },
        {
            title: "Allgemeine Hochschulreife",
            institution: {
                title: "Neues Gymnasium Oldenburg",
                url: "https://www.neuesgymnasium.eu/",
            },
            finalGrade: 2.4,
            description: ["Prüfungsfächer: Informatik, Mathematik, Physik, Englisch, Religion"],
            start: "2007",
            end: "2015",
        },
    ],
    certificates: [
        {
            title: "CPUX-F",
            subtitle: "UXQB® Certified Professional for Usability and User Experience – Foundation Level (CPUX-F)",
            year: 2022,
            description: ["Grundlagenwissen zu den Themen Anforderungsanalyse, UX, UI, Usability, Accessibility"]
        },
        {
            title: "AdA-Schein",
            year: 2025,
            description: ["Erfolgreiche Teilnahme an der Ausbildereignungsprüfung (AdA)"]
        },
    ].sort((a, b) => b.year - a.year),
    importantTopics: [
        "environmental-protection",
        "sustainability",
        "human-rights",
        "equal-rights"
    ]
};