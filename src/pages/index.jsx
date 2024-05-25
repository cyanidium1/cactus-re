import Layout from "@/components/Layout";
import PropCard from "@/components/PropCard";
import Search from "@/components/Search";
import TopImage from "@/components/TopImage";
import { performRequest } from "@/lib/datocms";
import { Card, Pagination, Skeleton } from "@nextui-org/react";
import { useEffect, useState } from "react";



export default function Home() {





    const [portfolioPosts, setPortfolioPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 12;

    useEffect(() => {
        async function fetchData() {
            const first = itemsPerPage;
            const skip = (currentPage - 1) * itemsPerPage;

            const TOTAL_COUNT_QUERY = `
            query TOTAL_COUNT_QUERY {
                _allPropertiesMeta {
                count
                }
            }
            `;

            const PAGE_CONTENT_QUERY = `
            query {
                allProperties(first: ${first}, skip: ${skip}) {
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

            try {
                const [{ data: pageData }, { data: countData }] = await Promise.all([
                    performRequest({
                        query: PAGE_CONTENT_QUERY,
                        variables: { first, skip }
                    }),
                    performRequest({ query: TOTAL_COUNT_QUERY })
                ]);
                setPortfolioPosts(pageData.allProperties);
                setTotalPages(Math.ceil(countData._allPropertiesMeta.count / itemsPerPage));
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [currentPage]);


    return (
        <Layout isStyled={false}>
            <TopImage />
            <Search />
            <div className="flex flex-wrap max-w-5xl justify-between mx-auto mt-4 p-2">
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
            <div className="max-w-5xl w-full flex justify-center my-2 mx-auto">
                <Pagination
                    loop
                    showControls
                    color="success"
                    total={totalPages}
                    initialPage={1}
                    page={currentPage}
                    onChange={(page) => setCurrentPage(page)}
                />
            </div>
        </Layout>
    );
}
