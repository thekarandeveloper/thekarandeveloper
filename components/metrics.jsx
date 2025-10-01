import MetricCard from "./micro/Metrics"

export default function TextMetrics(){
    return(
        <div className="flex justify-center gap-2 py-20">
            
           <MetricCard number={180} desc={"Tailored learning paths to meet your goals."}></MetricCard>
            <div className="min-h-full border-r-1 border-gray-600"></div>
                     <MetricCard number={180} desc={"Tailored learning paths to meet your goals."}></MetricCard>

            <div className="min-h-full border-r-1 border-gray-600"></div>
        <MetricCard number={180} desc={"Tailored learning paths to meet your goals."}></MetricCard>

        </div>
    )
}