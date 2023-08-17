import ManageLists from "@/services/data/ManageLists";
import HomeLists from "@/components/HomeLists";

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 0,
  fetchCache = "auto";

export default async function Home() {
  const ml = await ManageLists.auth();
  const initLists = await ml.getAll();

  return <HomeLists initLists={initLists} />;
}
