type FieldNameAndUrl = {
    name: string
    url: string
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
        github: FieldNameAndUrl
        instagram: FieldNameAndUrl
        facebook: FieldNameAndUrl
        twitter: FieldNameAndUrl
        telegram: FieldNameAndUrl
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
        github,
        instagram: {
            name: '',
            url: ''
        },
        facebook: {
            name: 'devdouglasmatos',
            url: 'https://www.facebook.com/devdouglasmatos'
        },
        twitter: {
            name: 'devdouglasmatos',
            url: 'https://twitter.com/devdouglasmatos'
        },
        telegram: {
            name: '',
            url: ''
        },
        linkedin: {
            name: 'devdouglasmatos',
            url: 'www.linkedin.com/in/devdouglasmatos'
        },
        discord: {
            name: '',
            url: ''
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
