export function Avatar({name, size = "small"}: {name : string, size?: "small" | "big"}){
    return(
        <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
            <span className={`font-normal text-white ${size === "small" ? "text-xs" : "text-lg"}`}> {name[0]} </span>    
        </div>
    );
}