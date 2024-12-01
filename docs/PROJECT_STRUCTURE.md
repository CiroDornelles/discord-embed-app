# Vampire Dark Ages Character Sheet - Project Documentation

## Project Overview
A React-based character sheet application for Vampire: The Dark Ages, featuring a Material UI-based design system with custom theming.

## Directory Structure

### `/src`
Main source code directory containing all application code.

#### Components
- `/components`
  - `/characterSheet`: Core character sheet components
    - `CharacterSheet.jsx`: Main character sheet container
    - `/cards`: Modular character information cards
      - `BasicInfoCard`: Basic character information
      - `PersonalityCard`: Character personality traits
      - `VampireInfoCard`: Vampire-specific information
    - `/AttributeGroup`: Attribute management components
  - `/ui`: Reusable UI components
    - `VampireCard.jsx`: Custom themed card component
    - `VampireTextField.jsx`: Custom themed text input
  - `/common`: Shared components
    - `ThemeSwitcher.jsx`: Theme toggle component
    - `StatCarousel.jsx`: Stats display carousel
    - `StatDots.jsx`: Dot-based stat visualization
    - `StatGroup.jsx`: Stat grouping component

#### Theme System
- `/theme`
  - `index.js`: Theme configuration and provider setup
  - `colors.js`: Color palette definitions
  - `typography.js`: Typography system configuration
  - `/themes`
    - `vampireDarkAges.js`: Main theme for the application
    - `base.js`: Base theme configuration
    - `dark.js`: Dark mode theme
    - `light.js`: Light mode theme

#### State Management
- `/contexts`
  - `/character`: Character data management
    - `CharacterContext.jsx`: Character state context
    - `characterReducer.js`: State management logic
    - `/hooks`: Custom character data hooks
      - `useBasicInfo.js`: Basic info management
      - `usePersonalityInfo.js`: Personality data management
      - `useVampireInfo.js`: Vampire-specific data management

#### Custom Hooks
- `/hooks`
  - `useVampireAnimation.js`: Animation utilities
  - `useVampireTooltip.js`: Tooltip management
  - `useTheme.js`: Theme management utilities

## Key Features

### 1. Theme System
- Custom Material UI theme implementation
- Dark Ages vampire aesthetic
- Responsive design support
- Customizable color schemes

### 2. Component Architecture
- Modular card-based layout
- Reusable UI components
- Responsive stat visualization
- Custom form controls

### 3. State Management
- Context-based state management
- Reducer pattern for complex state
- Custom hooks for data access
- Modular state organization

### 4. Styling System
- Material UI styling integration
- Custom animations
- Consistent typography
- Theme-aware components

## Best Practices
1. Component Organization
   - Modular component structure
   - Clear separation of concerns
   - Reusable UI components

2. State Management
   - Centralized state with Context API
   - Custom hooks for state access
   - Reducer pattern for complex state

3. Styling
   - Theme-based styling
   - Consistent component styling
   - Responsive design patterns

4. Code Quality
   - Clear file organization
   - Consistent naming conventions
   - Component modularity

## Development Guidelines
1. Component Creation
   - Follow existing component patterns
   - Implement Material UI best practices
   - Maintain theme consistency

2. State Updates
   - Use appropriate context hooks
   - Follow reducer patterns
   - Maintain immutable state updates

3. Styling
   - Use theme variables
   - Follow Material UI patterns
   - Maintain responsive design

4. Code Organization
   - Group related components
   - Maintain clear file structure
   - Use consistent naming
