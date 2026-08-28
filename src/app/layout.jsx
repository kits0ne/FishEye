import { DM_Sans } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/app/lib/registry";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata = {
  title: "FishEye",
  description: "Votre Photographe en un clic",
};

export default async function RootLayout({ children }) {
    return (
        <html lang="fr" className={dmSans.variable}>
          <body>
            <StyledComponentsRegistry>
              {children}
            </StyledComponentsRegistry>
          </body>
        </html>
    );
}
