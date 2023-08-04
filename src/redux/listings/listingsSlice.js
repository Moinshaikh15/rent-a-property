import { createSlice } from "@reduxjs/toolkit";
import listingsData from "../../data/listings.json";

const initialState = {
    data: [], //Initial data array
    filteredData: [], // Initial filtered data array
    cities: [], // Initial cities array
    filteredCities: [], // Initial filtered cities array
    selectedCity: localStorage.getItem('selectedCity') || null,
    selectedPrice: null,
    selectedDate: null,
    selectedProperty: null,
    loading: false,
    error: null,
    selectedListing: JSON.parse(localStorage.getItem('selectedListing')) || "",
    showCities: false
};

const listingsSlice = createSlice({
    name: "listings",
    initialState,
    reducers: {

        setInitialListings: (state) => {
            state.data = listingsData.propertiesForRent;
            state.filteredData = listingsData.propertiesForRent
            // Extract cities from the data array
            const uniqueCities = [
                ...new Set(
                    listingsData.propertiesForRent.map(
                        (item) =>
                            `${item.city}, ${item.country}`
                    )
                ),
            ];

            state.cities = uniqueCities; // Update the cities array

            // add cities to the filteredCities
            state.filteredCities = uniqueCities.slice(0, 5);
            if (state.selectedCity)
                state.filteredData = state.data.filter(
                    (item) => item.city === state.selectedCity.split(",")[0]
                );
        },

        filterCities: (state, action) => {
            const userInput = action.payload.toLowerCase();

            // Filter the cities based on partial match with user input
            state.filteredCities = state.cities
                .filter((city) => city.toLowerCase().includes(userInput))
                .slice(0, 5);
        },

        filterData: (state, filters) => {
            const { selectedCity, selectedDate, selectedPrice, selectedProperty } = state;
            console.log("fileterData", selectedCity, selectedDate, selectedPrice, selectedProperty)

            state.filteredData = state.data.filter((item) => {
                // Filter by location
                const isLocationMatch =
                    !selectedCity || `${item.city.toLowerCase()}, ${item.country.toLowerCase()}` === selectedCity.toLowerCase();

                // Filter by moveInDate
                const isMoveInDateMatch =
                    !selectedDate || new Date(item.dateAvailable) <= new Date(selectedDate);

                // Filter by priceRange
                const isPriceInRange =
                    !selectedPrice ||
                    (item.rentPerMonth >= selectedPrice.min && item.rentPerMonth <= selectedPrice.max);

                // Filter by propertyType
                const isPropertyTypeMatch =
                    !selectedProperty || item.propertyType === selectedProperty?.toLowerCase();

                return isLocationMatch && isMoveInDateMatch && isPriceInRange && isPropertyTypeMatch;
            });

        },

        setSelectedCity: (state, action) => {

            state.selectedCity = action.payload;
            localStorage.setItem('selectedCity', action.payload);
        },

        setSelectedDates: (state, action) => {
            state.selectedDate = action.payload;

        },
        setShowCities: (state) => {
            state.showCities = !state.showCities
        },

        // setSelectedListing: (state, action) => {
        //     state.selectedListing = action.payload;
        //     localStorage.setItem('selectedListing', JSON.stringify(action.payload));
        // },
        setSelectedPrice: (state, action) => {
            state.selectedPrice = action.payload
        },
        setSelectedPropertyType: (state, action) => {
            state.selectedProperty = action.payload
        }
    },
});

export const {
    setInitialListings,
    filterCities,
    filterData,
    setSelectedCity,
    setSelectedDates,
    setShowCities,
    setSelectedPrice,
    setSelectedPropertyType
    // setSelectedListing,
    // setSelectedGuests
} = listingsSlice.actions;

export default listingsSlice.reducer;