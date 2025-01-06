import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function MenuOld() {
    const router = useRouter();

    useEffect(() => {
        router.push("/table-menu");
    }, [router]);

    return <div></div>;
}
