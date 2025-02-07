import Link from "next/link";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

const Navigation = () => {
  return (
    <Menubar className="border-b rounded-none rounded-b">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="font-bold text-xl">Ro.bbie.au</Link>

        <div className="flex items-center space-x-4">
          <MenubarMenu>
            <MenubarTrigger className="hover:underline">Showcase</MenubarTrigger>
            <MenubarContent>
              <MenubarItem asChild><Link href="/showcase/projects">Projects</Link></MenubarItem>
              <MenubarItem asChild><Link href="/showcase/clients">Clients</Link></MenubarItem>
              <MenubarItem asChild><Link href="/showcase/tech-stack">Tech Stack</Link></MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="hover:underline">Services</MenubarTrigger>
            <MenubarContent>
              <MenubarItem asChild><Link href="/services/video-editing">Video Editing</Link></MenubarItem>
              <MenubarItem asChild><Link href="/services/photography">Photography</Link></MenubarItem>
              <MenubarItem asChild><Link href="/services/ai-consulting">AI Consulting</Link></MenubarItem>
              <MenubarItem asChild><Link href="/services/web-development">Web Development</Link></MenubarItem>
              <MenubarItem asChild><Link href="/services/magento-development">Magento Development</Link></MenubarItem>
              <MenubarItem asChild><Link href="/services/it-support">IT Support</Link></MenubarItem>
              <MenubarItem asChild><Link href="/services/security-consulting">Security Consulting</Link></MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <Link href="/resume" className="hover:underline">Resume</Link>
          <Link href="/testimonials" className="hover:underline">Testimonials</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
      </div>
    </Menubar>
  );
};

export default Navigation;