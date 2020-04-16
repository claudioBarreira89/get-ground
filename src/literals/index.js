export default {
    generic: {
        homeUrl: "https://www.getground.co.uk/"
    },
    header: {
        menu: [
            {
                title: "What we do",
                url: "https://www.getground.co.uk/what-we-do"
            },
            {
                title: "Advantages",
                url: "https://www.getground.co.uk/advantages"
            },
            { title: "Pricing", url: "https://www.getground.co.uk/pricing" },
            {
                title: "How it works",
                url: "https://www.getground.co.uk/how-it-works"
            }
        ],
        buttonText: "Save and exit"
    },
    addShareholder: {
        title: "Shareholder details",
        addShareholderTitle: "Add a Shareholder",
        shareholderTitle: "Shareholder",
        messageBox: [
            "You can have a maximum of 8 shareholders (including you). All shareholders need to be people not companies.",
            "Please note that each of your shareholders will need to create an account on getGround. They must also be over 18."
        ],
        form: {
            firstName: "Shareholders first name",
            lastName: "Shareholders last name",
            email: "Email",
            button: { add: "Add shareholder", update: "Update shareholder" }
        }
    },
    companyShares: {
        title: "Shareholder details",
        messageBox:
            "Now it is time to divide company shares between your shareholders and specify which shareholders are directors.",
        button: "Add shareholder",
        labels: {
            shareholders: "SHAREHOLDERS",
            shares: "SHARES %",
            director: "DIRECTOR"
        },
        director: ["YES", "NO"]
    },
    footer: {
        next: "Next",
        back: "Back"
    }
};
