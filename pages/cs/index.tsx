import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Stack } from "@mui/material";
import { NextPage } from "next";

const CS: NextPage = () => {
    const device = useDeviceDetect();

    if (device === "mobile") { // mobiledan kelsa shunaqa layout chiqadi boshqa xollarda ishlamaydi
        return <Stack>CS LIST MOBILE</Stack>
    } else {
        return (
            <div style={{ margin: "20px 0" }}>
                <Stack className="container">CS LIST</Stack>
            </div>
        );
    }
};

export default withLayoutBasic(CS);