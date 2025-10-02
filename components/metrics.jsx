import MetricCard from "./micro/Metrics"

export default function TextMetrics(){
    return(
        <div className="flex justify-center gap-2 py-20">
            
           <MetricCard number={50} desc={"Freelance Projects Delivered."}></MetricCard>
            <div className="min-h-full border-r-1 border-gray-600"></div>
             <MetricCard number={250} desc={"Downloads Across All Apps"}></MetricCard>

            <div className="min-h-full border-r-1 border-gray-600"></div>
        <MetricCard number={4} desc={"iOS Apps Published on App Store"}></MetricCard>

        </div>
    )
}