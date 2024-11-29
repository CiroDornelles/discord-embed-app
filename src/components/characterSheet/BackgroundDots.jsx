import React, { useState, useEffect } from 'react';
import DotRating from './DotRating';
import SelectionOverlay from '../common/SelectionOverlay';
import useSelectionOverlay from '../../hooks/useSelectionOverlay';

const BackgroundDots = ({ 
  value = 0, 
  onChange,
  position,
  selectedBackground = null
}) => {
  const [backgrounds, setBackgrounds] = useState([]);
  
  const handleSelectionComplete = (selectedItem) => {
    if (onChange) {
      // Garantir que o valor selecionado seja mantido
      const updatedBackground = {
        ...selectedItem,
        value: selectedItem.value || value || 0
      };
      onChange(updatedBackground, position);
    }
  };

  const { isOpen, openOverlay, closeOverlay, handleSelect } = useSelectionOverlay(handleSelectionComplete);

  useEffect(() => {
    const loadBackgrounds = async () => {
      const backgroundFiles = [
        'allies', 'alternate_identity', 'contacts', 'domain', 'fame',
        'generation', 'herd', 'influence', 'mentor', 'resources',
        'retainers', 'status'
      ];

      try {
        const loadedBackgrounds = await Promise.all(
          backgroundFiles.map(async (file) => {
            const response = await import(`../../data/wod/vampire/v20_dark_ages/backgrounds/${file}.json`);
            return {
              id: file,
              name: response.name,
              description: response.description,
              defaultValue: value,
              levels: response.levels
            };
          })
        );

        setBackgrounds(loadedBackgrounds);
      } catch (error) {
        console.error('Error loading backgrounds:', error);
      }
    };

    loadBackgrounds();
  }, [value]);

  const handleEmptyClick = (newValue) => {
    openOverlay(position);
  };

  const handleDotChange = (newValue) => {
    if (selectedBackground && onChange) {
      onChange({
        ...selectedBackground,
        value: newValue
      }, position);
    }
  };

  return (
    <>
      <DotRating
        value={value}
        onChange={selectedBackground ? handleDotChange : undefined}
        hasSelectedItem={!!selectedBackground}
        onEmptyClick={handleEmptyClick}
      />

      <SelectionOverlay
        isOpen={isOpen}
        onClose={closeOverlay}
        title="Selecione um Antecedente"
        options={backgrounds}
        onSelect={handleSelect}
        maxDots={5}
        description="Escolha um antecedente e defina seu nível"
      />
    </>
  );
};

export default BackgroundDots;
