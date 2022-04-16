import Link from "next/link";
import { useRouter } from "next/router";
import { navigationLinks} from "../../utils/data";
import styles from './Navbar.module.css'

export const Navbar = () => {
  /* Rotas - Como saber qual link esta ativo */
  const router = useRouter()
  /* /nome do link */
  router.pathname

  return(
    <ul className={styles.container}>
      {navigationLinks.map((link, index)=>(
        <li key={index} className={ router.pathname===link.path ? styles.linkActive : styles.linkItem }>
          <Link href={link.path}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
}