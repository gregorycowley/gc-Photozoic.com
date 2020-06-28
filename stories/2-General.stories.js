import React from 'react';
import Hero from '../components/lib/Hero';

export default {
    title: 'Hero',
    component: Hero,
};

export const SuperHero = () => <Hero bgImage={{src:""}} />;

SuperHero.story = {
  name: 'a hero',
}