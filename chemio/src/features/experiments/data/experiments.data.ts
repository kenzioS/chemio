import type { Experiment } from '../types'

const DEFAULT_LOREM_IPSUM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

export const EXPERIMENTS: Experiment[] = [
  {
    id: 1,
    title: 'Acid-Base Titration',
    description: 'Determine solution concentration using neutralization with a visual pH indicator.',
    overview:
      'Acid-Base Titration is a quantitative chemical analysis technique used to determine the unknown concentration of an identified analyte. ' +
      DEFAULT_LOREM_IPSUM,
  },
  {
    id: 2,
    title: 'Elephant Toothpaste',
    description: 'Observe rapid catalytic decomposition of hydrogen peroxide creating steamy foam.',
    overview:
      'Elephant Toothpaste demonstrates rapid exothermic decomposition of concentrated hydrogen peroxide catalyzed by potassium iodide. ' +
      DEFAULT_LOREM_IPSUM,
  },
  {
    id: 3,
    title: 'Flame Test Analysis',
    description: 'Examine emission spectra and characteristic flame colors of alkali metal ions.',
    overview:
      'Flame Test Analysis utilizes thermal excitation to identify metal ions based on their distinctive atomic emission spectra. ' +
      DEFAULT_LOREM_IPSUM,
  },
  {
    id: 4,
    title: 'Electrolysis of Water',
    description: 'Separate hydrogen and oxygen molecules through water using direct electric current.',
    overview:
      'Electrolysis of Water uses direct electrical current to decompose water molecules into gaseous diatomic hydrogen and oxygen. ' +
      DEFAULT_LOREM_IPSUM,
  },
  {
    id: 5,
    title: 'Redox Chemical Clock',
    description: 'Witness cyclical color oscillations resulting from coupled redox reaction kinetics.',
    overview:
      'The Briggs-Rauscher chemical clock illustrates complex nonlinear chemical kinetics and oscillating oxidation states. ' +
      DEFAULT_LOREM_IPSUM,
  },
  {
    id: 6,
    title: 'Precipitation Reaction',
    description: 'Mix aqueous ionic compounds to observe and filter insoluble solid salts.',
    overview:
      'Precipitation reactions occur when cations and anions in aqueous solution combine to form an insoluble ionic precipitate. ' +
      DEFAULT_LOREM_IPSUM,
  },
  {
    id: 7,
    title: 'Silver Mirror Test',
    description: 'Reduce Tollens reagent with aldehydes to coat glass with lustrous metallic silver.',
    overview:
      'The Silver Mirror (Tollens) test distinguishes between aldehydes and ketones through the selective reduction of diamminesilver(I) ions. ' +
      DEFAULT_LOREM_IPSUM,
  },
  {
    id: 8,
    title: 'Copper Electroplating',
    description: 'Deposit an even layer of elemental copper onto metal cathode surfaces.',
    overview:
      'Electroplating is an electrochemical deposition process that utilizes electrical current to coat conductive substrates with metal. ' +
      DEFAULT_LOREM_IPSUM,
  },
  {
    id: 9,
    title: 'Chromatography of Inks',
    description: 'Separate solute mixtures and dyes based on differential capillary migration.',
    overview:
      'Paper chromatography separates components of a mixture based on their relative affinities for the stationary and mobile phases. ' +
      DEFAULT_LOREM_IPSUM,
  },
  {
    id: 10,
    title: 'Exothermic Crystals',
    description: 'Trigger crystallization in supersaturated sodium acetate releasing latent heat.',
    overview:
      'Supersaturated sodium acetate solutions illustrate metastable thermodynamic states and sudden crystallization with latent heat release. ' +
      DEFAULT_LOREM_IPSUM,
  },
  {
    id: 11,
    title: 'Gas Laws Demonstration',
    description: 'Analyze real-time relationships between temperature, volume, and gaseous pressure.',
    overview:
      'Gas laws explore empirical relationships between pressure, volume, temperature, and quantity of an ideal gas. ' +
      DEFAULT_LOREM_IPSUM,
  },
  {
    id: 12,
    title: 'Luminol Chemiluminescence',
    description: 'Generate glowing blue luminescence via chemical oxidation without thermal output.',
    overview:
      'Luminol chemiluminescence is an oxidation reaction releasing energy in the form of visible blue photons with minimal heat. ' +
      DEFAULT_LOREM_IPSUM,
  },
  {
    id: 13,
    title: 'Calorimetry & Enthalpy',
    description: 'Quantify energy transfer and reaction enthalpy changes using insulated chambers.',
    overview:
      'Calorimetry measures enthalpy changes of physical and chemical processes by monitoring heat exchange in an insulated system. ' +
      DEFAULT_LOREM_IPSUM,
  },
  {
    id: 14,
    title: 'Freezing Point Depression',
    description: 'Measure temperature shifts in aqueous solvent systems when adding nonvolatile solutes.',
    overview:
      'Colligative properties depend on solute particle concentration rather than solute identity, lowering solvent freezing points. ' +
      DEFAULT_LOREM_IPSUM,
  },
  {
    id: 15,
    title: 'Polymer Cross-Linking',
    description: 'Combine monomers to create resilient elastic polymers with varied viscosity.',
    overview:
      'Cross-linking joins linear polymer chains through covalent or hydrogen bonds, transforming viscous fluids into viscoelastic solids. ' +
      DEFAULT_LOREM_IPSUM,
  },
  {
    id: 16,
    title: 'Catalytic Breakdown',
    description: 'Compare reaction velocities across inorganic and enzyme catalysts on peroxides.',
    overview:
      'Catalysts lower activation energy barriers to accelerate chemical reactions without being consumed in the overall process. ' +
      DEFAULT_LOREM_IPSUM,
  },
]
