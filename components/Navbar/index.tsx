import Link from "next/link";
import { navigationLinks} from "../../utils/data";
import styles from './Navbar.module.css'

export const Navbar = () => {
  return(
    <ul className={styles.container}>
      {navigationLinks.map((link, index)=>(
        <li key={index} className={styles.linkItem}>
          <Link href={link.path}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
}