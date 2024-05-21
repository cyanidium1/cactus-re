import Layout from "@/components/Layout";
import Search from "@/components/Search";
import { CardBody } from "@nextui-org/react";
import Image from "next/image";

const property = [
    {
        name: "Room 13",
        nameRu: "Хата 13",
        desc: "Very good",
        descRu: "Ваще норм",
        loc: "Durres",
        type: 'apartment',
        square: 65,
        sqCertif: 50,
        price: 50000,
        roomQw: '1+1',
        locMaps: 'google.maps.com/location',
        condition: "good",
        conditionRu: "Норм",
        mainPhoto: "url",
        allPh: [
            "url", "url", "url"
        ]
    }
]

export default function Home() {
    return (
        <Layout>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                some textааааа
            </main>
            <Search />
        </Layout>
    );
}
