export interface IUserProfile {
    _id: string;
    age: number;
    avatar: {
        publicId: string;
        secureURL: string;
    };
    birthday: string;
    boots: number;
    bootsAmount: number;
    createdAt: string;
    email: string;
    gender: string;
    mylocation: {
        latitude: number;
        longitude: number;
    };
    name: string;
    permission: object;
    phonenumber: string;
    role: string;
    starAmount: number;
    updatedAt: string;
    verification: {
        code: string;
        timeOut: number;
    };
}
