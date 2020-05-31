export interface Gift {
    _id: string;
    description: string;
    user: string;
    cant: number;
    alreadyDone: boolean;
}

export interface GetGift {
    response: Array<Gift>
}