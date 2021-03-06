import { IMember, IProject } from '../../../../common/interfaces'
import {
  adally1,
  adally2,
  angela,
  aryen,
  chris,
  crypto1,
  crypto2,
  crypto3,
  databased,
  deejay,
  dejablog,
  denmark,
  dustin,
  erick,
  giovanni,
  hazel,
  helpbert,
  jalil,
  jason,
  jonCesar,
  junski,
  justin,
  marcoPaps,
  meegle,
  monitoring,
  papaRods,
  portia,
  richard,
  sheryl,
  vanessa,
} from '../../../../common/images'

import {
  adally1WebP,
  adally2WebP,
  angelaWebP,
  aryenWebP,
  chrisWebP,
  crypto1WebP,
  crypto2WebP,
  crypto3WebP,
  databasedWebP,
  deejayWebP,
  dejablogWebP,
  denmarkWebP,
  dustinWebP,
  erickWebP,
  giovanniWebP,
  hazelWebP,
  helpbertWebP,
  jalilWebP,
  jasonWebP,
  jonCesarWebP,
  junskiWebP,
  justinWebP,
  marcoPapsWebP,
  meegleWebP,
  monitoringWebP,
  papaRodsWebP,
  portiaWebP,
  richardWebP,
  sherylWebP,
  vanessaWebP,
} from '../../../../common/images/webp'

const deejayGerosoLinkedIn = 'https://www.linkedin.com/in/deejaygeroso'
const memberDeejayGeroso = {
  linkedIn: deejayGerosoLinkedIn,
  name: 'Deejay Geroso',
  photo: {
    jpg: deejay,
    webP: deejayWebP,
  },
  position: '',
}
const memberVanessaFaithAbordo = {
  linkedIn: 'https://www.linkedin.com/in/vanessa-faith-abordo-24a673131',
  name: 'Vanessa Faith Abordo',
  photo: {
    jpg: vanessa,
    webP: vanessaWebP,
  },
  position: '',
}
const memberJunski = {
  linkedIn: 'https://www.linkedin.com/in/casan-jr-mala-58b796a7',
  name: 'Casan Jr Mala',
  photo: {
    jpg: junski,
    webP: junskiWebP,
  },
  position: '',
}
const setMemberPosition = (member: IMember, position: string): IMember => {
  return Object.assign({}, member, { position })
}

