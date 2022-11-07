import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Hero.scss';
import {IHero} from '../interfaces/Common';
import {useParams} from 'react-router-dom';

const RESOURCE_URL = 'https://rickandmortyapi.com/api/character';

function Hero(): JSX.Element {
  const [hero, setHero]: [IHero, (hero: IHero) => void] = React.useState({});

  const { heroId } = useParams();

  useEffect(() => {
    axios
      .get<IHero>(`${RESOURCE_URL}/${heroId}`)
      .then(res => {
        setHero(res.data);
      });
  }, [hero])

  return (
    <>
      <section className={'hero-card'}>
        <img src={hero.image} alt='hero' />
        <ul>
          <li>Name: {hero.name}</li>
          <li>Status: {hero.status}</li>
          <li>Species: {hero.species}</li>
          <li>Gender: {hero.gender}</li>
          <li>Origin: {hero?.origin?.name}</li>
          <li>Location: {hero?.location?.name}</li>
        </ul>
        Episodes:
        <ul>
          {
            hero.episode ?
            hero.episode.map(item => {
              return (<li><a href={item}>{item}</a></li>)
            }) : <li>No episodes</li>
          }
        </ul>
      </section>
    </>
  )
}

export default Hero;
