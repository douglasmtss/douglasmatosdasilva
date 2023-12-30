import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa'
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
        name: 'douglasmatosdev',
        url: 'https://github.com/douglasmatosdev'
    }
    const company = {
        intelie: {
            name: 'Intelie by ViaSat',
            url: 'https://www.intelie.ai/'
        },
        viasat: {
            name: 'ViaSat',
            url: 'https://www.viasat.com/'
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
        github: {
            ...github,
            icon: <FaGithubSquare />
        },
        instagram: {
            name: 'douglasmatosdev',
            url: 'https://www.instagram.com/douglasmatosdev',
            icon: <FaInstagramSquare />
        },
        facebook: {
            name: 'devdouglasmatos',
            url: 'https://www.facebook.com/devdouglasmatos',
            icon: <FaFacebookSquare />
        },
        twitter: {
            name: 'devdouglasmatos',
            url: 'https://twitter.com/devdouglasmatos',
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
