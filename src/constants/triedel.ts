import type {Component} from "vue";
import {IconGmail, IconLinkedIn, IconXing} from "@/assets/icons/fill";

interface PersonalData {
    firstname: string;
    lastname: string;
    street: string;
    zipCode: string;
    city: string;
    email: string;
    mobile: string;
    social: SocialData[];
}

interface SocialData {
    name: string;
    icon: Component | string;
    url: string;
}

export const Triedel: PersonalData = {
    firstname: "Thomas",
    lastname: "Riedel",
    street: "Pellwormer Weg 1",
    zipCode: "26131",
    city: "Oldenburg",
    email: "thomasriedel.privat@gmail.com",
    mobile: "+49 162 219 2591",
    social: [
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
        {
            name: 'E-Mail',
            icon: IconGmail,
            url: 'mailto:thomasriedel.privat@gmail.com'
        },
    ]
};