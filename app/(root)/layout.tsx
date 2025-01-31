import {Navbar} from "@/components/Navbar";
import {Footer} from "@/components/ui/footer-section";

export default function MainLayout({children,}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className={"flex min-h-screen flex-col"}>
            <Navbar/>
            <main className={"flex-1 wrapper"}>{children}</main>
            <Footer/>
        </div>
    );
}
