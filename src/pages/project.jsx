import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ImageSlider from '../component/ImageSlider';
import { portfolioData } from '../data';

export const Project = () => {
  const { projectId } = useParams(); 
  const [selectedProject, setSelectedProject] = useState(null);

  const id = projectId;

  useEffect(() => {
    // Find the project by ID
    const project = portfolioData.items.find((item) => item.id === parseInt(id));
    setSelectedProject(project);
  }, [id]);

  const handleCloseSlider = () => {
    // Navigate back to the project list
    window.history.back();
  };

  return (
    <div className="App">
      {selectedProject && (
        <ImageSlider
          images={selectedProject.images}
          onClose={handleCloseSlider}
          siteUrl={selectedProject.link}
        />
      )}
    </div>
  );
};
