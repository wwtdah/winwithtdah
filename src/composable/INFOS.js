import { ref } from 'vue'

export function getAgenda() {
    return ref([
        {
            day: "Mercredi",
            hour: [
                {start: '13h30', end: '15h00'},
                {start: '15h00', end: '16h30'},
                {start: '16h30', end: '18h00'}
            ]
        }
    ])
}

export function getAddress() {
    return ref([
        {
            title: 'Centre Cap Santé',
            line1: 'Avenue Albert 1er, 13',
            line2: '1342 Limelette'
        }
    ])
}

export function getPrice() {
    return ref('35€/1h30 de suivi par enfant')
}

export function getMail() {
    return ref('winwithtdah@gmail.com')
}

export function getTel() {
    return ref('+32 498 13 80 80')
}

export function getForm() {
    return ref('https://docs.google.com/forms/d/e/1FAIpQLSdyRT9itALckxNacr6hrkNmitT8EPECLuCK6lheaZbmNn_aUg/viewform?usp=publish-editor')
}

export function getPartners() {
    return [
        {
            name: 'Centre Cap Centé',
            logo: new URL('@/assets/img/logo/partners/capSante.avif', import.meta.url),
            href: 'https://www.cmcapsante.be/'
        }
    ]
}