import { data, get } from "jquery";
import { useState } from "react";





const getState = ({ getStore, getActions, setStore, setActions }) => {
    return {
        store: {
            characters: null, 
            planets: null,
            starships: null,
            favorites: []
            

        },
        actions:
         {
             favorites: name  => {
                let store = getStore();
                setStore({
                    favorites: store.favorites.concat(name),
                })

             },
            
            getStarships: () => {
                fetch("https://swapi.dev/api/starships")
                .then(resp => resp.json())
                .then(data => {
                    setStore({
                        starships: data
                    })
                })
            },
            getPlanets: () => {
                fetch("https://swapi.dev/api/planets")
                .then(resp => resp.json())
                .then(data => {
                    setStore({
                        planets: data
                    })
                })
            },
            getCharacters: () => {
                fetch("https://swapi.dev/api/people")
                .then(resp => resp.json())
                .then(data => {
                    setStore({
                        characters: data
                    })
                })
                         
        
            },
        }
    }
}

export default getState;