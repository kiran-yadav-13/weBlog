import WeBlogLoading from "../assets/weBlogLoading.mp4"
function Loading(){
    return(
        <div className="w-min-full h-min-full flex">
        <div className="flex flex-auto justify-center items-center">
            <div className="flex justify-center">
            <video  src={WeBlogLoading} autoplay="{true}" loop muted 
            className="absolute z-10 w-auto  
            w-[20rem] h-[20rem]  "/>
            </div>
            </div>
         </div>

        // <div className="min-w-full min-h-full w-auto  flex justify-center items-center bg-gray-100">
        //   <video  src={WeBlogLoading} autoplay="{true}" loop muted 
        //     className="absolute z-10 w-auto  
        //     min-w-[5rem]  max-w-none"/>
        // </div>
    )
}

export default Loading;