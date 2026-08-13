# Easingo

Easing library for web animations.

## Example expoOut

<img src="/examples/expoOut.gif" alt="expoOut.gif">

## Example elasticOut

<img src="/examples/elasticOut.gif" alt="elasticOut.gif">

## Features
* - All easings are mathematical functions, some are implemented to mimic real life physics like bouncing.
* - Works with any animation library that has an ease property like GSAP, Framer Motion, Anime.js..

## Tech Stack
* - Completely made in Typescript.

## Getting Started

### Installation and usage
1. Clone the repository:
   ```bash
   git clone https://github.com/isle26m/Easingo/
   ```
2. Unzip it then import it in your project:
   ```ts
   import Easingo from "./Easingo" (or a relative path to where you saved it)
   ```
3. Use it in the ease property:
   ```ts
   ease: Easingo.elasticOut

## License
Distributed under the MIT License. See `LICENSE` for more information.
