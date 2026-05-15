import { focusAreas } from "@/data/home";

export function FocusSection() {
  return (
    <section className="service">
      <h3 className="h3 service-title">Primary Focus</h3>
      <ul className="service-list">
        {focusAreas.map((area) => (
          <li className="service-item" key={area.title}>
            <div className="service-icon-box">
              <img src={area.icon} alt={area.alt} width={40} />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">{area.title}</h4>
              <p className="service-item-text">{area.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
