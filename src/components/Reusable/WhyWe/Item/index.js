import Style from "./index.module.css";

export default function Item({ title, description }) {
  return (
    <div className={Style.container}>
      <h1 className={Style.title}>{title}</h1>
      <p className={Style.description}>{description}</p>
    </div>
  );
}
