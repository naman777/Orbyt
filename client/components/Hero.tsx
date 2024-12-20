"use client"
import { useRouter } from "next/navigation"
import { Feature } from "./Feature"
import { PrimaryButton } from "./buttons/PrimaryButton"
import { SecondaryButton } from "./buttons/SecondaryButton"

export const Hero = () => {
    const router = useRouter();
    return <div>
        <div className="flex justify-center">
            <div className="text-7xl font-extrabold  text-start pt-8 max-w-xl">
                Automate 
                without limits.  
            </div>
        </div>
        <div className="flex justify-center pt-2">
            <div className="text-xl font-semibold text-gray-500 text-center pt-8 max-w-2xl">
                AI gives you automation superpowers, and Orbyt puts them to work. Pairing AI and Orbyt helps you turn ideas into workflows and bots that work for you.
            </div>
        </div>

        <div className="flex justify-center pt-4">
            <div className="flex">
                <PrimaryButton onClick={() => {
                    router.push("/signup")
                }} size="big">Get Started for free</PrimaryButton>
            </div>
        </div>

        <div className="flex justify-center pt-4">
            <Feature title={"Free Forever"} subtitle={"for core features"} />
            <Feature title={"More apps"} subtitle={"than any other platforms"} />
            <Feature title={"Cutting Edge"} subtitle={"AI Features"} />
        </div>
    </div>
}