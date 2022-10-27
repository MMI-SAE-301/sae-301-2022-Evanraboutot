
export interface Montre {
    bracelet?: string;
    boitier?: string;
    ecran?: string;
};
export const colors = {
    "#FFFFFF": "Blanc",
    "#59656d": "Gris plat",
    "#000000": "Noir",
    "#ffdf22": "Jaune Soleil",
    "#fe0002": "Rouge pompier",
    "#fb7d07": "Orange Citrouille",
    "#0add08": "Vert vibrant",
    "#00FFFF": "Cyan",
    "#33D1FF": "Jade",
    "#4B0082": "Indigo",
    "#fe019a": "Neon Rose",
};
export const materiaux = [
    {
        value: "https://images.unsplash.com/photo-1571829604981-ea159f94e5ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        label: "Cuir",
    },
    {
        value: "https://images.unsplash.com/photo-1620763050148-af058ab2fff0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80",
        label: "Tissu",
    },
    {
        value: "https://images.unsplash.com/photo-1634213587842-344d5ada82d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        label: "Synthétique",
    },
];