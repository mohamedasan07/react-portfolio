import "./SectionHeading.css";

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}) {
  return (
    <div
      className={`section-heading section-heading--${align} ${
        className ? ` ${className}` : ""
      }`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-copy">{description}</p>}
    </div>
  );
}

export default SectionHeading;