const projects: IProject[] = [
  {
    description:
      'An application that runs real-time homepage and fullpage scan to find out if your website is ADA (Americans with Disabilities Act Standards for Accessible) compliant.',
    domains: [
      {
        name: 'adally.com',
        url: 'https://www.adally.com',
      },
    ],
    members: [
      {
        linkedIn: null,
        name: 'Micah Uyeharam',
        photo: {
          jpg: null,
          webP: null,
        },
        position: 'Project Supervisor',
      },
      setMemberPosition(memberDeejayGeroso, 'Lead Developer'),
      {
        linkedIn: 'https://www.linkedin.com/in/denmark-tabiolo-b45839a9',
        name: 'Denmark Tabiolo',
        photo: {
          jpg: denmark,
          webP: denmarkWebP,
        },
        position: 'ReactJS Developer',
      },
    ],
    name: 'Adally',
    photos: [
      {
        jpg: adally1,
        webP: adally1WebP,
      },
      {
        jpg: adally2,
        webP: adally2WebP,
      },
    ],
    position:
      'Lead Developer (Sprint Planning, Designing and implementing Application Architecture, Devops, Back-end, Front-end, Quality Assurance and UI/UX)',
    technology: [],
  },
  {
    description: `A CRM (Content Relationship Management System) that helps companies improve sales productivity by tracking progress based on actual data and gives a better perspective for companies on which effort provides the greatest return.`,
    domains: [
      {
        name: 'databased.com',
        url: 'https://www.databased.com',
      },
    ],
    members: [
      {
        linkedIn: 'https://www.linkedin.com/in/dustintwatkins',
        name: 'Dustin Watkins',
        photo: {
          jpg: dustin,
          webP: dustinWebP,
        },
        position: 'Co-Founder and Head of Engineering',
      },
      {
        linkedIn: 'https://www.linkedin.com/in/christophergbradshaw',
        name: 'Christopher Bradshaw',
        photo: {
          jpg: chris,
          webP: chrisWebP,
        },
        position: 'Front-end Team Lead',
      },
      {
        linkedIn: 'https://www.linkedin.com/in/justin-lee-behnke-a9956b8a',
        name: 'Justin Lee Behnke',
        photo: {
          jpg: justin,
          webP: justinWebP,
        },
        position: 'Founding Engineer',
      },
      setMemberPosition(memberDeejayGeroso, 'Full-stack Developer'),
    ],
    name: 'Databased',
    photos: [
      {
        jpg: databased,
        webP: databasedWebP,
      },
    ],
    position: 'Full-stack Typescript Developer',
    technology: [],
  },
  {
    description:
      'A digital cryptocurrency tracker for managing user portfolios. It shows computation of valuation, profit/loss, buying & market price in Bitcoin, Etherium and in US Dollars, supply 24hour volume etc. App also has charts and graphs for historical data of cryptocurrencies.',
    domains: [],
    members: [
      {
        linkedIn: 'https://www.linkedin.com/in/richardsalem',
        name: 'Richard Paul Salem',
        photo: {
          jpg: richard,
          webP: richardWebP,
        },
        position: 'Product Owner',
      },
      setMemberPosition(memberDeejayGeroso, 'Full-stack Javascript Developer'),
    ],
    name: 'Crypto Asset Management',
    photos: [
      {
        jpg: crypto1,
        webP: crypto1WebP,
      },
      {
        jpg: crypto2,
        webP: crypto2WebP,
      },
      {
        jpg: crypto3,
        webP: crypto3WebP,
      },
    ],
    position: 'Full-stack Javascript Developer',
    technology: ['ReactJS', 'Redux', 'NextJS', 'ExpressJS', 'MongoDB', 'CoinMarketCap API version 1'],
  },
  {
    description:
      'A system that helps business owners manage their own website, online social engagements all in one single application.',
    domains: [
      {
        name: 'meegle-ios',
        url: 'https://apps.apple.com/us/app/meegle/id1243305648#?platform=iphonem',
      },
      {
        name: 'meegle-android',
        url: 'https://play.google.com/store/apps/details?id=com.snapzio.meegle&hl=en',
      },
    ],
    members: [
      {
        linkedIn: 'https://www.linkedin.com/in/faith-hall-3096584',
        name: 'Faith Hall',
        photo: {
          jpg: null,
          webP: null,
        },
        position: 'Senior Manager',
      },
      setMemberPosition(memberJunski, 'Senior Front-end Developer'),
      {
        linkedIn: 'https://www.linkedin.com/in/roderick-gohetia',
        name: 'Roderick Gohetia',
        photo: {
          jpg: papaRods,
          webP: papaRodsWebP,
        },
        position: 'Senior Back-end Developer',
      },
      setMemberPosition(memberVanessaFaithAbordo, 'Back-end Developer'),
      setMemberPosition(memberDeejayGeroso, 'Mobile Developer'),
      {
        linkedIn: null,
        name: 'Giovanni Lobitos',
        photo: {
          jpg: giovanni,
          webP: giovanniWebP,
        },
        position: 'Front-end Developer',
      },
      {
        linkedIn: null,
        name: 'Aryen Jim Bejagan',
        photo: {
          jpg: aryen,
          webP: aryenWebP,
        },
        position: 'Website Designer',
      },
      {
        linkedIn: 'https://www.linkedin.com/in/jason-abella-b4837215a',
        name: 'Jason Abella',
        photo: {
          jpg: jason,
          webP: jasonWebP,
        },
        position: 'Website Designer',
      },
      {
        linkedIn: 'https://www.linkedin.com/in/marcopaps',
        name: 'Marco Budiongan',
        photo: {
          jpg: marcoPaps,
          webP: marcoPapsWebP,
        },
        position: 'DevOps Engineer',
      },
      {
        linkedIn: 'https://www.linkedin.com/in/jon-cesar-tagsip-1129ab15b',
        name: 'Jon Cesar Tagsip',
        photo: {
          jpg: jonCesar,
          webP: jonCesarWebP,
        },
        position: 'Quality Assurance',
      },
      {
        linkedIn: null,
        name: 'Hazel Ko Lumactod',
        photo: {
          jpg: hazel,
          webP: hazelWebP,
        },
        position: 'Quality Assurance',
      },
      {
        linkedIn: 'https://www.linkedin.com/in/sheryl-picante-865089176',
        name: 'Sheryl Picante',
        photo: {
          jpg: sheryl,
          webP: sherylWebP,
        },
        position: 'Quality Assurance',
      },
      {
        linkedIn: 'https://www.linkedin.com/in/portia-linao',
        name: 'Portia Linao',
        photo: {
          jpg: portia,
          webP: portiaWebP,
        },
        position: 'Marketing Specialist',
      },
      {
        linkedIn: 'https://www.linkedin.com/in/angeladoloricon',
        name: 'Angela Doloricon',
        photo: {
          jpg: angela,
          webP: angelaWebP,
        },
        position: 'Marketing Specialist',
      },
    ],
    name: 'Meegle',
    photos: [
      {
        jpg: meegle,
        webP: meegleWebP,
      },
    ],
    position: 'Mobile Developer (ios & android)',
    technology: [
      'React Native (ios & android)',
      'Redux-observable',
      'Feathers JS (Client)',
      'FacebookSDK',
      'GoogleSDK',
      'FirebaseSDK (Crashlytics & Cloud Messaging)',
      'OneSignalSDK (Notification Upgrade)',
    ],
  },
  {
    description: 'An application that monitors servers, domains and websites.',
    domains: [],
    members: [
      setMemberPosition(memberDeejayGeroso, 'Mobile Developer'),
      setMemberPosition(memberVanessaFaithAbordo, 'Back-end Developer'),
      {
        linkedIn: null,
        name: 'John Crisostomo',
        photo: {
          jpg: null,
          webP: null,
        },
        position: 'Back-end Developer',
      },
      {
        linkedIn: 'https://www.linkedin.com/in/john-erick-madduma-300083113',
        name: 'John Erick Madduma',
        photo: {
          jpg: erick,
          webP: erickWebP,
        },
        position: 'Front-end Developer',
      },
    ],
    name: 'Meegle Monitoring',
    photos: [
      {
        jpg: monitoring,
        webP: monitoringWebP,
      },
    ],
    position: 'Mobile Developer (ios & android)',
    technology: ['React Native (ios & android)', 'Redux', 'Feathers JS (Client)'],
  },
  {
    description: `An online support system used internally by our company which allows live chat and receive and reply to our client's emails and tickets.`,
    domains: [],
    members: [
      setMemberPosition(memberJunski, 'Full-stack Developer'),
      setMemberPosition(memberVanessaFaithAbordo, 'Back-end Developer'),
      setMemberPosition(memberDeejayGeroso, 'Mobile Developer'),
    ],
    name: 'Helpbert',
    photos: [
      {
        jpg: helpbert,
        webP: helpbertWebP,
      },
    ],
    position: 'Mobile Developer (ios & android)',
    technology: [
      'React Native (ios & android)',
      'Redux',
      'Feathers JS (Client)',
      'FirebaseSDK (Crashlytics & Cloud Messaging)',
    ],
  },
  {
    description: `An application that can create and manage the multiple blogs, posts and user comments.`,
    domains: [],
    members: [
      {
        linkedIn: 'https://www.linkedin.com/in/jalil-laguindab',
        name: 'Jalil Laguindab',
        photo: {
          jpg: jalil,
          webP: jalilWebP,
        },
        position: 'Back-end Developer',
      },
      setMemberPosition(memberDeejayGeroso, 'Front-end Developer'),
    ],
    name: 'Dejablog (CMS)',
    photos: [
      {
        jpg: dejablog,
        webP: dejablogWebP,
      },
    ],
    position: 'Front-end Web Developer with semi Back-end Role',
    technology: ['ReactJS', 'Handlebars', 'MeteorJS', 'ExpressJS', 'MongoDB'],
  },
]

export default projects
