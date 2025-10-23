import { useEffect, useState } from "react";

const useDeviceDetect = (): string => {
    const [ device, setDevice ] = useState('desktop');

    useEffect(() => {
        const userAgent = navigator.userAgent;
        const isMobile =  // quydagilarni ichi tekshiriladi va bulsa mobile aks xolda desctop vershionda qoladi
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                userAgent
            );
        setDevice(isMobile ? "mobile" : "desktop");
    }, [device]);

    return device;
};

export default useDeviceDetect;