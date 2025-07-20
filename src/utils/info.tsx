import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaTwitterSquare,
    FaGithubSquare,
    FaLinkedin,
    FaYoutubeSquare
} from 'react-icons/fa'
import { IoLogoDiscord } from 'react-icons/io5'
import { BiLogoGmail } from 'react-icons/bi'

type FieldNameAndUrl = {
    name: string
    url: string
    icon?: React.ReactNode
}

interface Info {
    currentYear: number
    age: number
    experienceAge: number
    collegeSemesters: number
    inCollegeNow: boolean
    name: string
    fullName: string
    github: FieldNameAndUrl
    company: {
        intelie: FieldNameAndUrl
        viasat: FieldNameAndUrl
    }
    college: FieldNameAndUrl
    socialMedias: {
        gmail: FieldNameAndUrl
        youtube: FieldNameAndUrl
        github: FieldNameAndUrl
        instagram: FieldNameAndUrl
        facebook: FieldNameAndUrl
        twitter: FieldNameAndUrl
        linkedin: FieldNameAndUrl
        discord: FieldNameAndUrl
    }
    mail: {
        main: string
        secundary: string
    }
}

export default function info(): Info {
    const name = 'Douglas Matos'
    const fullName = name + ' da Silva'
    const currentYear = +new Date().getFullYear()
    const age = currentYear - 1993
    const experienceAge = currentYear - 2019
    const collegeSemesters = (currentYear - 2020) * 2
    const inCollegeNow = currentYear <= 2025
    const mail = {
        main: 'douglasmatos.contato@gmail.com',
        secundary: 'douglasmatosdev@gmail.com'
    }
    const github = {
        name: 'dougsoftware',
        url: 'https://github.com/dougsoftware'
    }
    const company = {
        intelie: {
            name: 'Intelie',
            url: 'https://www.intelie.ai/'
        }
    }

    const college = {
        name: 'Estacio',
        url: 'https://estacio.br'
    }

    const socialMedias = {
        gmail: {
            name: 'Douglas Matos da Silva',
            url: `mailto:${mail.secundary}`,
            icon: <BiLogoGmail />
        },
        youtube: {
            name: 'Douglas Silva',
            url: 'https://www.youtube.com/@douglasmatosdasilva',
            icon: <FaYoutubeSquare />
        },
        github: {
            ...github,
            icon: <FaGithubSquare />
        },
        instagram: {
            name: 'dougsoftware',
            url: 'https://www.instagram.com/dougsoftware',
            icon: <FaInstagramSquare />
        },
        facebook: {
            name: 'dougsoftware',
            url: 'https://www.facebook.com/dougsoftware',
            icon: <FaFacebookSquare />
        },
        twitter: {
            name: 'dougsoftware',
            url: 'https://twitter.com/dougsoftware',
            icon: <FaTwitterSquare />
        },
        linkedin: {
            name: 'devdouglasmatos',
            url: 'www.linkedin.com/in/devdouglasmatos',
            icon: <FaLinkedin />
        },
        discord: {
            name: 'douglasmatosdev',
            url: 'https://discord.com/channels/douglasmatosdev',
            icon: <IoLogoDiscord />
        }
    }

    return {
        mail,
        currentYear,
        age,
        experienceAge,
        collegeSemesters,
        inCollegeNow,
        name,
        fullName,
        company,
        college,
        github,
        socialMedias
    }
}
