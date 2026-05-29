import { useState, useEffect } from 'react';
import { projects } from '../staticData/projects';
import {
  IconCode,
  IconPlayStore,
  IconWeb,
  IconDownload,
  IconClose,
  IconSmartphone,
  IconExternal
} from '../svgs/Icons';

import ProjectLandscapeIllustration from './ProjectLandscapeIllustration';



function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured <span>Projects</span></h2>
        </div>
        <div className="projects-grid">
          {projects.map((proj) => {
            const displayedTech = proj.tech.slice(0, 3);
            const extraTechCount = proj.tech.length - 3;

            return (
              <div key={proj.name} className="project-card">
                {/* ── Image Header & Category Tag ── */}
                <div className="project-card-image-wrapper">
                  <div className="project-illustration-container">
                    <ProjectLandscapeIllustration projectName={proj.name} />
                  </div>
                  <span className="project-category-badge">{proj.category}</span>
                </div>

                <div className="project-card-body">
                  <h3 className="project-name">{proj.name}</h3>



                  <p className="project-description">{proj.description}</p>

                  {/* ── Tech Stack ── */}
                  <div className="project-tech-stack-section">
                    <div className="tech-stack-title">
                      <IconCode />
                      <span>Tech Stack</span>
                    </div>
                    <div className="project-tech">
                      {displayedTech.map((t) => (
                        <span key={t} className="tech-tag">{t}</span>
                      ))}
                      {extraTechCount > 0 && (
                        <span className="tech-tag-more">+{extraTechCount} more</span>
                      )}
                    </div>
                  </div>

                  {/* ── Key Achievements ── */}
                  <ul className="project-achievements-bullets">
                    {proj.achievements.map((ach, idx) => (
                      <li key={idx}>{ach}</li>
                    ))}
                  </ul>

                  {/* ── View Project Details Action ── */}
                  <div className="project-card-footer-action">
                    <button
                      onClick={() => setSelectedProject(proj)}
                      className="view-details-btn"
                    >
                      <IconSmartphone />
                      <span>View Project Details</span>
                      <IconExternal />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Project Details Modal ── */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedProject(null)}
              className="modal-close-btn"
              aria-label="Close modal"
            >
              <IconClose />
            </button>

            {/* Modal Image Header */}
            <div className="modal-image-wrapper">
              <div className="project-illustration-container">
                <ProjectLandscapeIllustration projectName={selectedProject.name} />
              </div>
              <span className="modal-category-badge">{selectedProject.category}</span>
            </div>

            <div className="modal-body">
              <div className="modal-header-info">
                <h2 className="modal-project-title">{selectedProject.name}</h2>
              </div>

              <div className="modal-section">
                <h4 className="modal-section-title">Project Description</h4>
                <p className="modal-description">{selectedProject.description}</p>
              </div>

              <div className="modal-section">
                <h4 className="modal-section-title">Tech Stack Used</h4>
                <div className="modal-tech-list">
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h4 className="modal-section-title">Key Achievements &amp; Outcomes</h4>
                <div className="modal-achievements-grid">
                  {selectedProject.achievements.map((ach, idx) => (
                    <div key={idx} className="modal-achievement-card">
                      <span className="achievement-icon">✦</span>
                      <p>{ach}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Action Links Footer */}
              {(selectedProject.playStoreUrl || selectedProject.webUrl) && (
                <div className="modal-footer-links">
                  {selectedProject.playStoreUrl && (
                    <a
                      href={selectedProject.playStoreUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="modal-action-btn playstore"
                    >
                      <IconPlayStore />
                      <span>Play Store</span>
                    </a>
                  )}
                  {selectedProject.webUrl && (
                    <a
                      href={selectedProject.webUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="modal-action-btn website"
                    >
                      <IconWeb />
                      <span>Visit Website</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProjectsSection;

