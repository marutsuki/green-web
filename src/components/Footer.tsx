import { GitHubLogo, LinkedIn } from "./symbols";

export default function Footer() {
    return <footer className="footer items-center p-4 bg-neutral text-neutral-content">
    <aside className="mx-4">
      <p>{"(´・ω・`)"} Made by marutsuki.</p>
    </aside> 
    <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <a href="https://github.com/marutsuki" target="_blank"><GitHubLogo className="fill-white"/>
      </a>
      <a href="https://www.linkedin.com/in/lucienlu7789/" target="_blank"><LinkedIn className="fill-white"/></a>
    </nav>
  </footer>
}