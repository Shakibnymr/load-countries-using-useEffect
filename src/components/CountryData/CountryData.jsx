

const CountryData = (props) => {
    const {country,handleVisitedCountry,handleVisitedFlags} = props ;
    console.log(props)
    return (
        <div>
            <p><small>Country Capital: {country.capital}</small></p>
        </div>
    );
};

export default CountryData;