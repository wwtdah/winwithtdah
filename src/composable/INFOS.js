import { ref } from 'vue'

export function getAgenda() {
    return "pas là je suis en vacances"
}

export function getObject() {
    return ref([
        {
            day: "lundi à vendredi",
            disponibile: true
        },
        {
            day: "Week-Ends",
            disponibile: false
        },
        {
            day: "Jours fériés",
            disponibile: false
        }
    ])
}