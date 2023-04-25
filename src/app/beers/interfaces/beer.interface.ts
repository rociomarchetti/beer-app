export interface Beer {
    id:                number;
    name:              string;
    tagline:           string;
    first_brewed:      string;
    description:       string;
    image_url:         string;
    abv:               number;
    ibu:               number | null;
    target_fg:         number;
    target_og:         number;
    ebc:               number | null;
    srm:               number | null;
    ph:                number | null;
    attenuation_level: number;
    volume:            BoilVolume;
    boil_volume:       BoilVolume;
    method:            Method;
    ingredients:       Ingredients;
    food_pairing:      string[];
    brewers_tips:      string;
    contributed_by:    ContributedBy;
}

export interface BoilVolume {
    value: number;
    unit:  Unit;
}

export enum Unit {
    Celsius = "celsius",
    Grams = "grams",
    Kilograms = "kilograms",
    Litres = "litres",
}

export enum ContributedBy {
    AliSkinnerAliSkinner = "Ali Skinner <AliSkinner>",
    SamMasonSamjbmason = "Sam Mason <samjbmason>",
}

export interface Ingredients {
    malt:  Malt[];
    hops:  Hop[];
    yeast: string;
}

export interface Hop {
    name:      string;
    amount:    BoilVolume;
    add:       Add;
    attribute: Attribute;
}

export enum Add {
    DryHop = "dry hop",
    End = "end",
    Middle = "middle",
    Start = "start",
}

export enum Attribute {
    Aroma = "aroma",
    AttributeFlavour = "Flavour",
    Bitter = "bitter",
    Flavour = "flavour",
}

export interface Malt {
    name:   string;
    amount: BoilVolume;
}

export interface Method {
    mash_temp:    MashTemp[];
    fermentation: Fermentation;
    twist:        null | string;
}

export interface Fermentation {
    temp: BoilVolume;
}

export interface MashTemp {
    temp:     BoilVolume;
    duration: number | null;
}
