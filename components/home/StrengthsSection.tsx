import { strengths } from "@/data/home";

export function StrengthsSection() {
  return (
    <section className="strenghts">
      <h3 className="h3 strenghts-title">Strengths</h3>
      <ul className="strenghts-list has-scrollbar">
        {strengths.map((strength) => (
          <li className="strenghts-item" key={strength.title}>
            <div className="content-card" data-strenghts-item>
              <figure className="strenghts-avatar-box">
                <img src={strength.image} alt={strength.alt} width={60} />
              </figure>
              <h4 className="h4 strenghts-item-title">
                {strength.title}
              </h4>
              <div className="strenghts-text">
                <p>{strength.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
