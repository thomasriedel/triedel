import type {Component} from "vue";
import {IconLinkedIn, IconXing} from "@/assets/icons/fill";

interface PersonalData {
    firstname: string;
    lastname: string;
    birthday: Date;
    birthplace: string;
    street: string;
    zipCode: string;
    city: string;
    email: string;
    mobile: string;
    socials: SocialData[];
}

interface SocialData {
    name: string;
    icon: Component | string;
    url: string;
}

export const Triedel: PersonalData = {
    firstname: "Thomas",
    lastname: "Riedel",
    birthday: new Date("04-04-1997"),
    birthplace: "Oldenburg",
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
    ]
};