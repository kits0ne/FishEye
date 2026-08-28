import styles from "./page.module.css";
import CTA from '@/components/CTA'
import DropDown from '@/components/DropDown'
import LikeButton from '@/components/LikeButton'
import Logo from '@/components/Logo'
import PhotographerLink from '@/components/PhotographerLink'
import PhotographerHeader from '@/components/PhotographerHeader'
import PictureFrame from '@/components/PictureFrame'
import SearchBar from '@/components/SearchBar'
import User from '@/components/User'

export default function Home() {
    return (
        <div className={styles.componentsRegistry}>
            <CTA inscription="Contactez-moi" />
            <DropDown />
            <LikeButton />
            <Logo />
            <PhotographerLink />
            <PhotographerHeader />
            <PictureFrame />
            <SearchBar />
            <User />
        </div>
    );
}