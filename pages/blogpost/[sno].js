
import { useRouter } from "next/router";

const Post = () =>{
    const router = useRouter();
    const {sno} = router.query;

    return <p>Hello {sno}</p>
}

export default Post