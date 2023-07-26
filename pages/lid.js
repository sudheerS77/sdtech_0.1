import LessonView from "@/components/lessons/lessonView/lessonview";
import SideBarComponent from "@/components/lessons/sidebar/sidebar.component";

const { default: HomeLayout } = require("@/Layout/Home.layout");
const { useRouter } = require("next/router")

const LessonPage = () => {
    const router = useRouter()
    const {lid} = router.query;
    return (
        <>
            <HomeLayout>
                <div style={{ display: "flex", alignItems: 'flex-start', gap: "40px"}}>
                    <SideBarComponent /> 
                    <LessonView />      
                </div>             
            </HomeLayout>
        </>
    )
}

export default LessonPage;