import { skills } from "../constants/skills";

function Skills() {
    return (
        <div className="skills-container">
            {skills.map(skill => (
                <div key={skill.name} className="skill-item">
                    <img src={skill.icon} alt={skill.name} />
                    <p>{skill.name}</p>
                </div>
            ))}
        </div>
    );
}

export default Skills;
