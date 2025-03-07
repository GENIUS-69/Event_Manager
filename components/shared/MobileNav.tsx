import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import { Separator } from "../ui/separator"
import NavItems from "./NavItems"

const MobileNav = () => {
    return (
        <nav className="md:hidden">
            <Sheet>
                <SheetTrigger className="align-middle">
                    <Image src="/assets/icons/menu.svg" width={24} height={24} alt="" className="cursor-pointer"/>
                </SheetTrigger>
                <SheetContent className="md:hidden flex flex-col gap-6 bg-white ">
                    <Image src="/assets/images/logo.svg" alt="" width={128} height={38} className="m-5"/>
                    <Separator className="border border-gray-50"/>
                    <NavItems/>
                </SheetContent>
            </Sheet>

        </nav>
    )
}

export default MobileNav
