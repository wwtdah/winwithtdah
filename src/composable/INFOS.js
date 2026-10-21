import { ref } from 'vue'

export function getAgenda() {
    return "pas là je suis en vacances"
}

export function getObject() {
    return ref([
        {
            day: "lundi à vendredi",
            ploc: "aaaaaah",
            disponibile: true
        },
        {
            day: "Week-Ends",
            ploc: "bbbbb",
            disponibile: false
        },
        {
            day: "Jours fériés",
            ploc: "ccccccc",
            disponibile: false
        }
    ])
}