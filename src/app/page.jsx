import styles from "./page.module.css";
import CTA from '@/components/CTA'
import DropDown from '@/components/DropDown'
import LikeButton from '@/components/LikeButton'
import Logo from '@/components/Logo'
import PhotographerLink from '@/components/PhotographerLink'
import PhotographerHeader from '@/components/PhotographerHeader'
import PictureFrame from '@/components/PictureFrame'
import FormTextArea from '@/components/FormTextArea'
import UserPicture from '@/components/UserPicture'

import { getPhotographer } from '@/app/lib/prisma-db'
import { getAllMediasForPhotographer } from '@/app/lib/prisma-db'

const photographerId = getPhotographer(82);
const medias = getAllMediasForPhotographer(photographerId);

export default function Home() {
    return (
        <div className={styles.componentsRegistry}>
            <CTA inscription="Contactez-moi" />
            <DropDown />
            <LikeButton mediaLikes={medias[0]?.likes || 5} />
            <Logo />
            <PhotographerLink />
            <PhotographerHeader />
            <PictureFrame />
            <FormTextArea />
            <UserPicture photographer={photographerId} />
        </div>
    );
}