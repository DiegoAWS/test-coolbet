const getHighestPaybackPercentage = (games) => {


    const hashMapOfProviders = games.reduce((acc, item) => {

        const updatedProvider = (acc.hasOwnProperty(item.provider))
            ?
            {
                elements: acc[item.provider].elements + 1,
                totalPaybackPercentage: acc[item.provider].totalPaybackPercentage + item.paybackPercentage
            }
            :
            {
                elements: 1,
                totalPaybackPercentage: item.paybackPercentage
            };


        return { ...acc, [item.provider]: updatedProvider }

    }, {})
    
    const percentCalculated = Object.entries(hashMapOfProviders)
        .reduce((acc, item) => {

            const provider = item[0];
            const totalPaybackPercentage = item[1].totalPaybackPercentage;
            const elements = item[1].elements;
            const calculatedPercent = totalPaybackPercentage / elements;

    
            const updatedWinner = calculatedPercent > acc.highestPaybackValue
                ? {
                    highestPaybackProvider: provider,
                    highestPaybackValue: calculatedPercent
                }
                : {};

            return {
                ...acc,
                ...updatedWinner
            };
        }, {
            highestPaybackProvider: '',
            highestPaybackValue: 0,
        })

    return percentCalculated.highestPaybackProvider;
}



const games = [
    {
        name: 'Starburst',
        provider: 'NETENT',
        paybackPercentage: 96.09,
    },
    {
        name: 'Book of Dead',
        provider: 'PLAYGO',
        paybackPercentage: 96.21,
    },
    {
        name: `Gonzo's Quest`,
        provider: 'NETENT',
        paybackPercentage: 96,
    },
    {
        name: 'The Dog House',
        provider: 'PRAGMATIC',
        paybackPercentage: 96.51,
    },
    {
        name: 'Serengeti Kings',
        provider: 'NETENT',
        paybackPercentage: 96.7,
    },
    {
        name: 'Reactoonz',
        provider: 'PLAYGO',
        paybackPercentage: 96.51,
    },
    {
        name: 'Wolf Gold',
        provider: 'PRAGMATIC',
        paybackPercentage: 96,
    },
];



console.log(getHighestPaybackPercentage(games))