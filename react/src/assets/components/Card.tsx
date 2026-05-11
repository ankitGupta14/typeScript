import type {PropsWithChildren, ReactNode} from "react";


interface CardProps extends PropsWithChildren {
    title: string;
    description: string;
    image: string;
    footer?: ReactNode;
}
export function Card({title, children, description, image, footer}: CardProps) {
  return (
   <section>
    <h2>{title}</h2>
    <div>{children}</div>
    <p>{description}</p>
    <img src={image} alt={title} />
    {footer && <footer>{footer}</footer>}
   </section>
  )
}

