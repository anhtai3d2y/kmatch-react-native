interface Slides {
    id: string;
    title: string;
    description: string;
    image: any;
}

const slides: Slides[] = [
    {
        id: "1",
        title: "Algorithm",
        description:
            "Users going through a vetting process to ensure you never match with bots.",
        image: require("../assets/images/slides/slide1.png"),
    },
    {
        id: "2",
        title: "Matches",
        description:
            "We match you with people that have a large array of similar interests.",
        image: require("../assets/images/slides/slide2.png"),
    },
    {
        id: "3",
        title: "Premium",
        description:
            "Sign up today and enjoy the first month of premium benefits on us.",
        image: require("../assets/images/slides/slide3.png"),
    },
];

export default slides;
