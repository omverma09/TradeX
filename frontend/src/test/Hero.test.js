import React from "react";
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom';   //For delay while fatching data.
import Hero from '../landing_page/home/Hero'

// Test Suite.
describe('Hero Component', () => {
    test('renders hero image', () => {
        render(<Hero/>);
        const heroImg = screen.getAllByAltText('Hero-Image');
        expect(heroImg).toBeInTheDocument();
        expect(heroImg).toHaveAttribute("src","media/images/homeHero.png");
    })
})