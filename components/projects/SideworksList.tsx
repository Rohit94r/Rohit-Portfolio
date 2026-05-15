import { sideworks } from "@/data/sideworks";

export function SideworksList() {
  return (
    <section className="sidework-posts">
      <ul className="sidework-posts-list">
        {sideworks.map((item) => (
          <li className="sidework-card" key={item.title}>
            <figure className="sidework-banner-box">
              <img src={item.image} alt={item.alt} />
            </figure>
            <div className="sidework-content">
              <div className="sidework-meta">
                {item.categories.map((category, index) => (
                  <span className="sidework-category" key={category}>
                    {index > 0 && <span className="dot" />} {category}
                  </span>
                ))}
              </div>
              <h3 className="h3 sidework-item-title">{item.title}</h3>
              <p className="sidework-text">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
