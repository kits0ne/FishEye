import styles from "./page.module.css";
import CTA from '@/components/CTA'
import DropDown from '@/components/DropDown'
import LikeButton from '@/components/LikeButton'
import Logo from '@/components/Logo'
import PhotographerLink from '@/components/PhotographerLink'
import PhotographerHeader from '@/components/PhotographerHeader'
import PhotographerProfile from '@/components/PhotographerProfile'
import PictureFrame from '@/components/PictureFrame'
import FormTextArea from '@/components/FormTextArea'
import UserPicture from '@/components/UserPicture'

import { getPhotographer } from '@/app/lib/prisma-db'
import { getAllMediasForPhotographer } from '@/app/lib/prisma-db'

const photographerId = await getPhotographer(82);
const medias = await getAllMediasForPhotographer(82);

export default function Home() {
    return (
        <div className={styles.componentsRegistry}>
            <CTA inscription="Contactez-moi" />
            <DropDown />
            <LikeButton mediaLikes={medias[0]?.likes || 5} />
            <Logo />
            <PhotographerLink photographer={photographerId} />
            <PhotographerHeader photographer={photographerId} />
            <PhotographerProfile photographer={photographerId} />
            <PictureFrame />
            <FormTextArea />
            <UserPicture photographer={photographerId} />
        </div>
    );
}