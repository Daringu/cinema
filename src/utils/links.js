import {ReactComponent as Film} from "../assets/icons/film.svg";
import {ReactComponent as Heart} from "../assets/icons/heart.svg";
import {ReactComponent as Trending} from "../assets/icons/trending-up.svg";
import {ReactComponent as Calendar} from "../assets/icons/calendar.svg";
import {ReactComponent as Users} from "../assets/icons/users.svg";
import {ReactComponent as Message} from "../assets/icons/message-circle.svg";
import {ReactComponent as Settings} from "../assets/functionalIcons/sliders.svg";
import {ReactComponent as LogOut} from "../assets/icons/log-out.svg";
const  sideBarNavigationLinks=[
    {
        text:'Home',
        direction: '/home',
        icon:Film
    },
    {
        text: 'Favourites',
        direction: '/favourite',
        icon:Heart
    },
    {
        text:'Trending',
        direction:'/trending',
        icon:Trending
    },
    {
        text: "Coming soon",
        direction: "/upcoming",
        icon:Calendar
    }]

const sideBarSocialLinks=[
    {
        text:'Community',
        direction:'/community',
        icon:Users
    },
    {
        text:'Social',
        direction: '/social',
        icon:Message
    }
]

const sideBarFunctionalLinks=[
    {
        text:'Settings',
        direction:'user/settings/',
        icon:Settings
    },
    {
        text: 'Logout',
        direction: '/logout',
        icon:LogOut
    }
]
// const NavBarLinks=[
//     {
//         text:'Movies',
//         direction:'movies',
//     },
//     {
//         text: 'Series',
//         direction: 'series'
//     }
// ]
export {sideBarNavigationLinks,sideBarSocialLinks,sideBarFunctionalLinks}