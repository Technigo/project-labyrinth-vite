import { useEffect } from 'react';
import { Action } from './Action'
import { useLabyrinthStore } from '../store/useLabyrinthStore'
import '../styles/Location.css'

export const Location = ({changeBackground}) => {

    const { description, loading, coordinates } = useLabyrinthStore()

    useEffect(() => {
        changeBackground(coordinates)
        console.log(coordinates)
     }, [changeBackground, coordinates] )

    return(
        <section className="location">
        {loading && (
        <p>loading</p> 
        )}
        {!loading && (
        <>
        <h2>Description:</h2>
        <p>{description}</p>
        <Action changeBackground={changeBackground} />
        </>
        )}
        </section>
    )
 };