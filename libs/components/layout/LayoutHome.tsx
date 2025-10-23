import { Stack } from "@mui/material";
import Head from "next/head";
import Top from "../Top";
import Footer from "../Footer";
import HeaderFilter from "../homepage/HeaderFilter";
// @ts-ignore: side-effect CSS import for Swiper has no types
import "swiper/css";
// @ts-ignore: side-effect CSS import for Swiper has no types
import "swiper/css/pagination";
// @ts-ignore: side-effect CSS import for Swiper has no types
import "swiper/css/navigation";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";

const withLayoutMain = (Component: any) => {
    return (props: any) => {
        // DEVICE: MOBILE vs PC
        const device = useDeviceDetect();

        if (device === "mobile") {  // mobiledan kelsa shunaqa layout chiqadi
            return (
                <>
                    <Head>
                        <title>Nestar</title>
                    </Head>
                    <Stack id="mobile-wrap">
                        <Stack id={"top"}>
                            <Top />
                        </Stack>

                        <Stack id={"main"}>
                            <Component {...props} />
                        </Stack>

                        <Stack id={"footer"}>
                            <Footer />
                        </Stack>
                    </Stack>

                </>
            );
        } else {
            return (
                <>
                    <Head>
                        <title>Nestar</title>
                    </Head>
                    <Stack id="pc-wrap">
                        <Stack id={"top"}>
                            <Top />
                        </Stack>
                        <Stack className={"header-main"}>
                            <Stack className={"container"}>
                                <HeaderFilter />
                            </Stack>
                        </Stack>

                        <Stack id={"main"}>
                            <Component {...props} />
                        </Stack>

                        <Stack id={"footer"}>
                            <Footer />
                        </Stack>
                    </Stack>
                </>
            );
        }
    };
};

export default withLayoutMain;