import { useState, useCallback } from 'react';

const useSelectionOverlay = (onSelectionComplete) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPosition, setCurrentPosition] = useState(null);

  const openOverlay = useCallback((position) => {
    setCurrentPosition(position);
    setIsOpen(true);
  }, []);

  const closeOverlay = useCallback(() => {
    setIsOpen(false);
    setCurrentPosition(null);
  }, []);

  const handleSelect = useCallback((item) => {
    setSelectedItem(item);
    if (onSelectionComplete) {
      onSelectionComplete(item, currentPosition);
    }
    closeOverlay();
  }, [currentPosition, onSelectionComplete, closeOverlay]);

  return {
    isOpen,
    openOverlay,
    closeOverlay,
    handleSelect,
    selectedItem,
    currentPosition
  };
};

export default useSelectionOverlay;
