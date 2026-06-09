/* About — bio, portrait placeholder, contact, CV columns. */

function About({ go }) {
  return (
    <div className="about-page" data-screen-label="About">
      <div className="about-top">
        <div className="about-bio-col">
          <p className="about-bio">Joshua Lee is a Communication Science student at the University of Twente, specialising in UX research and visual communication. He works at the intersection of data-driven design and strategic storytelling — conducting VR experiments in a lab, running think-aloud usability tests, and crafting visual identities for international communities. His work is defined by a commitment to rigour: every design decision is traceable to a research finding, and every finding is communicated in a form that non-specialists can act on.</p>
          <a href="assets/CV_General_2026.pdf" target="_blank" rel="noopener noreferrer" className="cv-btn">Resume</a>
        </div>
        <div className="portrait">
          <img src="assets/joshua_portrait.jpeg" alt="Joshua Lee" draggable="false" />
        </div>
        <div className="contact-info">
          <span className="contact-available">Available Aug 2026</span>
          <a href={"mailto:" + CONTACT}>{CONTACT}</a>
          <a href="https://www.linkedin.com/in/joshua-lee-1576b720b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/p1sxou/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <span style={{ display: "block", marginTop: 12, lineHeight: 1.8 }}>
            +31 643 005 279<br />Hengelo, Netherlands<br />Currently enrolled at the University of Twente · eligible for Dutch zoekjaar (orientation year) post-graduation
          </span>
        </div>
      </div>

      <div className="about-bottom">
        <div className="cv-col">
          <h3 style={{ fontSize: "17px" }}>Experience</h3>
          <div className="cv-entry"><span className="role">Community Moderator &amp; Content Designer</span><span className="place">TORIII Tech Corporation — Taipei</span><span className="year">Feb – Jul 2022</span></div>
          <div className="cv-entry"><span className="role">Manufacturing Department Intern</span><span className="place">All Ring Tech Corporation — Kaohsiung</span><span className="year">Jul – Sep 2021</span></div>
        </div>
        <div className="cv-col">
          <h3 style={{ fontSize: "17px" }}>Education</h3>
          <div className="cv-entry"><span className="role">BSc Communication Science</span><span className="place">University of Twente, Enschede</span><span className="year">Sep 2024 – Present</span></div>
          <div className="cv-entry"><span className="role">BSc Design</span><span className="place">Minerva Art Academy, Groningen</span><span className="year">Sep 2023 – Jul 2024</span></div>
        </div>
        <div className="cv-col">
          <h3 style={{ fontSize: "17px" }}>Skills</h3>
          <div className="cv-entry"><span className="role">Research</span><span className="place">Usability Testing · Think-Aloud · Qualitative Coding · Regression (R)</span></div>
          <div className="cv-entry"><span className="role">Design</span><span className="place">Figma · Axure · Illustrator · Photoshop · Procreate · Unity</span></div>
          <div className="cv-entry"><span className="role">Languages</span><span className="place">Mandarin (Native) · English (Professional working proficiency) · Dutch (B1)</span></div>
        </div>
      </div>
    </div>);

}

Object.assign(window, { About });