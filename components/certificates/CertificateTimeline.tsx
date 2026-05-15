import { FaBriefcase, FaTrophy } from "react-icons/fa6";
import { certificateGroups } from "@/data/certificates";

const groupIcons = {
  trophy: FaTrophy,
  briefcase: FaBriefcase,
};

export function CertificateTimeline() {
  return (
    <>
      {certificateGroups.map((group) => {
        const Icon = groupIcons[group.icon as keyof typeof groupIcons];

        return (
          <section className="timeline" key={group.group}>
            <div className="title-wrapper">
              <div className="icon-box">
                <Icon aria-hidden="true" />
              </div>
              <h3 className="h3">{group.group}</h3>
            </div>

            <ol className="timeline-list">
              {group.items.map((item) => (
                <li className="timeline-item" key={item.title}>
                  <h4 className="h4 timeline-item-title">{item.title}</h4>
                  <p className="timeline-text">{item.issuer}</p>
                  {item.image && (
                    <div className="certificate-container">
                      <img src={item.image} alt={`${item.title} proof`} />
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </section>
        );
      })}
    </>
  );
}
