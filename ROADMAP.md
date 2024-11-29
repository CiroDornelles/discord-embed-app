# Roadmap - VTT (Virtual Table Top) System

## Planned Features & Technical Implementation

### Character Management
- [ ] Character Creation Wizard
  - Step-by-step guide for creating new characters
  - Automatic calculation of derived attributes
  - Template selection for different character types
  **Suggested Components:**
  - `@mui/material/Stepper` for wizard steps
  - `@mui/material/Autocomplete` for template selection
  - `@mui/lab/Timeline` for character history
  - `@mui/material/Dialog` for creation modal

- [ ] Character Portrait System
  - Upload and display character portraits
  - Support for multiple poses/expressions
  - Image cropping and basic editing tools
  **Suggested Components:**
  - `react-image-crop` for image editing
  - `@mui/material/ImageList` for multiple poses
  - `react-dropzone` for drag-n-drop uploads
  - `@mui/material/Skeleton` for loading states

### Dice Rolling System
- [ ] Custom Dice Roller
  - Support for various dice types (d4, d6, d8, d10, d20, etc.)
  - Difficulty checks and success calculations
  - Visual dice rolling animations
  - Roll history tracking
  - Customizable roll macros
  **Suggested Components:**
  - `react-three-fiber` for 3D dice animations
  - `@mui/material/SpeedDial` for quick roll actions
  - `@mui/material/List` for roll history
  - `@mui/material/Chip` for dice selection
  - `framer-motion` for 2D animations

### Combat System
- [ ] Initiative Tracker
  - Automatic initiative order calculation
  - Turn management
  - Status effect tracking
  - Round counter
  **Suggested Components:**
  - `@mui/material/Timeline` for turn order
  - `@mui/material/Badge` for status effects
  - `@mui/lab/TreeView` for nested combat actions
  - `@mui/material/LinearProgress` for turn timer

- [ ] Combat Grid
  - Configurable grid size
  - Token movement
  - Range calculations
  - Line of sight visualization
  - Fog of war
  **Suggested Components:**
  - `react-grid-layout` for grid system
  - `konva.js` for canvas manipulation
  - `@mui/material/Slider` for grid size control
  - `react-dnd` for drag-n-drop tokens

### Story & Campaign Management
- [ ] Relationship Map
  - Visual network of character relationships
  - Customizable relationship types
  - Relationship strength indicators
  - Timeline integration
  **Suggested Components:**
  - `react-force-graph` for relationship visualization
  - `@mui/material/Chip` for relationship types
  - `@mui/material/Slider` for relationship strength
  - `@mui/lab/Timeline` for relationship history
  - `react-flow-renderer` for node connections

- [ ] Campaign Calendar
  - Custom calendar system
  - Location-specific holidays
  - Moon phases tracking
  - Weather system
  **Suggested Components:**
  - `@mui/x-date-pickers` for calendar base
  - `@mui/material/Paper` for event cards
  - `@mui/icons-material` for weather icons
  - `@mui/material/Timeline` for event sequence
  - `@nivo/calendar` for heat map visualization

- [ ] Event Timeline
  - Visual timeline of campaign events
  - Multiple timeline tracks
  - Event categorization
  - Timeline branching
  **Suggested Components:**
  - `@mui/lab/Timeline` for main timeline
  - `@mui/material/Tabs` for timeline tracks
  - `@mui/material/Tree` for branching paths
  - `@mui/material/Card` for event details
  - `react-chrono` for advanced timeline features

- [ ] Note Management System
  - Rich text editor
  - Note categorization
  - Search functionality
  - Template system
  **Suggested Components:**
  - `@tiptap/react` for rich text editing
  - `@mui/material/TreeView` for note hierarchy
  - `@mui/material/Autocomplete` for smart search
  - `@mui/material/Tabs` for note categories
  - `@mui/material/SpeedDial` for quick actions

### Interactive Map Features
- [ ] Map Management
  - Map upload and display
  - Multiple map layers
  - Grid overlay options
  - Map scaling tools
  **Suggested Components:**
  - `leaflet` for map interactions
  - `@mui/material/Slider` for zoom control
  - `@mui/material/ToggleButtonGroup` for layer control
  - `react-measure` for responsive scaling

- [ ] Drawing Tools
  - Free-hand drawing
  - Shape tools
  - Measurement tools
  - Ping markers
  **Suggested Components:**
  - `react-canvas-draw` for free-hand
  - `fabric.js` for shape manipulation
  - `@mui/material/ButtonGroup` for tool selection
  - `@mui/material/Tooltip` for measurements

### Game Master Tools
- [ ] NPC Management
  - NPC character sheets
  - Quick stat blocks
  - NPC generator
  **Suggested Components:**
  - `@mui/material/Accordion` for stat blocks
  - `@mui/material/DataGrid` for NPC list
  - `@mui/material/Dialog` for quick view
  - `@mui/material/Fab` for quick actions

- [ ] Scene Management
  - Scene presets
  - Background music/ambiance
  - Lighting effects
  **Suggested Components:**
  - `@mui/material/Card` for scene cards
  - `@mui/material/Slider` for ambient controls
  - `howler.js` for audio management
  - `@mui/material/ColorPicker` for lighting

### Multiplayer Features
- [ ] Real-time Collaboration
  - Synchronized map viewing
  - Chat system
  - Dice roll sharing
  **Suggested Components:**
  - `socket.io-client` for real-time communication
  - `@mui/material/Drawer` for chat panel
  - `@mui/material/Snackbar` for notifications
  - `@mui/material/Avatar` for user presence

### UI/UX Improvements
- [ ] Customizable Themes
  - Dark/Light mode
  - Custom color schemes
  - UI scaling
  **Suggested Components:**
  - `@mui/material/CssBaseline` for base styles
  - `@mui/material/styles` for theme management
  - `@mui/material/Switch` for theme toggle
  - `react-color` for color picking

### System Integration
- [ ] Data Import/Export
  - Character data
  - Campaign settings
  - Maps and assets
  **Suggested Components:**
  - `@mui/material/Button` for import/export actions
  - `file-saver` for downloads
  - `papa-parse` for CSV handling
  - `@mui/material/CircularProgress` for loading states

## Current Focus
- Stabilizing core character sheet functionality
- Implementing basic dice rolling system
- Establishing foundational multiplayer features

## Long-term Vision
Our goal is to create a comprehensive VTT system that provides a seamless and immersive role-playing experience, with a focus on:
- Ease of use
- Performance
- Flexibility
- Community features
- Cross-platform compatibility
