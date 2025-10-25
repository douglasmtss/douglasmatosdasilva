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
        name: 'douglasmtss',
        url: 'https://github.com/douglasmtss'
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
            name: 'douglasmtss',
            url: 'https://www.instagram.com/douglasmtss',
            icon: <FaInstagramSquare />
        },
        facebook: {
            name: 'douglasmtss',
            url: 'https://www.facebook.com/douglasmtss',
            icon: <FaFacebookSquare />
        },
        twitter: {
            name: 'douglasmtss',
            url: 'https://twitter.com/douglasmtss',
            icon: <FaTwitterSquare />
        },
        linkedin: {
            name: 'douglasmtss',
            url: 'https://www.linkedin.com/in/douglasmtss',
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
