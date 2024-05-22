import Layout from "@/components/Layout";
import PropCard from "@/components/PropCard";
import Search from "@/components/Search";
import TopImage from "@/components/TopImage";
import { performRequest } from "@/lib/datocms";
import { Card, Pagination, Skeleton } from "@nextui-org/react";
import { useEffect, useState } from "react";

const PAGE_CONTENT_QUERY = `
  query {
    allProperties {
      id
      titleEnglish
      _status
      _firstPublishedAt
      titleRussian
      titleEnglish
      roomsEnglish
      roomsRussian
      price
      mainPhoto { url }
      descriptionEnglish
      descriptionRussian
      city
      area
      stateEnglish
      stateRussian
      bathroomNumber
    }
  }
`;

export default function Home() {
    const [portfolioPosts, setPortfolioPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await performRequest({ query: PAGE_CONTENT_QUERY });
                setPortfolioPosts(data.allProperties);
                console.log(data.allProperties);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return (
        <Layout>
            <TopImage />
            <Search />
            <div className="flex flex-wrap max-w-5xl justify-between mx-auto mt-6">
                {loading ? (
                    Array(12).fill().map((_, index) => (
                        <Card key={index} className="w-80 space-y-5 p-4 my-3" radius="lg">
                            <Skeleton className="rounded-lg">
                                <div className="h-36 rounded-lg bg-default-300"></div>
                            </Skeleton>
                            <div className="space-y-3">
                                <Skeleton className="w-3/5 rounded-lg">
                                    <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                                </Skeleton>
                                <Skeleton className="w-4/5 rounded-lg">
                                    <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                                </Skeleton>
                                <Skeleton className="w-2/5 rounded-lg">
                                    <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                                </Skeleton>
                                <Skeleton className="w-2/5 rounded-lg">
                                    <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                                </Skeleton>
                                <Skeleton className="w-2/5 rounded-lg">
                                    <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                                </Skeleton>
                            </div>
                        </Card>
                    ))
                ) : (
                    portfolioPosts.map(el => (
                        <PropCard key={el.id} el={el} />
                    ))
                )}
            </div>
            <div className="max-w-5xl w-full flex justify-center mt-4">
                <Pagination loop showControls color="success" total={5} initialPage={1} />
            </div>
        </Layout>
    );
}
